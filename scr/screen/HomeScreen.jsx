import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import React, { useState } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json";

const categories = ["Trending Now", "All", "New", "Mens", "Womens"];

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const [selected, setSelected] = useState("Mens");

  const handleLiked = (item) => {
    const newProducts = products.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: !prod.isLiked, // ✅ Keep other props and toggle isLiked
        };
      }
      return prod;
    });
    setProducts(newProducts);
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <Header />

      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.matchText}>Match Your Style</Text>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name={"search"} size={26} color={"#C0C0C0"} />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="Search"
                placeholderTextColor="#C0C0C0"
              />
            </View>

            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <Category
                  selectedCategory={selected}
                  setSelectedCategory={setSelected}
                  item={item}
                />
              )}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={products}
        renderItem={({ item }) => (
          <ProductCard item={item} handleLiked={handleLiked} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  matchText: {
    fontSize: 28,
    color: "#000000",
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
  },
});
