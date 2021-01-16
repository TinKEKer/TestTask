# Welcome to my React-Native Test Task

### This app has 3 main screens:
* Home
* News
* Profile.

### Some information about project:
Profile screen is protected with authentication(default login:Admin,password:12345).
News screen fetching mok data from [JSONPlaceholder](https://jsonplaceholder.typicode.com) and chunk's it to array of 20 items.
All state saved into AsyncStorage with help of [Redux-Persist](https://github.com/rt2zz/redux-persist#readme)
Authentication route is done by me,so in fact that's HOC which can be dynamicly configured for every route you want.

### Main Technologies used in project:
* [React-Native](https://github.com/facebook/react-native)
* [React-Navigation](https://github.com/react-navigation/react-navigation)
* [Redux](https://github.com/reduxjs/redux)
* [Redux-Persist](https://github.com/rt2zz/redux-persist)
* [AsyncStorage](https://github.com/react-native-async-storage/async-storage)
* [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)

### Installation
Download/Clone the projec,install dependencies and start the app.
```sh
$ cd RNTest
$ npm install
$ npm run ios or npm run android
```

### HELP
 Android:
 > If you having issues with building app just try this:
 Download/Clone the projec,install dependencies and start the app.
```sh
$ cd android&&./gradlew clean + delete .gralde folder in ./android
$ cd ..
$ npm run android 
```
 IOS:
 > If you having issues with building app just try this:
  ```sh
$ cd ios
$ open TestTask.xcodeproj and check in Build Phases if there are no fonts files in Copy Bundle Resources dropdown
$ cd ..
$ npm run ios
```



License
----

MIT

P.S Something strange happened to my git,don't be scared :(
