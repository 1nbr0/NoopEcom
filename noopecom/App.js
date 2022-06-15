import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Layout } from "./src/components/Layout";
import { AuthProvider } from "./src/contexts/AuthProvider";
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
    <AuthProvider>
      <Layout>
        <NavigationContainer theme={navTheme}>
          <TabNavigator />
        </NavigationContainer>
      </Layout>
    </AuthProvider>
  );
}
