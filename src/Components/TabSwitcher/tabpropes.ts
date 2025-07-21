import { ViewStyle } from "react-native"

export interface TabProps {
    tabdata? : Itab[],
    title : string,
    onpress? : (e:Itab) => void,
    flatlistcontainer? : ViewStyle,
    tab? : ViewStyle

}


export interface Itab{
    id : number,
    label : string,
    value : string
}