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
----
### App Screenshots 
<img src="https://i.ibb.co/P4fspQh/Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-15-04.png" alt="Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-15-04" border="0">
<img src="https://i.ibb.co/VtSvD3F/Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-14-50.png" alt="Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-14-50" border="0">
<img src="https://i.ibb.co/WnYgDM9/Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-15-23.png" alt="Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-15-23" border="0">
<img src="https://i.ibb.co/2jVnTdy/Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-15-08.png" alt="Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-15-08" border="0">
<img src="https://i.ibb.co/NFPZG6d/Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-15-26.png" alt="Simulator-Screen-Shot-i-Phone-11-2021-01-16-at-17-15-26" border="0">
<img src="https://i.ibb.co/PCZsx1d/Screenshot-1610813169.png" alt="Screenshot-1610813169" border="0">
<img src="https://i.ibb.co/k5W1H3G/Screenshot-1610813181.png" alt="Screenshot-1610813181" border="0">
<img src="https://i.ibb.co/PG7nZVV/Screenshot-1610813156.png" alt="Screenshot-1610813156" border="0">
<img src="https://i.ibb.co/FByqqpw/Screenshot-1610813161.png" alt="Screenshot-1610813161" border="0">
<img src="https://i.ibb.co/XyBsRc1/Screenshot-1610813164.png" alt="Screenshot-1610813164" border="0">

License
----

MIT

P.S Something strange happened to my git,don't be scared :(
