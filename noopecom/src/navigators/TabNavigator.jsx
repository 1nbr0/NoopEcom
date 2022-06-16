import { ProfileScreen } from "../assets/screens/ProfileScreen";
import { ProductNavigator } from "./ProductNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";
import { Entypo, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarActiveTintColor: "#b41921",
        tabBarInactiveTintColor: "#fff",
        tabBarLabelStyle: {
          fontSize: 10,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
        name={ROUTES.HOME}
        component={ProductNavigator}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
        name={ROUTES.PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
