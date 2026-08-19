# EventNova — Event Booking Platform

A professional, responsive event discovery and ticket-booking platform created as a college project.

## Features

- Responsive homepage and event catalogue
- Dynamic event data from JSON
- Search and category/type/price filters
- Event details and schedules
- Ticket booking with form validation
- Interactive seat selection
- Group/ticket quantity handling
- Promo code demo (`EARLY20`)
- GST calculation and checkout UI
- Digital ticket and booking ID
- Wishlist using localStorage
- Login/signup demo UI
- Dark mode
- Admin analytics dashboard
- Staff check-in demo
- Immersive event themes and experiences

## Technology

HTML5, CSS3, JavaScript, JSON, localStorage, Chart.js.

## Run locally

Open the folder in VS Code and use the Live Server extension, or run any local static server. Because the project loads `data/events.json` with `fetch`, using a local server is recommended instead of opening `index.html` directly.

## Demo notes

Payment, authentication, email/SMS, QR scanning, fraud detection, 2FA and real-time backend operations are represented as frontend/demo UI. A production deployment would connect these flows to a secure backend and real payment/notification providers.

## Suggested GitHub Pages

After uploading to GitHub, enable Settings → Pages → Deploy from branch → main → /(root).
