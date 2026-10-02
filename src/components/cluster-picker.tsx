"use client";

import { useState } from "react";
import {
  CLUSTERS,
  COMMITMENTS,
  EXPERIENCE_LEVELS,
  FORMATS,
  SKILLS,
} from "@/data/clusters";
import type { PickerAnswers, SkillId } from "@/data/types";
import { recommendEvents } from "@/lib/recommend";
import { EventResults } from "./event-results";

const TOTAL_STEPS = 5;

const STEP_TITLES = [
  { title: "Pick a career cluster", sub: "Start with the industry that sounds most like you." },
  { title: "How do you want to compete?", sub: "This shapes whether you go solo, join a team, or write a paper." },
  { title: "What are you good at?", sub: "Pick as many as apply. These are the parts of an event you will actually enjoy." },
  { title: "Where are you starting from?", sub: "There is no wrong answer. It only changes what we recommend." },
  { title: "How much time do you have?", sub: "Every event takes real work. Being honest here saves you a bad match." },
];

export function ClusterPicker() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<PickerAnswers>({
    cluster: null,
    format: "no-preference",
    skills: [],
    experience: null,
    commitment: null,
  });

  const canAdvance =
    step === 0 ? answers.cluster !== null
    : step === 1 ? true
    : step === 2 ? answers.skills.length > 0
    : step === 3 ? answers.experience !== null
    : answers.commitment !== null;

  function toggleSkill(skill: SkillId) {
    setAnswers((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  }

  function goBack() {
    if (done) {
      setDone(false);
      setStep(TOTAL_STEPS - 1);
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  }

  function goNext() {
    if (!canAdvance) return;
    if (step === TOTAL_STEPS - 1) {
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
  }

  const results = done ? recommendEvents(answers) : [];
  const heading = STEP_TITLES[step];

  return (
    <section
      id="picker"
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-deca-gold">
            {done ? "Your matches" : `Step ${step + 1} of ${TOTAL_STEPS}`}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {done ? "Events you should do" : heading?.title}
          </h2>
          {!done && heading?.sub ? (
            <p className="mt-1.5 max-w-xl text-sm text-slate-400">{heading.sub}</p>
          ) : null}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goBack}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            disabled={!done && step === 0}
          >
            Back
          </button>
          {!done ? (
            <button
              type="button"
              onClick={goNext}
              className="rounded-full bg-deca-gold px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-30"
              disabled={!canAdvance}
            >
              {step === TOTAL_STEPS - 1 ? "See my events" : "Next"}
            </button>
          ) : null}
        </div>
      </div>

      {!done ? (
        <div className="mb-8 flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }, (_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-colors ${
                index <= step ? "bg-deca-gold" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      ) : null}

      {done ? (
        <EventResults results={results} answers={answers} onRestart={() => { setDone(false); setStep(0); }} />
      ) : (
        <div key={step}>
          {step === 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CLUSTERS.map((cluster) => {
                const active = answers.cluster === cluster.id;
                return (
                  <button
                    key={cluster.id}
                    type="button"
                    onClick={() => setAnswers((p) => ({ ...p, cluster: cluster.id }))}
                    aria-pressed={active}
                    className={`group rounded-2xl border p-5 text-left transition ${
                      active
                        ? "border-deca-gold bg-deca-gold/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="text-lg font-semibold text-white">{cluster.name}</span>
                    <span className="mt-0.5 block text-sm text-deca-gold/90">{cluster.tagline}</span>
                    <span className="mt-2.5 block text-sm leading-relaxed text-slate-400">
                      {cluster.description}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : null}

          {step === 1 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {FORMATS.map((format) => {
                const active = answers.format === format.id;
                return (
                  <button
                    key={format.id}
                    type="button"
                    onClick={() => setAnswers((p) => ({ ...p, format: format.id }))}
                    aria-pressed={active}
                    className={`rounded-2xl border p-5 text-left transition ${
                      active
                        ? "border-deca-gold bg-deca-gold/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="text-base font-semibold text-white">{format.name}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-slate-400">{format.blurb}</span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setAnswers((p) => ({ ...p, format: "no-preference" }))}
                aria-pressed={answers.format === "no-preference"}
                className={`rounded-2xl border p-5 text-left transition sm:col-span-2 ${
                  answers.format === "no-preference"
                    ? "border-deca-gold bg-deca-gold/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                }`}
              >
                <span className="text-base font-semibold text-white">No preference</span>
                <span className="mt-1.5 block text-sm text-slate-400">
                  Show me whatever fits best, I am flexible.
                </span>
              </button>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SKILLS.map((skill) => {
                const active = answers.skills.includes(skill.id);
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => toggleSkill(skill.id)}
                    aria-pressed={active}
                    className={`rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-deca-gold bg-deca-gold/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="text-sm font-semibold text-white">{skill.name}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-400">{skill.blurb}</span>
                  </button>
                );
              })}
            </div>
          ) : null}

          {step === 3 ? (
            <div className="grid gap-3">
              {EXPERIENCE_LEVELS.map((level) => {
                const active = answers.experience === level.id;
                return (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setAnswers((p) => ({ ...p, experience: level.id }))}
                    aria-pressed={active}
                    className={`rounded-2xl border p-5 text-left transition ${
                      active
                        ? "border-deca-gold bg-deca-gold/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="text-base font-semibold text-white">{level.name}</span>
                    <span className="mt-1 block text-sm text-slate-400">{level.blurb}</span>
                  </button>
                );
              })}
            </div>
          ) : null}

          {step === 4 ? (
            <div className="grid gap-3 sm:grid-cols-3">
              {COMMITMENTS.map((commitment) => {
                const active = answers.commitment === commitment.id;
                return (
                  <button
                    key={commitment.id}
                    type="button"
                    onClick={() => setAnswers((p) => ({ ...p, commitment: commitment.id }))}
                    aria-pressed={active}
                    className={`rounded-2xl border p-5 text-left transition ${
                      active
                        ? "border-deca-gold bg-deca-gold/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="text-base font-semibold text-white">{commitment.name}</span>
                    <span className="mt-1 block text-sm text-slate-400">{commitment.blurb}</span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}