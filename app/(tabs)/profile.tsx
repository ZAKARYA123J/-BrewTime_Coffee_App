import {
    PlayfairDisplay_400Regular,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black
} from '@expo-google-fonts/playfair-display';
import {
    PlayfairDisplaySC_400Regular,
    useFonts
} from "@expo-google-fonts/playfair-display-sc";

import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
export default function Profile() {
  let [fontsLoaded, fontError] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplaySC_400Regular
  });

  if (!fontsLoaded) {
    return null; // or a loading component
  }

  const router = useRouter();
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  return (
    <React.Fragment>
    <View style={styles.container}>
        <Image
        style={styles.image}
        
        source={require("@/assets/images/Image.webp")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <View style={styles.container2}>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.text2}>CaféLine </Text>
      </View>
   <View style={styles.container3}>
     <Pressable style={styles.pressable}>
          <Text style={styles.text3}>Get Started</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
           <Text style={styles.text3}>Menu</Text>
        </Pressable>
   </View>
    </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#rgba(229, 193, 149, 0.26)',
    flex: 1,
    alignItems: 'center',
    paddingTop:100
  },
  pressable:{
     backgroundColor:'#F3EBD7',
     width:277,
       justifyContent: 'center' , 
        alignItems: 'center',
  
     height:73,
     opacity:1,
     margin:20,
     borderRadius:20
  },
  container2: {
    marginTop:20,
   
    alignItems: 'center',
      justifyContent: 'center' , // This centers vertically
  },
  container3:{
 alignItems: 'center',
   opacity:1,
   marginTop:50,
  },
  image: {
    width: 288,
    height: 288,
    borderRadius:80,
    opacity:1
  },
  text:{
    fontSize:36,
     fontFamily: 'PlayfairDisplaySC_400Regular',
    alignContent:'center',
    color:'#A24444'
  },
  text2:{
    fontSize:64,
         fontFamily: 'PlayfairDisplay_700Bold_Italic',
  },
  text3:{
    fontSize:32,
             fontFamily: 'PlayfairDisplay_600SemiBold',
             opacity:1
  }
});
