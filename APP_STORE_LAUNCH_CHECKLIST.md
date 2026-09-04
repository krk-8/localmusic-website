# LocalMusic App Store Launch Checklist

Use this checklist before submitting `LocalMusic` to the App Store.

## 1. Product Setup

- [ ] Join the Apple Developer Program.
- [ ] Generate the Xcode project from `project.yml`.
- [ ] Confirm the bundle ID matches App Store Connect.
- [ ] Set the release `Version` and `Build` in Xcode.
- [ ] Verify the app name shown to users is final.
- [ ] Confirm the app icon and accent branding are final.

## 2. App Store Connect

- [ ] Create the app record in App Store Connect.
- [ ] Set platform to iOS.
- [ ] Add the bundle ID for `com.localmusicmp3.app` or your production bundle ID.
- [ ] Add the Support URL.
- [ ] Add the Privacy Policy URL.
- [ ] Add the optional Marketing URL or homepage URL.
- [ ] Finish agreements, tax, and banking.

## 3. Core App QA

- [ ] Import songs from the Files picker.
- [ ] Confirm metadata extraction works for title, artist, duration, and artwork.
- [ ] Test playback while importing more files.
- [ ] Test playback while editing song names.
- [ ] Test search and sort in the library.
- [ ] Test playlist creation, renaming, reordering, and playback.
- [ ] Test mini player and full-screen now playing screen.
- [ ] Test shuffle, repeat, and seek.
- [ ] Test background playback on a real device.
- [ ] Test lock screen and Control Center controls.
- [ ] Test widget display and playback actions.
- [ ] Test restoring previous queue and playback position after relaunch.

## 4. Monetization

- [ ] Create the in-app purchase for `LocalMusic Lifetime Pro` (Lifetime - Non-Consumable).
- [ ] Create the auto-renewable subscription for `LocalMusic Yearly Pro` (Yearly - Recurring Subscription).
- [ ] Verify product IDs match `com.localmusicmp3.app.pro` and `com.localmusicmp3.app.pro.yearly`.
- [ ] Confirm Pro messaging is clear: Yearly auto-renewable subscription and Lifetime one-time unlock.
- [ ] Confirm the free tier limit (up to 5 songs) is described correctly.
- [ ] Test purchase flow in Sandbox for both plans.
- [ ] Test restore purchases.
- [ ] Add review notes that explain how to trigger the paywall.

## 5. Privacy And Compliance

- [ ] Confirm your privacy policy matches the app behavior.
- [ ] State clearly that users import their own audio files.
- [ ] Confirm you are not claiming streaming or licensed catalog features.
- [ ] Complete the App Privacy questionnaire in App Store Connect.
- [ ] Complete export compliance questions.
- [ ] Confirm your support page explains supported formats and troubleshooting.

## 6. App Store Listing

- [ ] Write the app subtitle.
- [ ] Write the app description.
- [ ] Add keywords.
- [ ] Choose primary and secondary category.
- [ ] Complete the age rating questionnaire.
- [ ] Upload screenshots for required iPhone sizes.
- [ ] Make screenshots match the current UI.
- [ ] Mention the key features:
- [ ] Local offline playback
- [ ] Import files from Files
- [ ] Playlists
- [ ] Background playback
- [ ] Lock screen controls
- [ ] Widgets
- [ ] Equalizer
- [ ] Pro Yearly & Lifetime options

## 7. Recommended Website Pages

- [ ] Homepage (`https://krk-8.github.io/localmusic-website/`)
- [ ] Privacy Policy (`https://krk-8.github.io/localmusic-website/privacy.html`)
- [ ] Support / FAQ (`https://krk-8.github.io/localmusic-website/support.html`)
- [ ] Terms of Use (`https://krk-8.github.io/localmusic-website/terms.html`)

## 8. Review Notes Template

Use something like this in App Store Connect review notes:

> LocalMusic is an offline audio player for user-provided files. Users import supported audio files from the iOS Files picker, and those files are copied into the app's local storage for playback. The app does not provide a music catalog or streaming service. The app offers two optional Pro upgrade options: a yearly auto-renewable subscription and a one-time non-consumable unlock for unlimited imports.

## 9. Final Submission

- [ ] Archive a release build in Xcode.
- [ ] Upload the build to App Store Connect.
- [ ] Attach the uploaded build to the app version.
- [ ] Add release notes.
- [ ] Submit for review.
- [ ] Release manually or automatically after approval.
