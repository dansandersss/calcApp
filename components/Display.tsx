import { View, Text } from "react-native";
import React from "react";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

interface DisplayProps {
  value: string;
  isPortrait: boolean;
}

const Display: React.FC<DisplayProps> = ({ value, isPortrait }) => {
  return (
    <StyledView className="">
      <StyledText
        className={`text-5xl text-[#333] dark:text-[#444] font-ws_light opacity-70 ${
          isPortrait ? "" : "hidden"
        }`}
      >
        {value}
      </StyledText>
    </StyledView>
  );
};

export default Display;
