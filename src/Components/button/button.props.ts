import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface IButtonProps {
    text: string;
    buttonstyle? : ViewStyle,
    textstyle? : TextStyle,
    onPress? : (e:any) => void;
    icon?: ReactNode;
}