import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../assets/screens/SplashScreen";
import { ROUTES } from "./routes";
const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.SPLASH}
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
