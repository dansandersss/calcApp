import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface ButtonProps {
  text: string;
  onPress: (text: string) => void;
  bgStyle?: string;
  textStyle?: string;
  isPortrait?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  bgStyle,
  textStyle,
  isPortrait,
}) => {
  return (
    <StyledTouchableOpacity
      className={`bg-white dark:bg-[#2E2F38] w-[72px] h-[60px] px-6 py-3 shadow-sm ${bgStyle} rounded-md justify-center items-center ${
        isPortrait ? "w-[72px] h-[60px]" : "w-[100px] h-[45px]"
      }`}
      onPress={() => onPress(text)}
    >
      <StyledText
        className={` text-black dark:text-white ${textStyle} ${
          isPortrait ? "text-[32px]" : "text-[16px]"
        } text-center`}
      >
        {text}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
