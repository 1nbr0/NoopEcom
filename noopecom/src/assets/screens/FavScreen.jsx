import { View, StyleSheet } from "react-native";
import { Title } from "../../components/Title";

export const FavScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Vos Favoris</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
