import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Layout } from "./src/components/Layout";
import { TabNavigator } from "./src/navigators/TabNavigator";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <Layout>
      <NavigationContainer theme={navTheme}>
        <TabNavigator />
      </NavigationContainer>
    </Layout>
  );
}
