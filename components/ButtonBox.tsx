import { View } from "react-native";
import React from "react";
import Button from "./Button";
import { styled } from "nativewind";

const StyledView = styled(View);

// type ButtonConfig = {
//   text: string;
//   onPress: () => {};
//   bgStyle: string;
//   textStyle?: string;
// };

type ButtonBoxProps = {
  handlePress: (value: string) => void;
  handleClear: () => void;
  handleResult: () => void;
  handleCut: () => void;
  isPortrait: boolean;
  handleFactorial: () => void;
  handleExponentiation: () => void;
  handleCos: () => void;
  handleExponent: () => void;
  handleSquare: () => void;
  handleCubing: () => void;
  handlePi: () => void;
  handleSin: () => void;
};

const ButtonBox: React.FC<ButtonBoxProps> = ({
  handlePress,
  handleClear,
  handleResult,
  handleCut,
  isPortrait,
  handleFactorial,
  handleExponentiation,
  handleCos,
  handleExponent,
  handleSquare,
  handleCubing,
  handlePi,
  handleSin,
}) => {
  return (
    <StyledView
      className={`justify-center w-[350px] ${
        isPortrait ? "flex-col gap-4" : "flex-row"
      }`}
    >
      <StyledView
        className={`${isPortrait ? "hidden" : "block flex-row gap-4"} mr-4`}
      >
        <StyledView>
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text="("
            onPress={handlePress}
          />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text="n!"
            onPress={handleFactorial}
          />

          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text="x²"
            onPress={handleExponentiation}
          />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text="cos"
            onPress={handleCos}
          />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text="e"
            onPress={handleExponent}
          />
        </StyledView>

        <StyledView>
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text=")"
            onPress={handlePress}
          />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text="√"
            onPress={handleSquare}
          />

          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text="x³"
            onPress={handleCubing}
          />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text="sin"
            onPress={handleSin}
          />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] dark:bg-[#4E505F] mb-4`}
            text="π"
            onPress={handlePi}
          />
        </StyledView>
      </StyledView>

      <StyledView className={`gap-4`}>
        <StyledView className="flex-row justify-between">
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] ${
              isPortrait ? "" : "mr-4"
            } dark:bg-[#4E505F]`}
            text="C"
            onPress={handleClear}
          />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] ${
              isPortrait ? "" : "mr-4"
            } dark:bg-[#4E505F]`}
            text="←"
            onPress={handleCut}
          />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#D2D3DA] ${
              isPortrait ? "" : "mr-4"
            } dark:bg-[#4E505F]`}
            text="%"
            onPress={handlePress}
          />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#4B5EFC]`}
            textStyle={`text-white`}
            text="/"
            onPress={handlePress}
          />
        </StyledView>

        <StyledView className="flex-row  justify-between gap-2">
          <Button isPortrait={isPortrait} text="7" onPress={handlePress} />
          <Button isPortrait={isPortrait} text="8" onPress={handlePress} />
          <Button isPortrait={isPortrait} text="9" onPress={handlePress} />
          <Button
            isPortrait={isPortrait}
            bgStyle={`bg-[#4B5EFC]`}
            textStyle={`text-white`}
            text="*"
            onPress={handlePress}
          />
        </StyledView>

        <StyledView className="flex-row  justify-between gap-2">
          <Button isPortrait={isPortrait} text="4" onPress={handlePress} />
          <Button isPortrait={isPortrait} text="5" onPress={handlePress} />
          <Button isPortrait={isPortrait} text="6" onPress={handlePress} />
          <Button
            isPortrait={isPortrait}
            text="-"
            onPress={handlePress}
            bgStyle={`bg-[#4B5EFC]`}
            textStyle={`text-white`}
          />
        </StyledView>

        <StyledView className="flex-row  justify-between">
          <Button isPortrait={isPortrait} text="1" onPress={handlePress} />
          <Button isPortrait={isPortrait} text="2" onPress={handlePress} />
          <Button isPortrait={isPortrait} text="3" onPress={handlePress} />
          <Button
            isPortrait={isPortrait}
            text="+"
            onPress={handlePress}
            bgStyle={`bg-[#4B5EFC]`}
            textStyle={`text-white`}
          />
        </StyledView>

        <StyledView className={`flex-row  justify-between`}>
          <Button
            isPortrait={isPortrait}
            text="0"
            onPress={handlePress}
            bgStyle={`flex-grow mr-4`}
          />
          <Button
            isPortrait={isPortrait}
            text="."
            onPress={handlePress}
            bgStyle={`mr-4`}
          />
          <Button
            isPortrait={isPortrait}
            text="="
            onPress={handleResult}
            bgStyle={`bg-[#4B5EFC]`}
            textStyle={`text-white`}
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default ButtonBox;
