## Getting Started

First, run the application used:

```bash
npm run android-app
```

or used commands in two separate terminals

```bash
npx react-native start
npx react-native run-android
```

Update assets (fonts/images):

```bash
 npx react-native-asset
```

Create new svg components from icons svg:

- upload files to assets/svg
- next run command

  ```bash
  npm run build:svg
  ```

- you have SVG Component in `components/atoms/icons` now

Clean gradlew:

```bash
cd android && ./gradlew clean && cd ..
```
