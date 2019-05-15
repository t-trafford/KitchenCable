# KitchenCable


## Requirements

 - [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
 - [ionic4](https://ionicframework.com/docs/installation/cli)
 - [cordova](https://cordova.apache.org/docs/en/latest/guide/cli/)

## Getting Started

Clone the repo and make it yours:

```bash
git clone --depth 1 https://github.com/t-trafford/KitchenCable
cd kitchencable
rm -rf .git
```

Install dependencies:

```bash
    "@angular/animations": "^7.2.10",
    "@angular/common": "^7.2.2",
    "@angular/core": "^7.2.2",
    "@angular/forms": "^7.2.2",
    "@angular/http": "^7.2.2",
    "@angular/platform-browser": "^7.2.2",
    "@angular/platform-browser-dynamic": "^7.2.2",
    "@angular/router": "^7.2.2",
    "@ionic-native/core": "^5.0.0",
    "@ionic-native/splash-screen": "^5.0.0",
    "@ionic-native/status-bar": "^5.0.0",
    "@ionic/angular": "^4.0.0",
    "angular-calendar": "^0.26.11",
    "angular-calendar-week-hours-view": "^1.0.2",
    "cordova-android": "8.0.0",
    "cordova-ios": "^5.0.1",
    "cordova-plugin-device": "^2.0.2",
    "cordova-plugin-ionic-keyboard": "^2.1.3",
    "cordova-plugin-ionic-webview": "^3.1.2",
    "cordova-plugin-splashscreen": "^5.0.2",
    "cordova-plugin-statusbar": "^2.4.2",
    "cordova-plugin-whitelist": "^1.3.3",
    "core-js": "^2.5.4",
    "ionic4-auto-complete": "^1.6.1",
    "rxjs": "~6.3.3",
    "ts-xlsx": "0.0.11",
    "zone.js": "~0.8.29"
```

Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
ionic serve -l
```

## Steps to run app

1. Install node.js and mongodb globally inside local environment.
2. install all packages by navigating to project director using command cd kitchencable
3. run command npm install inside kitchencable directory from terminal/cmd.
4. install ionic 4 and cordova globally inside local env.
5. to run app in browser's simulator of run command ionic serve -l
6. to add platform ios run command ionic cordova platform add ios.
7. to add platform android run command ionic cordova platform add android.
8. to build iOS package run command ionic cordova build --ios
9. to build android package run command ionic cordova build --android
10. to emulate application on specific device run command  ionic run android --target=<emulator_id>
11. after this make sure apikitchencable project is up and running.
