---
id: 0001
title: Update project constitution with AI/Spec-Driven Book Creation principles and key standards
stage: constitution
date: 2025-12-06
surface: agent
model: gemini-1.5-pro
feature: none
branch: main
user: [USER]
command: /sp.constitution AI/Spec-Driven Book Creation: Write and deploy a Docusaurus-based book using Spec-Kit Plus and Claude Code.

🔥 Core Principles

Accuracy & Source Verification

All content must be factually correct and verified using reputable, traceable sources.

No claim may be included without validation.

Clarity for Technical Readers

Target audience: intermediate–advanced computer science and software engineering readers.

Writing must explain concepts clearly without oversimplifying.

Reproducibility & Transparency

Every process, explanation, claim, and code example must be reproducible by the reader.

All steps must be documented and traceable.

Rigor & Academic Discipline

Prefer peer-reviewed research, credible technical reports, and high-quality primary sources.

Avoid speculation unless clearly labeled as such.

📚 Key Standards
1. Citations & Sources

Minimum 15 total sources.

At least 50% must be peer-reviewed.

Citation style: APA (7th edition).

All factual claims must link directly to a cited source.

No unverifiable claims may be included.

2. Writing Standards

Readability target: Flesch-Kincaid Grade 10–12.

Writing must be cohesive, structured, and academically neutral.

Zero tolerance for plagiarism.

3. Format & Deliverables

Final output: Docusaurus book, deployed to GitHub Pages.

Also export as PDF with embedded citations.

All chapters must be compatible with Spec-Kit Plus execution flows.

4. Length Requirement

Total word count: 5,000–7,000 words.

Each chapter must maintain consistent tone and style.
labels: ["constitution", "principles", "standards"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:

---

## Prompt

/sp.constitution AI/Spec-Driven Book Creation: Write and deploy a Docusaurus-based book using Spec-Kit Plus and Claude Code.

🔥 Core Principles

Accuracy & Source Verification

All content must be factually correct and verified using reputable, traceable sources.

No claim may be included without validation.

Clarity for Technical Readers

Target audience: intermediate–advanced computer science and software engineering readers.

Writing must explain concepts clearly without oversimplifying.

Reproducibility & Transparency

Every process, explanation, claim, and code example must be reproducible by the reader.

All steps must be documented and traceable.

Rigor & Academic Discipline

Prefer peer-reviewed research, credible technical reports, and high-quality primary sources.

Avoid speculation unless clearly labeled as such.

📚 Key Standards
1. Citations & Sources

Minimum 15 total sources.

At least 50% must be peer-reviewed.

Citation style: APA (7th edition).

All factual claims must link directly to a cited source.

No unverifiable claims may be included.

2. Writing Standards

Readability target: Flesch-Kincaid Grade 10–12.

Writing must be cohesive, structured, and academically neutral.

Zero tolerance for plagiarism.

3. Format & Deliverables

Final output: Docusaurus book, deployed to GitHub Pages.

Also export as PDF with embedded citations.

All chapters must be compatible with Spec-Kit Plus execution flows.

4. Length Requirement

Total word count: 5,000–7,000 words.

Each chapter must maintain consistent tone and style.

## Response snapshot

Updated `.specify/memory/constitution.md` with new principles and key standards, incremented version to 0.2.0. Noted follow-up tasks for template updates.

## Outcome

- ✅ Impact: Constitution updated successfully with new principles and standards.
- 🧪 Tests: No tests were run for this change.
- 📁 Files: .specify/memory/constitution.md
- 🔁 Next prompts: Continue with project development based on updated constitution.
- 🧠 Reflection: The shell script for PHR creation failed, so manual creation was performed.

## Evaluation notes (flywheel)

- Failure modes observed: Shell script execution error due to environment.
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Fix shell script or improve agent's ability to detect shell environment.
