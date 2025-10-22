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
import { Pressable, ScrollView, StyleSheet, Text, View, } from 'react-native';
export default function HomeScreen() {
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
   <ScrollView 
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={true}
    >
    <View style={styles.container}>
        <Image
<<<<<<< HEAD
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
    </ScrollView>
=======
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/explore" asChild >
          <Link.Trigger>
            <ThemedText type="subtitle">Menu</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
>>>>>>> 7b2061422d769bdab007c79f5efa91d9ec94a89f
  );
}

const styles = StyleSheet.create({
    scrollView: {
    flex: 1,
        backgroundColor:'#rgba(229, 193, 149, 0.26)',

  },
   scrollContent: {
    flexGrow: 1,
    paddingBottom: 40, // Add bottom padding for better scroll experience
  },
  container: {
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
