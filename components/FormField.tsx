import React from "react";
import { TextInput } from "react-native";
import { styled } from "nativewind";

const StyledTextInput = styled(TextInput);

interface FormFieldProps {
  value: string;
  isPortrait: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ value, isPortrait }) => {
  return (
    <StyledTextInput
      className={`${
        isPortrait ? "p-4" : ""
      } rounded-md w-full text-5xl text-black dark:text-white flex-row justify-end"`}
      value={value}
      editable={false}
    />
  );
};

export default FormField;
