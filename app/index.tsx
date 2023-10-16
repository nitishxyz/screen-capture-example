import { Stack } from "expo-router";

import { StyleSheet } from "react-native";
import ScreenCapture from "../screens/ScreenCapture";

export default function App() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Screen Capture",
        }}
      />
      <ScreenCapture />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
