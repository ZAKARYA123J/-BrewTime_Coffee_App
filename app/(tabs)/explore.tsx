import {
  PlayfairDisplay_700Bold,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import { Image } from "expo-image";
import { router } from "expo-router";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExploreScreen() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const coffeeProducts = [
    {
      id: 1,
      name: "Frappochino",
      description: "Icy delight with whipped cream topping",
      price: "75 DH",
      image: require("@/assets/images/my.images/frappochino.jpg"),
    },
    {
      id: 2,
      name: "Milkshake",
      description: "Creamy and rich with a velvety texture",
      price: "80 DH",
      image: require("@/assets/images/my.images/milkeshake.jpg"),
    },
    {
      id: 3,
      name: "Iced Coffee",
      description: "Chilled brew with a refreshing twist",
      price: "70 DH",
      image: require("@/assets/images/my.images/icedcoffee.jpg"),
    },
    {
      id: 4,
      name: "Expresso Coffee",
      description: "Strong and bold for a quick caffeine fix",
      price: "35 DH",
      image: require("@/assets/images/my.images/ExpressoCoffee.jpg"),
    },
      {
      id: 5,
      name: "Chocolate Drink",
      description: "Rich and indulgent chocolate beverage",
      price: "45 DH",
      image: require("@/assets/images/my.images/Boisson.jpeg"),
    },
    {
      id: 6,
      name: "Americano Coffee",
      description: "Smooth and balanced with hot water",
      price: "45 DH",
      image: require("@/assets/images/my.images/pro2.jpeg"),
    },
    {
      id: 7,
      name: "creamy Coffee",
      description: "Smooth and velvety with a creamy texture",
      price: "60 DH",
      image: require("@/assets/images/my.images/pro3.jpeg"),
    },
    {
      id: 8,
      name: "Caramel Coffee",
      description: "Sweet and buttery with caramel flavor",
      price: "55 DH",
      image: require("@/assets/images/my.images/pro4.jpeg"),
    },
  ];

  const handleOrder = (productName: any) => {
    Alert.alert(
      "Commande ajoutée",
      `${productName} a été ajouté à votre panier`,
      [{ text: "OK" }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <Image
          style={styles.reactLogo}
          source={require("@/assets/images/my.images/wehave.jpg")}
          contentFit="cover"
          transition={1000}
        />
        <View style={styles.textOverlay}>
          <Text style={styles.overlayText}>Brewed to perfection.</Text>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.Text}>
          At Cafeline, coffee is more than a drink — it&apos;s an experience.
          Our curated menu features premium blends and timeless recipes designed
          for true coffee lovers. Indulge in the art of taste, the Cafeline way.
        </Text>
      </View>

      <View>
        <Text style={styles.title}>Our Special Coffee</Text>
      </View>

      <View style={styles.cardsContainer}>
        {coffeeProducts.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image
              style={styles.cardImage}
              source={product.image}
              contentFit="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{product.name}</Text>
              <Text style={styles.cardDescription}>{product.description}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>{product.price}</Text>
                <TouchableOpacity
                  style={styles.orderButton}
                  onPress={() => handleOrder(product.name)}
                >
                  <Text style={styles.orderButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 300,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  reactLogo: {
    width: "100%",
    height: "100%",
  },
  textOverlay: {
    position: "absolute",
    top: 220,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  overlayText: {
    color: "#F2E9D5",
    fontSize: 35,
    fontFamily: "PlayfairDisplay_700Bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  descriptionContainer: {
    paddingVertical: 20,
  },
  Text: {
    fontSize: 12,
    fontFamily: "PlayfairDisplay_700Bold",
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#4B3832",
    lineHeight: 22,
  },
  title: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 28,
    fontFamily: "PlayfairDisplay_700Bold",
    textAlign: "left",
    color: "#A24444",
    paddingHorizontal: 20,
  },
  image: {
    width: 288,
    height: 288,
    borderRadius: 80,
    opacity: 1,
  },
  titleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  card: {
    width: "48%",
    backgroundColor: "#F2E9D5",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: "60%",
    height: 200,
    borderRadius: 60,
    marginTop: 10,
    marginLeft: 20,
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#4B3832",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 11,
    color: "#8B7355",
    marginBottom: 8,
    lineHeight: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontFamily: "PlayfairDisplay_700Bold",
    color: "#D4A574",
  },
  orderButton: {
    backgroundColor: "#4B3832",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  orderButtonText: {
    color: "#F2E9D5",
    fontSize: 20,
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
