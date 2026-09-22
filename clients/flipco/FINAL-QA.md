# Flip&Co — Final QA Report
Date: 2026-09-20

## Automated checks
- JavaScript syntax: PASS (`node --check` on every JS file)
- JSON parsing: PASS (products, brands, collections, site)
- Local HTML references: PASS (no missing local src/href targets)
- Duplicate HTML IDs: PASS
- External `_blank` links: PASS (`noopener` present)
- Product IDs: PASS (17 unique IDs)
- Product local artwork fallbacks: PASS
- Homepage discover anchors: PASS (`finder`, `look`, `store`)

## Runtime corrections included
- Global preloader/header runtime kept in canonical `js/site.js`.
- Cart add API uses `FLIPCO_CART.add(...)`.
- Cache versions aligned to V55.0.
- Homepage hero uses local editorial assets.
- Checkout confirmation describes the flow as an order request, not a completed payment.

## Important product-data note
Some catalog entries are intentionally marked `available: true` while having no online size map because they are presented as store/reference selections. The PDP therefore shows “CHECK AVAILABILITY” rather than an online add-to-bag action when no sizes are available.

## Commercial go-live blockers
This build is presentation-ready, not a production checkout:
1. Payment provider/backend is not connected.
2. Inventory must be confirmed against Flip&Co's real stock.
3. Shipping/returns/legal texts must be finalized by the business.
4. Production domain, canonical metadata, analytics and cookie-consent configuration must be finalized.
5. Product/editorial image licensing/ownership must be confirmed.

## Presentation status
READY FOR CLIENT PRESENTATION.
