# Xcode handoff — Uber Welcome (2026-10-21)

## Objective
Continue the existing **Uber Welcome** VIP passenger system, not the separate ABOARD app. The production app is a GitHub Pages web app with an iPad passenger view and an iPhone driver admin, synchronized through Firebase Realtime Database. Before choosing a SwiftUI rebuild, ask whether to use a native app or a WKWebView wrapper; preserve the deployed web experience.

Repo: https://github.com/rabermudezg13/uber-welcome
Passenger: https://rabermudezg13.github.io/uber-welcome/
Driver: https://rabermudezg13.github.io/uber-welcome/admin.html
Read **agents.md** for the detailed source-of-truth technical contract.

## Already implemented and merged
1. **Live ETA**: initial minutes entered by driver; live countdown on iPad; driver can Pause, Resume, **−1 minute** or **+1 minute** per tap (exactly 60 seconds); no GPS tracking. Firebase `ride` has `estimatedMinutes`, `etaRemainingSeconds`, `etaPaused`, `etaUpdatedAt`. Reset clears ETA.
2. **Spotify Jam QR**: driver creates Jam manually in Spotify, pastes current invitation link into admin, taps **Share Jam QR to iPad**. iPad displays current QR on Welcome and Explore screens. **Hide Jam QR** and **Reset for Next Passenger** clear the link. Firebase path `spotifyJam` holds `{url,updatedAt}`; URL hosts accepted are `open.spotify.com` and `spotify.link`. Jam creation and music playback are NOT automated.
3. Existing welcome/Explore Miami, passenger name and languages, Halloween visuals and translated honorifics, Café Cultura/Ludy promotions, and Spotify track shortcut buttons must be preserved.

## Not implemented yet
**Search Music** on passenger iPad (search artists/tracks/albums and select playback on driver's car audio). Requires a separate secure backend, Spotify authorization/API capability review, and no public credentials. Driver retains volume control. Do not describe it as shipped.

## Suggested Xcode tasks
- Identify target: SwiftUI native or WKWebView shell; preserve web app as fallback.
- Replicate/bridge Firebase listeners for `ride`, `screen`, `theme/halloween`, `spotifyJam`.
- Build passenger-safe Spotify Jam QR view using native QR generation, with real-time updates and clear/reset.
- Keep ETA 1-minute adjustments, pause/resume and zero clamping; account for app suspension and clock differences.
- Secure Firebase admin writes (README currently documents unsafe test rules), validate Jam URLs and handle offline/reconnect.
- Test driver iPhone and passenger iPad simultaneously before any production cutover.

## Acceptance tests
- Driver pastes a new Jam link -> both passenger views show new QR; replacing link replaces QR; hiding/reset removes QR.
- ETA starts at entered minutes, counts down, pauses without drifting, resumes, +1 adds 60 seconds, −1 removes 60 seconds, never below zero.
- Welcome/Explore, multilingual greetings, Halloween and promotional content remain functional.
- No Spotify tokens in public client code or Firebase public data.

## Process
Use a new GitHub feature branch and PR for changes. Report whether changes are committed, reviewed, merged and tested; do not conflate them.
