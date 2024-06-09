import {
  View,
  TouchableOpacity,
  Animated,
  Easing,
  useColorScheme,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styled } from "nativewind";
import { Ionicons } from "@expo/vector-icons";
import { DateTime } from "luxon";

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface ThemeChangerProps {
  onToggle?: () => void;
  onPress?: () => void;
  isPortrait: boolean;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({
  onToggle,
  onPress,
  isPortrait,
}) => {
  const systemTheme = useColorScheme();
  const currentHour = DateTime.now().hour;
  const initialDarkMode =
    systemTheme === "dark" || currentHour >= 18 || currentHour < 6;

  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);
  const [animation] = useState(new Animated.Value(initialDarkMode ? 1 : 0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isDarkMode ? 1 : 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [isDarkMode]);

  useEffect(() => {
    const currentHour = DateTime.now().hour;
    const isNight = currentHour >= 18 || currentHour < 6;
    setIsDarkMode(isNight);
  }, [DateTime.now().hour]);

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handlePress = () => {
    toggleSwitch();
    if (onToggle) onToggle();
    if (onPress) onPress();
  };

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [3, 40],
  });

  return (
    <StyledTouchableOpacity
      onPress={handlePress}
      className={`w-full items-center justify-center ${
        isPortrait ? "" : "hidden"
      } `}
    >
      <StyledView className="flex-row items-center justify-between w-20 bg-white rounded-full p-1">
        <StyledView className="p-1 rounded-full relative z-20">
          <Ionicons
            style={{ color: isDarkMode ? "black" : "#4B5EFC" }}
            name="sunny"
            size={25}
          />
        </StyledView>
        <StyledView className="p-1 rounded-full relative z-20">
          <Ionicons
            style={{ color: isDarkMode ? "#4B5EFC" : "black" }}
            name="moon"
            size={25}
          />
        </StyledView>
        <Animated.View
          style={{
            position: "absolute",
            transform: [{ translateX }],
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            backgroundColor: "#D2D3DA",
            zIndex: 1,
          }}
        />
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export default ThemeChanger;
