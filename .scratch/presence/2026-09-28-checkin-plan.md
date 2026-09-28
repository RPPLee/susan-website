# Plan from the Sep 28 2026 check-in

Source: `Susan checkin - 2026_09_28 06_58 CDT - Notes by Gemini.pdf` (repo root, gitignored).
Next work session: Wednesday Oct 1 2026, 3:30 PM Eastern.

Susan's steer for this round: no more outside research on networking groups or events. Word of
mouth and existing circles, aiming for one more coaching client. Keep the workload small.

## 1. Digital business card (Lee, before Wednesday)

Goal: something Susan can share from her phone in ten seconds, in the card's branding.

Source facts, from the printed card (`MetaphaseManagementAssociates_BusinessCard_Back.pdf`):

| Field | Value |
|---|---|
| Name | Susan Mills |
| Title | Founder |
| Email | susanmills@metaphasemgt.com |
| Phone | 510-524-3434 |
| Address | PO Box 8480, Berkeley, CA 94707 |
| Link | linktr.ee/metaphasemgt (still resolves) |

The Gemini notes quote an older email (susanm@metaphasemanagement.com) and ZIP 94704 from
the first Drive folder. The printed card and the site both say susanmills@metaphasemgt.com and
94707. Use those; confirm with Susan on Wednesday.

Deliverables, in build order:

1. `assets/susan-mills.vcf`: a vCard 4.0 with name, org, title, phone, email, address, site,
   LinkedIn, Substack, and the logo as an embedded photo. Opens straight into Contacts on
   iPhone and Android.
2. `/card/` page: logo, the six contact lines, a "Save contact" button (the .vcf), and buttons
   for call, email, site, LinkedIn. Text fields read from `_data/settings.yml` so Susan can edit
   them in Pages CMS. Add the address to settings; the site has none today.
3. QR code PNG pointing at https://metaphasemgt.com/card/, in brand teal, saved to
   `assets/images/card-qr.png` and shown on the page. Susan keeps a copy in Photos so she can
   show it in person.
4. A share image, `assets/social/share-card.png`, from the existing share-card template, so
   the link previews well in texts and LinkedIn messages.
5. Handoff: short email to Susan with the link, the QR image, and the .vcf attached, plus two
   lines on how to add /card/ to her phone home screen.

Not doing: a paid card service (Popl, HiHello, Blinq), Apple Wallet pass, NFC tags. A page on
her own domain costs nothing and she already edits the site.

Verify: build passes `npm test`; open the page on a phone; tap Save contact and check the
contact lands with the photo; scan the QR with the camera app.

## 2. Outreach for Susan's coaching practice (Lee)

- Slack John Walter for coffee. Mention Susan as a coach if it fits. (Alabama Launchpad
  winner, former lawyer, meditates.)
- Message Sean: suggest a casual conversation with Susan, a few sessions rather than a package,
  not a pitch.
- Email Susan the ICF San Francisco Bay Area Coaches Chapter link. She dislikes ICF for
  personal reasons, so send it once with no follow-up. (Agreed during the call before she asked
  for no more research.)

## 3. Lee's own 12-week program items

- Slack Will Blackburn (Birmingham AI) for an informational interview, closing Wednesday.
  Fallback: Richie. Talk about the AI-enabled Let's Go Birmingham project.
- Log "practice presence and attentiveness in conversation" as tactic 7 in the program.
- Read Lewis Hyde, The Gift: How the Creative Spirit Transforms the World.

## 4. Susan's items (Lee checks in Wednesday)

- Update LinkedIn to a professional profile and verify the account by end of week. Note: the
  14-day window to reopen her closed verified profile ends about Sep 28. If verification fails,
  the fallback from Sep 16 was the support form, then work-email verification.
- Start the LinkedIn Premium outreach: post insights, ask clients for testimonials.
- Travel: New York until Oct 13, Berkeley Oct 13 to Nov 7.

## 5. Still open from earlier rounds

- Susan's first Pages CMS sign-in (ticket 04).
- Prices on the older service pages still unconfirmed by Susan.
- Stripe checkout fields empty until Susan sends prices and an account (docs/agents/payments.md).
- Proposals op-069 to op-076 wait on the decisions page.
- Gmail draft to Ritchie Kruunenberg (Innovation Depot) unsent.
- Testimonials data file empty; the section stays hidden until it has one.
- Sample flyer for the 30-minute idea in docs/research/flyers/ is uncommitted and all placeholders.
- Substack look (ticket 11) deferred.
