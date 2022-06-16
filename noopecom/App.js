import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Layout } from "./src/components/Layout";
import { AuthProvider, useAuth } from "./src/contexts/AuthProvider";
import { TabNavigator } from "./src/navigators/TabNavigator";
import { AuthNavigator } from "./src/navigators/AuthNavigator";

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
          <Root />
        </NavigationContainer>
      </Layout>
    </AuthProvider>
  );
}

const Root = () => {
  const { currentUser } = useAuth();

  return currentUser ? <TabNavigator /> : <AuthNavigator />;
};
