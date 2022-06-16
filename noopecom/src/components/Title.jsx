import { StyleSheet, Text, View } from "react-native";

export const Title = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.overlay}/>
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
  overlay: {
    position : 'absolute',
    top : 10,
    width: '100%',
    height : '100%',
    opacity : 0.5,

    backgroundColor : 'white',
  },
});
