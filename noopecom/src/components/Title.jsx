import { StyleSheet, Text, View } from "react-native";

export const Title = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    margin: 25,
    padding: 10,
  },
  title: {
    fontSize: 30,
  },
});
