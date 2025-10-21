import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
export default function HomeScreen() {
  const router = useRouter();
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        
        source={require("@/assets/images/Image.webp")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      {/* <Text style={styles.title}>Welcome to My App</Text> */}

      {/* <View style={styles.section}>
        <Text style={styles.subtitle}>Quick Actions</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/profile')}
          >
            <Text style={styles.buttonText}>Go to Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => router.push('/settings')}
          >
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* <View style={styles.section}>
        <Text style={styles.subtitle}>Latest Updates</Text>
        <Text style={styles.paragraph}>
          Here you can show dynamic data such as news, notifications, or recent activity.
        </Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#rgba(229, 193, 149, 0.26)',
    flex: 1,
    alignItems: 'center',
    paddingTop:100
  },
  image: {
    width: 288,
    height: 288,
    borderRadius:80,
    opacity:1
  },
});
