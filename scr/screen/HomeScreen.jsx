import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import React, { useState } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

const categories = ["Trending Now", "All", "New", "Mens", "Womens"];

const HomeScreen = () => {
  const [selected, setSelected] = useState("Mens");
  const [isLiked, setIsLiked] = useState(false);

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <Header />

      {/* Product list */}
      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.matchText}>Match Your Style</Text>
            {/* input container */}
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
            {/* category section */}
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
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item, index})=>(
          <ProductCard item={item} isLiked={isLiked} setIsLiked={setIsLiked}/>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      />
      {/* <View
        style={{
          flexDirection: "row",
        }}
      >
        <ProductCard />
        <ProductCard />
      </View> */}
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
    color: "#000000", // ✅ corrected spelling
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
