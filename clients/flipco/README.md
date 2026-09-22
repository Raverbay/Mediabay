# Flip&Co — Demo Commerce

Clean demo repository for the Flip&Co fashion e-commerce experience.

## Structure

- `index.html` — editorial homepage
- `shop.html` — Online Edit
- `collections.html` / `collection.html` — collections
- `brand.html` — brand index
- `product.html` — product detail
- `checkout.html` — demo order request
- `order-confirmation.html` — confirmation
- `faq.html`, `shipping.html`, `returns.html`, `privacy.html`, `terms.html`, `cookies.html`
- `js/` — canonical runtime modules
- `data/products.json` — catalog source
- `data/collections.json` — collection source
- `data/brands.json` — brand source
- `data/site.json` — store metadata
- `assets/` — local brand/product/store assets
- `admin/` — local demo import utility

## Runtime

The site is static and deployable on GitHub Pages or Netlify. Product data is loaded from `data/products.json`. No framework or build step is required.

## Demo behavior

Checkout is an order-request flow, not a live payment gateway. Product and editorial images may include external demo assets until replaced with the client's final photography.

## Deployment

Deploy the contents of this repository root to the `Raverbay/333` repository (GitHub Pages or Netlify). Hard-refresh after deployment if the previous version was cached.

## QA

- JavaScript syntax checked with `node --check`
- JSON validated
- Local HTML references checked
- Duplicate legacy runtime files removed
- Header/menu layer order consolidated
- Circular mobile menu styling removed
- Cache versions aligned to V52.6


## V-FINAL — Client Presentation QA
- Global runtime cache version aligned to V55.0.
- Header, preloader, menu anchors and cart runtime preserved and syntax-checked.
- Hero rotation uses local Flip&Co editorial assets; no external Unsplash dependency.
- Checkout remains an order-request demo flow and does not process real payments.
- Confirmation copy accurately says the request was received, not that a payment/order was completed.
- Final browser QA should still be performed on the client's target domain, with real inventory, legal texts and contact details confirmed before commercial launch.
