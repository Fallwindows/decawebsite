"use client";

import { useState } from "react";
import { CLUSTER_MAP } from "@/data/clusters";
import type { PickerAnswers, ScoredEvent } from "@/data/types";
import { Icon } from "./icon";

const FORMAT_LABELS: Record<string, string> = {
  individual: "Individual",
  team: "Team",
  written: "Written",
  leadership: "Leadership",
};

const LEVEL_LABELS: Record<string, string> = {
  "brand-new": "Great for first-timers",
  "some-deca": "Some DECA experience helpful",
  experienced: "Built for experienced members",
};

const COMMITMENT_LABELS: Record<string, string> = {
  light: "Light workload",
  moderate: "Moderate workload",
  heavy: "Heavy workload",
};

function matchColor(score: number) {
  if (score >= 80) return "text-emerald-300";
  if (score >= 60) return "text-deca-gold";
  return "text-slate-400";
}

interface EventResultsProps {
  results: ScoredEvent[];
  answers: PickerAnswers;
  onRestart: () => void;
}

export function EventResults({ results, answers, onRestart }: EventResultsProps) {
  const [openId, setOpenId] = useState<string | null>(results[0]?.event.id ?? null);
  const cluster = answers.cluster ? CLUSTER_MAP[answers.cluster] : null;

  return (
    <div className="space-y-4">
      {cluster ? (
        <p className="text-sm text-slate-400">
          Based on your answers, here are the three events we think you should enter
          in <span className="font-semibold text-white">{cluster.name}</span> first.
        </p>
      ) : null}

      {results.map(({ event, score, reasons }, index) => {
        const open = openId === event.id;
        const eventCluster = CLUSTER_MAP[event.cluster];

        return (
          <article
            key={event.id}
            className={`overflow-hidden rounded-2xl border transition ${
              open ? "border-deca-gold/40 bg-deca-gold/[0.06]" : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenId(open ? null : event.id)}
              aria-expanded={open}
              className="flex w-full items-start gap-4 p-5 text-left"
            >
              <span
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm font-bold ${matchColor(score)}`}
              >
                {index + 1}
              </span>

              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-lg font-semibold text-white">{event.name}</span>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-300">
                    {FORMAT_LABELS[event.format]}
                  </span>
                </span>
                <span className="mt-1 block text-sm text-slate-400">{event.summary}</span>
                <span className="mt-2.5 flex flex-wrap gap-1.5">
                  {reasons.map((reason) => (
                    <span
                      key={reason}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {reason}
                    </span>
                  ))}
                </span>
              </span>

              <span className="hidden shrink-0 text-right sm:block">
                <span className={`block text-2xl font-bold ${matchColor(score)}`}>{score}%</span>
                <span className="text-[11px] uppercase tracking-wide text-slate-500">match</span>
              </span>
            </button>

            {open ? (
              <div className="border-t border-white/10 px-5 pb-5 pt-4">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1">
                    <Icon name={eventCluster?.icon ?? "sparkle"} className="h-3.5 w-3.5" />
                    {eventCluster?.name}
                  </span>
                  <span className="rounded-full bg-white/5 px-2.5 py-1">
                    {LEVEL_LABELS[event.level]}
                  </span>
                  <span className="rounded-full bg-white/5 px-2.5 py-1">
                    {COMMITMENT_LABELS[event.commitment]}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      What you actually do
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{event.whatYouDo}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Prep tip
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{event.prepTip}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {event.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-deca-gold/10 px-2.5 py-1 text-xs text-deca-gold"
                    >
                      {skill.replace("-", " ")}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        );
      })}

      <p className="pt-2 text-sm text-slate-500">
        Not sure yet? Talk to your chapter advisor before you commit. They know which
        events your school actually sends and which ones have open teams.
      </p>

      <button
        type="button"
        onClick={onRestart}
        className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/30 hover:text-white"
      >
        Start over
      </button>
    </div>
  );
}