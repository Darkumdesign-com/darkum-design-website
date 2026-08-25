# HANDOFF.md Restructure Plan

**Purpose:** `docs/HANDOFF.md` has grown too large for efficient reading across sessions. This plan splits it into a slim index file plus topic-based subfiles under `docs/handoff/`, following the same "small entry point, detail on demand" pattern as Claude Code's own MEMORY.md convention.

**Do not push to GitHub as part of this task.** Complete every step below, including the final verification step, then stop. Sobhy and Claude (Claude.ai/Claude Desktop) will review the result together before anything is committed or pushed.

**No em dashes anywhere, including in any new text you write for the rewritten index.** Use commas instead, matching the existing standing rule already documented in `HANDOFF.md` and `TO-DO-List.md`.

---

## Step 0: Backup

Before touching anything, copy the current `docs/HANDOFF.md` to `docs/HANDOFF-old.md`, unmodified. This is the pre-reorganize reference copy and the source of truth for the verification step at the end. Do not edit `HANDOFF-old.md` after creating it.

---

## Step 1: Create the new folder

Create `docs/handoff/`.

---

## Step 2: Move content into topic subfiles

For each row below, move the listed section(s)/content from the current `docs/HANDOFF.md` into the named new file, verbatim, preserving all existing detail, dates, and wording. This is a content **move**, not a rewrite or summary, every fact, date, and caveat currently in HANDOFF.md must land somewhere in the new structure. Do not compress, shorten, or paraphrase historical/narrative content while moving it.

Each new subfile should start with a top-level heading matching its topic (e.g. `# Business Context`) and, where it makes sense (files with a lot of narrative history), a short "Current state" summary at the very top, above the historical detail, if a natural one already exists in the source text (for example, §4's existing "SESSION END STATE (2026-08-26)" note is exactly this kind of thing and should become the top of `contact-section.md`, not stay buried after the narrative). Do not invent a new "current state" summary if one doesn't already exist in the source content, just move the content as-is in that case.

| New file | Source content from current `HANDOFF.md` |
|---|---|
| `docs/handoff/business-context.md` | §1, Business Context, in full |
| `docs/handoff/logo.md` | §2, Logo, in full |
| `docs/handoff/social-media.md` | §3, Social Media, in full (platform status table, Commercial Registration blocker subsection, business phone number subsection, business email addresses subsection, unified inbox/Metricool subsection) |
| `docs/handoff/website-stack-and-hosting.md` | From §4: the "Stack (confirmed)" subsection, "Local development environment, set up then torn down" subsection, "GoDaddy Managed WordPress, known limitations" subsection, "GoDaddy hosting environment, reference" subsection, "Backup strategy, GoDaddy Premium Backups" subsection, "GitHub CI/CD to GoDaddy, decided against for now" subsection |
| `docs/handoff/homepage-and-header-footer.md` | From §4: "Homepage build, started 2026-08-17" subsection (hero ticker + background troubleshooting), "Header logo legibility" subsection (including the SVG upload saga), "Footer redesign" subsection (all dated entries, 2026-08-19/20/21), "Arabic font fallback, Explore button contrast, and site title typo" subsection, "Local debug snapshot excluded from git" subsection, "Site structure" subsection, "Homepage sliding catchphrases, confirmed scope" subsection |
| `docs/handoff/contact-section.md` | From §4: "Contact section, map + floating form card" subsection, "Contact section, bilingual content pass + capability correction" subsection, "Contact section troubleshooting round 2" subsection, "Contact section troubleshooting round 3" subsection, "Contact section troubleshooting round 4" subsection, "SESSION END STATE (2026-08-26)" note (move this to the top of the file as the current-state summary, per the instruction above) |
| `docs/handoff/wp-cli-workflow-and-tooling.md` | From §4: "Homepage content mirror + Posh-SSH snapshot tooling" subsection. Also pull out the `eval-file` + `file_get_contents()` safe live-push method described in the round 3/4 write-ups into its own clearly labeled subsection here, since it is a project-wide method for pushing to Additional CSS (post 83) or homepage content (post 35), not just a Contact-section-specific detail, while leaving the original narrative describing how it was discovered in `contact-section.md` intact (a short cross-reference note pointing to this file is fine, do not delete the narrative from `contact-section.md`) |
| `docs/handoff/bed-frame-configurator.md` | From §4: "Bed Frame product configurator, required fields" subsection (the fields table) and the "Plugin decision, GoDaddy compatibility confirmed" subsection (APF) |
| `docs/handoff/domain-and-scope-decisions.md` | From §4: "Domain" subsection, "Confirmed scope decisions (2026-08-13)" subsection |
| `docs/handoff/repo-infra-coming-soon-page.md` | §5, Repo / Infra, in full |
| `docs/handoff/business-terms.md` | §6, Proposal / Business Terms, in full |
| `docs/handoff/resolved-items-log.md` | §7, Resolved Items Log, in full |

§8 (Reusable Marketing Copy) is a short pointer paragraph to `docs/MARKETING-COPY.md` and does not need its own subfile, it stays inline in the rewritten index (Step 3).

---

## Step 3: Rewrite `docs/HANDOFF.md` as a slim index

After all content has been moved out, rewrite `docs/HANDOFF.md` itself. The new version should be short, roughly 100 to 150 lines, and contain only:

1. The existing header block (title, Last updated date, Maintainer line, Pricing note).
2. A short paragraph explaining this file is now an index, and that detailed history lives in `docs/handoff/`.
3. A brief business-context summary (a few sentences, not the full §1, just enough for someone to orient immediately: who Darkum Design is, the flat-fee arrangement, the key stakeholders, the current content freeze pending Dema).
4. A "Confirmed stack" snapshot (WordPress, WooCommerce, Kadence, Polylang, hosting, current live-vs-build domain situation) in a few bullet points.
5. An "Active blockers" list (Commercial Registration, APF tier decision, legal pages, Dema copy freeze), matching what's already accurate in the current file.
6. A short "Where things stand" summary, this should absorb the existing "SESSION END STATE (2026-08-26)" framing at the index level too (a one-paragraph version, the fuller version lives in `contact-section.md` per Step 2), so a reader gets the gist without opening a subfile.
7. A table of contents linking to every file in `docs/handoff/`, each with a one-line description of what it covers, plus the existing pointer to `docs/MARKETING-COPY.md` for §8's content.

Do not remove the "No em dashes anywhere" standing rule and any other standing rules/principles currently stated in the file (naming conventions, CSS workflow notes, etc.), if they don't fit naturally into the slim index, add a short "Standing rules" section listing them, or place them in whichever subfile they most relate to (for example, CSS-related standing rules could live in `website-stack-and-hosting.md`), your judgment on placement is fine as long as nothing is silently dropped.

---

## Step 4: Verification against `HANDOFF-old.md`

This is the last step. Do not skip it and do not push anything to GitHub before or after it.

1. Go through `HANDOFF-old.md` section by section, and confirm every fact, date, decision, credential, file path, and caveat in it exists somewhere in the new `docs/HANDOFF.md` plus `docs/handoff/*.md` set. Flag anything that appears to have been lost, duplicated incorrectly, or altered in meaning during the move.
2. Confirm every link/reference inside the new `docs/HANDOFF.md` table of contents actually resolves to a real file with the expected content.
3. Confirm no new file accidentally introduces an em dash.
4. Produce a short written summary of the verification: what was checked, what matched cleanly, and anything flagged as uncertain or needing a human look. Do not resolve ambiguities yourself if the correct placement isn't obvious, list them for Sobhy and Claude to decide instead.
5. **Stop here.** Do not run `git add`, `git commit`, or `git push`. Sobhy and Claude (Claude.ai/Claude Desktop) will review the restructured files and your verification summary together before deciding to commit and push.

---

## Notes for whoever picks this up mid-session

- `TO-DO-List.md` and other docs currently reference HANDOFF.md by section number (e.g. "see HANDOFF.md §4," "§7"). Updating those cross-references to point at the new filenames is a deliberate follow-up task, not part of this plan, do not attempt it here unless asked.
- This is a mechanical content reorganization, not an opportunity to correct, re-interpret, or clean up the underlying project history. If something in the source content looks outdated or wrong while moving it, move it as-is and note the concern in the Step 4 verification summary rather than changing it.
