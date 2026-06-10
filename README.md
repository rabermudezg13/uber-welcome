# Uber Welcome Page - GitHub Pages + Firebase Free

## Files
- `index.html` = tablet screen
- `admin.html` = phone control screen
- `firebase-config.js` = paste your Firebase configuration here
- `assets/spotify-jam-qr.jpg` = Spotify Jam QR image

## Firebase setup
1. Go to Firebase Console.
2. Create project.
3. Add a Web App.
4. Copy the `firebaseConfig` object.
5. Paste it inside `firebase-config.js`.
6. Go to Build > Realtime Database > Create Database.
7. Start in test mode.
8. In Rules, paste this for quick testing:

```json
{
  "rules": {
    "ride": {
      ".read": true,
      ".write": true
    }
  }
}
```

## GitHub Pages URLs
Tablet:
`https://YOUR-USER.github.io/YOUR-REPO/`

Phone:
`https://YOUR-USER.github.io/YOUR-REPO/admin.html`

## English phrase
"Welcome aboard. Thanks for joining the ride with me. I’m Rodrigo. Please feel free to enjoy the Spotify Jam, choose your favorite music, grab a cold drink from the cooler, and enjoy the snacks."
