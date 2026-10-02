import { EVENTS } from "@/data/events";
import { CLUSTER_MAP } from "@/data/clusters";
import type {
  DecaEvent,
  ExperienceLevel,
  PickerAnswers,
  ScoredEvent,
} from "@/data/types";

const WEIGHTS = {
  cluster: 40,
  format: 25,
  skills: 25,
  experience: 10,
} as const;

const EXPERIENCE_DISTANCE: Record<ExperienceLevel, Record<ExperienceLevel, number>> = {
  "brand-new": { "brand-new": 0, "some-deca": 1, experienced: 2 },
  "some-deca": { "brand-new": 1, "some-deca": 0, experienced: 1 },
  experienced: { "brand-new": 2, "some-deca": 1, experienced: 0 },
};

function scoreCluster(event: DecaEvent, answers: PickerAnswers): number {
  if (!answers.cluster) return 1;
  return event.cluster === answers.cluster ? 1 : 0;
}

function scoreFormat(event: DecaEvent, answers: PickerAnswers): number {
  if (answers.format === "no-preference") return 1;
  return event.format === answers.format ? 1 : 0.5;
}

function scoreSkills(event: DecaEvent, answers: PickerAnswers): number {
  if (answers.skills.length === 0) return 0.5;
  const overlap = event.skills.filter((skill) =>
    answers.skills.includes(skill),
  ).length;
  if (overlap === 0) return 0;
  return overlap / answers.skills.length;
}

function scoreExperience(event: DecaEvent, answers: PickerAnswers): number {
  if (!answers.experience) return 0.5;
  const distance = EXPERIENCE_DISTANCE[answers.experience][event.level];
  return 1 - distance / 2;
}

function buildReasons(event: DecaEvent, answers: PickerAnswers): string[] {
  const reasons: string[] = [];
  const cluster = CLUSTER_MAP[event.cluster];

  if (answers.cluster && event.cluster === answers.cluster) {
    reasons.push(`Matches your ${cluster?.name ?? "chosen"} interest`);
  }

  const matchedSkills = event.skills.filter((skill) =>
    answers.skills.includes(skill),
  );
  if (matchedSkills.length > 0) {
    reasons.push(`Leans on ${matchedSkills.length} strength${matchedSkills.length === 1 ? "" : "s"} you picked`);
  }

  if (answers.experience) {
    if (answers.experience === "brand-new" && event.level === "brand-new") {
      reasons.push("Built for someone competing for the first time");
    } else if (answers.experience === "experienced" && event.level === "experienced") {
      reasons.push("Scaled up for experienced competitors");
    }
  }

  if (answers.commitment === "light" && event.commitment === "light") {
    reasons.push("Fits a light weekly commitment");
  } else if (answers.commitment === "heavy" && event.commitment === "heavy") {
    reasons.push("Commits the hours you said you have");
  }

  if (answers.format === event.format) {
    reasons.push("Matches the format you chose");
  }

  if (reasons.length === 0) {
    reasons.push("A solid all-around fit for the cluster you chose");
  }

  return reasons.slice(0, 3);
}

export function recommendEvents(answers: PickerAnswers): ScoredEvent[] {
  return EVENTS.map((event) => {
    const score =
      WEIGHTS.cluster * scoreCluster(event, answers) +
      WEIGHTS.format * scoreFormat(event, answers) +
      WEIGHTS.skills * scoreSkills(event, answers) +
      WEIGHTS.experience * scoreExperience(event, answers);

    return {
      event,
      score: Math.round(score),
      reasons: buildReasons(event, answers),
    };
  })
    .sort((a, b) => b.score - a.score || a.event.name.localeCompare(b.event.name))
    .slice(0, 3);
}

export function topMatchesForCluster(clusterId: string, limit = 4): DecaEvent[] {
  return EVENTS.filter((event) => event.cluster === clusterId).slice(0, limit);
}