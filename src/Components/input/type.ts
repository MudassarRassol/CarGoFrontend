import React from "react";

export type InputField = {
  placeholder: string;
  keyboardType : 'default' | 'numeric' | 'email-address' | 'phone-pad';
  onChangeText : (text : string) => void;
  value : string,
  secureTextEntry?: boolean; 
  limit? : number,
  Icon?  : React.ReactNode
};
