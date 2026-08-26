# Project Instructions, Darkum Design

Answer the actual question asked, without proactively reading every document in the project first. Each unread file is tokens never spent; each file read "just in case" is tokens spent for nothing. Read the minimum that answers the question, expand only if the conversation actually goes there.

## Every conversation, always

1. Read `docs/HANDOFF.md` first, and only that file. It's a short index (roughly 70 lines), not the project history itself.
2. Never use an em dash anywhere, in any language, in anything you write, generate, or edit. Use a comma, semicolon, or a hyphen instead. This is a standing rule with no exceptions.

Do not read anything else automatically. Everything below is read on demand, triggered by what the user is actually asking.

## Picking the right topic file, `docs/handoff/`

`docs/HANDOFF.md` has its own table of contents listing 12 files under `docs/handoff/`, each covering one subject: business context, logo, social media, website stack/hosting, homepage/header/footer, contact section, WP-CLI push tooling, bed frame configurator, domain/scope decisions, repo/coming-soon page, business terms, resolved items log.

- Match the question to the single row in that table whose description fits best, then read only that one file.
- If the question genuinely spans two topics (rare), read both, but still only those two, not the rest.
- Do not read the other 10+ files "for context" or "to be thorough." If a follow-up question in the same conversation turns out to need a second file, read it then, at that point, not up front.
- If the question is genuinely broad ("catch me up," "what's the full history," "summarize the project"), say what you'd need to read to answer that fully and ask whether to proceed, or work through it file by file as the conversation actually goes there, rather than reading all 12 in one shot.

## Reading `docs/TO-DO-List.md`

This is the live, currently-open task list, separate from the historical log in `docs/handoff/resolved-items-log.md`. Read it only when the question is actually about:
- what's open, blocked, or next
- whether a specific task is done or still pending
- adding, checking off, or reprioritizing something on the list

Don't read it for history questions or "how does X work" questions, `docs/handoff/*.md` covers that.

## Reading `docs/MARKETING-COPY.md`

Live/proposed platform copy (bios, descriptions, taglines). Read only when the question is about actual marketing text. For status questions like "is the Instagram bio done?", read `docs/handoff/social-media.md` instead, not this file.

## Reading `wp-custom-edits/`

`wp-custom-edits/Docs/wp-reference.md` plus the files under `wp-custom-edits/HTML/`, `CSS/`, `JS/`, `PHP/`, and `Scripts/` are the mirror of what's actually pasted into WordPress, and the safe live-push tooling (`wp-push.ps1` + `wp-eval-push.php`). Read only when the question is specifically about WordPress custom code, the Additional CSS field, or pushing a change live. Not needed for general project-status questions.

## Reading `docs/offer_market-research.md` and `docs/PROPOSAL.md`

Both archived, superseded by Bido's flat-rate offer (see `docs/handoff/business-terms.md`). Read only if the question is specifically about the pre-flat-rate pricing history or the original freelancer quotes.

## Standing rules worth remembering without re-reading a file

These are cheap enough to keep in mind from here rather than force a file read every time they matter. The authoritative copy lives in `docs/HANDOFF.md`'s Standing Rules section, if in doubt or if something here looks stale, that file wins.

- No em dash, anywhere, ever.
- Word choice: "Shop" (EN) / "محل" (AR), not "Studio"/"استوديو".
- "Female-owned"/"female-led" positioning stays off every platform's copy until Darkum Design's Commercial Registration is confirmed.
- No-subscription preference: favor free or one-time-payment tools over recurring costs.
- Safe WordPress live pushes go through `wp-custom-edits/Scripts/wp-push.ps1` + `wp-eval-push.php`, never raw shell interpolation.
