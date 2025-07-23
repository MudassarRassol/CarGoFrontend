import React from "react";
import { ViewStyle } from "react-native";

export type InputField = {
  placeholder: string;
  keyboardType : 'default' | 'numeric' | 'email-address' | 'phone-pad';
  onChangeText : (text : string) => void;
  value : string,
  secureTextEntry?: boolean; 
  limit? : number,
  Icon?  : React.ReactNode,
  default? : boolean,
  onpress? : (e:any) => void,
  style? : ViewStyle
};
