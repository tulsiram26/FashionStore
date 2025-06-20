import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appIconContainer}>
        <Image
          source={require("../assets/appicon.png")}
          style={styles.appIcons}
        />
      </View>
      <Image
          source={require("../assets/dp.png")}
          style={styles.dp}
        />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
  appIconContainer: {
    backgroundColor: "#FFFFFF",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: 'center',
  },
  appIcons: {
    height: 28,
    width: 28,
  },
  dp:{
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});
