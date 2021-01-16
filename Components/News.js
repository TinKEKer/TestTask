import React from 'react'
import {FlatList,StyleSheet} from 'react-native'
import {api} from "../Utils/axios/api";
import { Card, Title, ActivityIndicator } from 'react-native-paper';
import {useFocusEffect} from "@react-navigation/core";
import {DEVICE_WIDTH} from "../Utils/deviceDimensions";
import {SafeAreaView} from "react-native-safe-area-context/src/SafeAreaView";

 const News = ()=>{
    const [news,setNews] = React.useState(null);
    const [loading,setLoading] = React.useState(true);

    useFocusEffect(
        React.useCallback(()=>{
        api.getPhotos(setLoading,setNews)
        },[])
    )


     const renderItem = React.useCallback(({item})=>{
         return(
             <Card style={styles.cardContainer}>
                 <Card.Cover source={{ uri: item.url }}/>
                 <Card.Content>
                     <Title>{item.title}</Title>
                 </Card.Content>
             </Card>
         )
     },[])

    const keyExtractor = React.useCallback((item)=>item.id.toString(),[])

    return(
      <SafeAreaView style={styles.container}>
          {!loading?<FlatList showsVerticalScrollIndicator={false} data={news} renderItem={renderItem} keyExtractor={keyExtractor}/>:<ActivityIndicator size={'large'} style={{flex:1}}/>}
      </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    cardContainer:{
        marginVertical:10,
        width:DEVICE_WIDTH*0.9,
        alignSelf:'center',
        elevation:10
    }
})

export const NewsComponent = React.memo(News)
