# docs/handoff/ Internal Cross-Reference Cleanup Plan

**Purpose:** the HANDOFF.md restructure (see `docs/restructure-plan.md` for that original job) deliberately left old `§N` section-number references untouched inside the moved content, since that plan was a content move, not a rewrite. Claude Desktop has since fixed the `§N` references in `docs/TO-DO-List.md` and `README.md`, those two files are done, do not touch them here. What's left is roughly 65 `§N` references still living inside the `docs/handoff/*.md` files themselves, pointing at each other. This plan is for cleaning those up.

**Do not push to GitHub as part of this task.** Complete every step below, including the final verification step, then stop. Sobhy and Claude (Claude.ai/Claude Desktop) will review the result together before anything is committed or pushed.

**No em dashes anywhere**, including in any new text you write. Use commas instead, per the standing rule already documented in `HANDOFF.md`.

---

## Step 0: Confirm the safety net

Check `git status` and `git log` in the project repo. If the current `docs/handoff/*.md` files are already committed (from the prior restructure task), that commit is your rollback point, note its hash for reference. If for any reason they are not yet committed, stop and flag this to Sobhy before proceeding, do not create a separate `-old` backup copy for this task, git history is sufficient here since the restructure itself already has its own verified backup (`docs/HANDOFF-old.md`).

---

## Step 1: Find every reference

Grep for the `§` character across every file in `docs/handoff/`. For each match, capture enough surrounding context (a few lines before and after) to understand what the reference is actually pointing to, not just which old section number it cites.

---

## Step 2: Resolve each reference against real content, not just the old number

This is the part that needs judgment, not a blind find-and-replace. The old `HANDOFF.md` section numbers do not map one-to-one onto the new files, several fan out across multiple new files depending on what the specific reference was actually about. Use this table as a starting orientation, but verify each individual occurrence against its actual subject matter before deciding the destination:

| Old section | Likely new file(s) |
|---|---|
| §1, Business Context | `business-context.md` |
| §2, Logo | `logo.md` |
| §3, Social Media | `social-media.md` |
| §4, Website | Could be any of: `website-stack-and-hosting.md`, `homepage-and-header-footer.md`, `contact-section.md`, `wp-cli-workflow-and-tooling.md`, `bed-frame-configurator.md`, `domain-and-scope-decisions.md`, depending on the specific subject (stack/hosting decisions vs. homepage/header/footer build vs. Contact section work vs. WP-CLI tooling vs. the Bed Frame configurator vs. domain/scope decisions) |
| §5, Repo/Infra | `repo-infra-coming-soon-page.md` |
| §6, Business Terms | `business-terms.md` |
| §7, Resolved Items Log | `resolved-items-log.md` |
| §8, Marketing Copy | No dedicated subfile, this content stays referenced via `docs/MARKETING-COPY.md`, pointed to inline from `HANDOFF.md` itself |

For every match, read enough of the surrounding sentence to know what topic it's actually citing, then pick the file that topic now lives in. If a reference points to something that ended up in the *same* file it's already in (a self-reference after the split), don't turn it into a file link, rephrase it naturally instead (e.g. "see above" or "see the [subsection name] above/below," whichever reads correctly given where it now sits), or remove the pointer entirely if the referenced content is now immediately adjacent and the pointer has become redundant.

---

## Step 3: Make the replacement, minimally

Replace only the reference itself (e.g. "see §4" becomes "see `docs/handoff/contact-section.md`"), keeping the surrounding sentence's wording and structure intact wherever possible, adjusting only what's grammatically necessary for the new phrasing to read correctly. This is not an opportunity to rewrite, re-interpret, or clean up the surrounding prose, only the reference itself changes.

---

## Step 4: Verification

This is the last step. Do not skip it and do not push anything to GitHub before or after it.

1. Re-grep for `§` across `docs/handoff/*.md` after your edits, confirm none remain unless deliberately left as a genuinely internal same-document pointer that no longer makes sense as a file link (explain any such case explicitly in your summary).
2. Spot-check a sample of the new references, confirm each one actually resolves to a real file and, ideally, to content that's actually relevant to what the sentence is describing.
3. Confirm no em dashes were introduced in any newly-written phrasing.
4. Produce a short written summary: how many references were found, how many were resolved to each destination file, any that were ambiguous or required a judgment call worth double-checking, and any self-references that were rephrased instead of linked.
5. **Stop here.** Do not run `git add`, `git commit`, or `git push`. Sobhy and Claude (Claude.ai/Claude Desktop) will review the changes and your verification summary together before deciding to commit and push.

---

## Notes

- `docs/TO-DO-List.md` and `README.md` are already done, do not re-touch them.
- This is a mechanical reference-resolution pass, not an opportunity to correct, re-interpret, or clean up the underlying project history or facts. If something looks outdated or wrong while you're in there, leave the content as-is and note the concern in the Step 4 summary rather than changing it.
