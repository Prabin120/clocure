import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import OtpVarification from "./screens/OtpVarification";
import { Provider } from "react-redux";
import { store } from "./components/store";
import React from "react";

const Stack = createNativeStackNavigator();
function App() {
  const navigationRef = React.useRef(null)
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Chat" component={HomeScreen} />
          <Stack.Screen name="ChatDetail" component={ChatScreen} />
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="OtpVarification" component={OtpVarification} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default()=>{
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}