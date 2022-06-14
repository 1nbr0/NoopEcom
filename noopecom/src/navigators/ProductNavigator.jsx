import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductScreen } from "../../assets/screens/ProductScreen";
import { ROUTES } from "./routes";

const Stack = createNativeStackNavigator();

export const ProductNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.PRODUCT}
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
