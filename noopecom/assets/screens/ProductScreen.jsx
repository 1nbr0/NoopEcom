import { Text, StyleSheet, View } from "react-native";

export const ProductScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>ProductScreen</Text>
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
