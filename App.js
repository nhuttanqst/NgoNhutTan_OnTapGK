import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import LoginScreen from "./screens/LoginScreen";
import ElectronicsScreen from "./screens/ElectronicsScreen";
import CartScreen from "./screens/CartScreen";
import { CartProvider } from "./contexts/CartContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <CartProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Electronics"
                component={ElectronicsScreen}
                options={{
                  headerTitle: "",
                  headerBackTitleVisible: false,
                  headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  header: () => null,
                }}
              />
              <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                  headerTitle: "",
                  headerBackTitleVisible: false,
                  headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                  },
                  header: () => null,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </CartProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
