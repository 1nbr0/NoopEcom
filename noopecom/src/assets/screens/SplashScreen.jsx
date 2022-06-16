import { View, StyleSheet, Image } from "react-native";
import { Title } from "../../components/Title";
import { AuthProvider } from "../../contexts/AuthProvider";

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icon.png')} style={styles.image}/>
      <Title>Wait for Loading</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    width : '50%',
    height : '30%'
  },
});
