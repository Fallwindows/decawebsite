export type ClusterId =
  | "business-services"
  | "communication-services"
  | "consumer-services"
  | "entrepreneurship"
  | "financial-services"
  | "hospitality-tourism"
  | "marketing";

export type EventFormat = "individual" | "team" | "written" | "leadership";

export type SkillId =
  | "presenting"
  | "creative"
  | "numbers"
  | "people"
  | "writing"
  | "hands-on"
  | "organizing"
  | "tech";

export type ExperienceLevel = "brand-new" | "some-deca" | "experienced";

export type CommitmentLevel = "light" | "moderate" | "heavy";

export interface CareerCluster {
  id: ClusterId;
  name: string;
  tagline: string;
  description: string;
  exampleRoles: string[];
  icon: IconName;
}

export interface DecaEvent {
  id: string;
  name: string;
  cluster: ClusterId;
  format: EventFormat;
  summary: string;
  whatYouDo: string;
  skills: SkillId[];
  level: ExperienceLevel;
  commitment: CommitmentLevel;
  prepTip: string;
}

export interface PickerAnswers {
  cluster: ClusterId | null;
  format: EventFormat | "no-preference";
  skills: SkillId[];
  experience: ExperienceLevel | null;
  commitment: CommitmentLevel | null;
}

export interface ScoredEvent {
  event: DecaEvent;
  score: number;
  reasons: string[];
}

export type IconName =
  | "briefcase"
  | "broadcast"
  | "cart"
  | "rocket"
  | "bank"
  | "concierge"
  | "megaphone"
  | "mic"
  | "palette"
  | "calculator"
  | "chat"
  | "pen"
  | "wrench"
  | "clipboard"
  | "cpu"
  | "sparkle"
  | "trophy";