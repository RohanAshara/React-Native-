import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabRoot() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopColor: "#222",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
          tabBarLabel: "About",
        }}
      />
    </Tabs>
  );
}
