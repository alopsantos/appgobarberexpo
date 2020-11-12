import "react-native-gesture-handler";
import React from "react";
import { AppLoading } from "expo";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from "@expo-google-fonts/roboto-slab";

import AppProvider from "./src/hooks/";
import AuthRoutes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <AppProvider>
          <View style={{ flex: 1, backgroundColor: "#312e38" }}>
            <AuthRoutes />
          </View>
        </AppProvider>
      </NavigationContainer>
    );
  }
}
