import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { VotesScreen } from "../screens/VotesScreen";
import { WinnerScreen } from "../screens/WinnerScreen";
import { DeleteGameScreen } from "../screens/DeleteGameScreen";
import { DetailsGameScreen } from "../screens/DetailsGameScreen";

const { Screen, Navigator } = createBottomTabNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarStyle: {
          height: 40,
          paddingHorizontal: 2,
          paddingTop: 0,
          backgroundColor: "rgba(34,36,40,1)",
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
    >
      <Screen
        name="Votes"
        component={VotesScreen}
        options={{
          tabBarLabel: "Voltar",
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="#6DFF60" size={size} />
          ),
        }}
      />
      <Screen
        name="Winner"
        component={WinnerScreen}
        options={{
          tabBarLabel: "Result",
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="trophy" color="#6DFF60" size={size} />
          ),
        }}
      />
      <Screen
        name="Delete"
        component={DeleteGameScreen}
        options={{
          tabBarLabel: "Delete",
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="delete" color="#6DFF60" size={size} />
          ),
        }}
      />
      <Screen
        name="Details"
        component={DetailsGameScreen}
        options={{
            tabBarLabel: "Detail",
            tabBarActiveTintColor: "white",
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="details" color="#6DFF60" size={size} />
              ),
          }}
      />
    </Navigator>
  );
}
