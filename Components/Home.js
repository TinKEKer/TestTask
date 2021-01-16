import React from 'react'
import {Text,StyleSheet} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context/src/SafeAreaView";
import {DEVICE_HEIGHT} from "../Utils/deviceDimensions";

export const Home = ()=>{
    return(
        <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>Welcome to my App</Text>
            <Text style={styles.descriptionText}>This app has 3 main screens:Home,News and Profile.Profile screen is protected with authentication(default login:Admin,password:12345).News screen fetching mok data from JSONplaceholder and chunk's it to array of 20 items.All state saved into AsyncStorage with help of Redux-Persist</Text>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginBottom: DEVICE_HEIGHT*0.16,
        justifyContent:'center'
    },
    titleText:{
        fontSize:20,
        textAlign:'center'
    },
    descriptionText:{
        fontSize:19,
        marginHorizontal:10,
        marginTop:10
    }
})
