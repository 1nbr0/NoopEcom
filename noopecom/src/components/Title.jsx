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
    padding: 6,
    backgroundColor: "yellow",
  },
  title: {
    fontSize: 30,
  },
});
