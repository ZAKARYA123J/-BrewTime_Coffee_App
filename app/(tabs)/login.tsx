import {
  PlayfairDisplay_700Bold,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }
    Alert.alert("Connexion", `Bienvenue ${email}!`);
  };

  const handleSignUp = () => {
    Alert.alert("Inscription", "Créer un nouveau compte");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backIcon}>←</Text>
      </Pressable>
      <Image
        style={styles.backgroundImage}
        source={require("@/assets/images/my.images/arriere.jpg")}
        contentFit="cover"
      />
      <View style={styles.overlay} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("@/assets/images/my.images/logo.png")}
              contentFit="cover"
            />
            <Text style={styles.appName}>LOGIN</Text>
            <Text style={styles.tagline}>Your coffee, your moment</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.subtitle}>Log in to continue</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="mail-outline"
                size={20}
                color="#F2E9D5"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#D4A574"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#F2E9D5"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#D4A574"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#F2E9D5"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>
                Forgot password ?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => router.push("/explore")}
            >
              <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>
                Don&apos;t have an account ?{" "}
              </Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(75, 56, 50, 0.7)",
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 60,
  },
  appName: {
    fontSize: 48,
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#F2E9D5",
    marginBottom: 5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  tagline: {
    fontSize: 16,
    color: "#F2E9D5",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#F2E9D5",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#D4A574",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(242, 233, 213, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(242, 233, 213, 0.3)",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 55,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#F2E9D5",
  },
  eyeIcon: {
    padding: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: "#D4A574",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#F2E9D5",
    borderRadius: 12,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#4B3832",
    fontSize: 18,
    fontFamily: "PlayfairDisplay_700Bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(242, 233, 213, 0.3)",
  },
  dividerText: {
    marginHorizontal: 15,
    color: "#D4A574",
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(242, 233, 213, 0.9)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: "#D4A574",
    fontSize: 14,
  },
  signupLink: {
    color: "#F2E9D5",
    fontSize: 14,
    fontFamily: "PlayfairDisplay_700Bold",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  backIcon: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
