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
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: require("@/assets/images/my.images/bk1.jpg"),
      // title: "Welcome to",
      // subtitle: "CaféLine"
    },
    {
      image: require("@/assets/images/my.images/bk2.jpg"),
      title: "Discover our",
      subtitle: "Frappuccino"
    },
    {
      image: require("@/assets/images/my.images/bk4.jpg"),
      title: "Taste our",
      subtitle: "Milkshakes"
    },
    {
      image: require("@/assets/images/my.images/bk5.jpg"),
      title: "Enjoy our",
      subtitle: "Iced Coffee"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  const router = useRouter();
  const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View style={styles.mainContainer}>

      <Image
        key={currentIndex}
        style={styles.backgroundImage}
        source={slides[currentIndex].image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      

      <View style={styles.overlay} />

      <ScrollView 
      
      
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("@/assets/images/my.images/logo.png")}
              contentFit="cover"

            />
            <Text style={styles.welcomeText}>Welcome to </Text>
            <Text style={styles.text2}> CafeLine </Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.text}>{slides[currentIndex].title}</Text>
            <Text style={styles.text2}>{slides[currentIndex].subtitle}</Text>
          </View>
          
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  currentIndex === index && styles.paginationDotActive
                ]}
              />
            ))}
          </View>

          <View style={styles.container3}>
            <Pressable onPress={() => router.push("/login")} style={styles.pressable}>
              <Text style={styles.text3}>Get Started</Text>
            </Pressable>
            <Pressable onPress={() => router.push("/explore")} style={styles.pressable}>
              <Text style={styles.text3}>Menu</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingBottom: 40,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  pressable: {
    backgroundColor: 'rgba(243, 235, 215, 0.9)', 
    width: 277,
    justifyContent: 'center', 
    alignItems: 'center',
    height: 73,
    margin: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  container2: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 36,
    fontFamily: 'PlayfairDisplaySC_400Regular',
    textAlign: 'center',
    color: '#F2E9D5', 
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  text2: {
    fontSize: 64,
    fontFamily: 'PlayfairDisplay_700Bold_Italic',
    color: '#F2E9D5',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 15,
  },
  text3: {
    fontSize: 32,
    fontFamily: 'PlayfairDisplay_600SemiBold',
    color: '#4B3832',
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F2E9D5',
    opacity: 0.4,
  },
  paginationDotActive: {
    backgroundColor: '#F2E9D5',
    opacity: 1,
    width: 30,
  },
    logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 5,
  },
    logoContainer: {
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 10,
  },
   welcomeText: {
    fontSize: 32,
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#F2E9D5",
    marginBottom: 5,
  },
});