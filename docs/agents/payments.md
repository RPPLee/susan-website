# Payments

The site takes payments through Stripe Payment Links. Nothing on the site talks to Stripe; a
button opens a link Stripe hosts, Stripe takes the card, and the buyer lands back on
`/thanks/?paid=1`. No keys, no server, no webhook.

## Plumbing (built 2026-09-24)

- Every service (`_services/*.md`) and every program card (`pages/programs.html`) has an optional
  `checkout` field. When it holds a URL the page shows **Pay** as the main button and the contact
  form as the second one. Empty, the page shows **Get in Touch** as before.
- Susan pastes the links herself in Pages CMS: Services > (service) > "Stripe payment link", and
  Programs > (program) > "Stripe payment link".
- `/thanks/?paid=1` says the payment went through; plain `/thanks/` still thanks a form sender.
- The `price` field on each service is the text shown on the page and on the Pay button. Keep it
  in step with the Payment Link's amount.

## Making a Payment Link (Susan or Lee, in Stripe)

1. dashboard.stripe.com > Product catalog > Add product. Name it exactly as the site does
   (for example "Coaching: initial session"), set the price, one-time.
2. Payment Links > New > pick the product > Create link.
3. After payment: choose "Don't show confirmation page" and set the redirect to
   `https://metaphasemgt.com/thanks/?paid=1`.
4. Copy the link (`https://buy.stripe.com/...`) into the editor field.

## Which items get a link

| Item | Price on the site today | Link |
|---|---|---|
| Coaching & Mentoring | $250 initial session, $150/hour thereafter | one link per amount, or a single "initial session" link |
| Peer Circles | $500 formation and planning | one link |
| Team Building | $500 initial planning | one link |
| Tapestry | $400/person (five) or $300/person (six to ten) | two links, or one link with adjustable quantity |
| Pivot Point Passage | custom | none, contact form |
| BizBlitz, VizBlitz | contact for pricing | none until Susan sets a price |

Susan is sending Lee the final amounts and her Stripe account details; until then the fields stay
empty and the site behaves exactly as before.
