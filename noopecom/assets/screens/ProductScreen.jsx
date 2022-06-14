import { StyleSheet, View } from "react-native";
import Product from "../../src/components/Product";

export const ProductScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Product />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
