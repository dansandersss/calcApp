import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import Display from "@/components/Display";
import FormField from "@/components/FormField";
import { styled } from "nativewind";
import ButtonBox from "@/components/ButtonBox";
import * as ScreenOrientation from "expo-screen-orientation";
import {
  handlePress,
  handleClear,
  handleCut,
  handleResult,
  handleFactorial,
  handleExponentiation,
  handleCos,
  handleSquare,
  handleCubing,
  handlePi,
  handleSin,
  handleExponent,
} from "@/utils/calculatorFunctions";

const StyledView = styled(View);

interface CalculatorScreenProps {
  orientation: ScreenOrientation.Orientation;
}

const CalculatorScreen: React.FC<CalculatorScreenProps> = ({ orientation }) => {
  const [currentValue, setCurrentValue] = useState("");
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const [showResult, setShowResult] = useState(false);

  const isPortrait =
    orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
    orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN;

  return (
    <SafeAreaView>
      <StyledView>
        <Display isPortrait={isPortrait} value={showResult ? expression : ""} />
      </StyledView>

      <StyledView className="flex-row justify-end items-end">
        <FormField
          isPortrait={isPortrait}
          value={showResult ? result : currentValue}
        />
      </StyledView>
      <StyledView
        className={`${
          isPortrait
            ? "flex-row items-center justify-center"
            : "flex-col items-center justify-center"
        }`}
      >
        <ButtonBox
          handlePress={(value) =>
            handlePress(
              value,
              showResult,
              setCurrentValue,
              setExpression,
              setResult,
              setShowResult
            )
          }
          handleClear={() =>
            handleClear(
              setExpression,
              setResult,
              setShowResult,
              setCurrentValue
            )
          }
          handleResult={() =>
            handleResult(
              currentValue,
              setResult,
              setExpression,
              setCurrentValue,
              setShowResult
            )
          }
          handleCut={() =>
            handleCut(
              showResult,
              setResult,
              result,
              setCurrentValue,
              currentValue,
              setExpression,
              setShowResult
            )
          }
          handleFactorial={() => handleFactorial(currentValue, setCurrentValue)}
          handleExponentiation={() =>
            handleExponentiation(currentValue, setCurrentValue)
          }
          handleCos={() => handleCos(currentValue, setCurrentValue)}
          handleSquare={() => handleSquare(currentValue, setCurrentValue)}
          handleCubing={() => handleCubing(currentValue, setCurrentValue)}
          isPortrait={isPortrait}
          handleSin={() => handleSin(currentValue, setCurrentValue)}
          handlePi={() => handlePi(setCurrentValue)}
          handleExponent={() => handleExponent(setCurrentValue)}
        />
      </StyledView>
    </SafeAreaView>
  );
};

export default CalculatorScreen;
