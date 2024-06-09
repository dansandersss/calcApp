import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CalculatorScreen from "@/screens/CalculatorScreen";
import { styled, useColorScheme } from "nativewind";
import ThemeChanger from "@/components/ThemeChanger";
import * as ScreenOrientation from "expo-screen-orientation";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [orientation, setOrientation] =
    useState<ScreenOrientation.Orientation | null>(null);

  useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const checkOrientation = async () => {
    const currentOrientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(currentOrientation);
  };

  const handleOrientationChange = (
    orientationChange: ScreenOrientation.OrientationChangeEvent
  ) => {
    setOrientation(orientationChange.orientationInfo.orientation);
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const isPortrait =
    orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
    orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN;

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDarkMode ? "#000" : "#F1F2F3",
        flex: 1,
        alignItems: "center",
      }}
    >
      <StatusBar style={isDarkMode ? "light" : "auto"} />
      <ThemeChanger
        isPortrait={isPortrait}
        onPress={toggleColorScheme}
        onToggle={handleToggle}
      />
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <CalculatorScreen orientation={orientation} />
      </View>
    </SafeAreaView>
  );
};

export default App;
