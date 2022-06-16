import { View, StyleSheet } from "react-native";
import { Title } from "../../components/Title";

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Title>SplashScreen</Title>
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
