import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";

export const createstyles = ()=> StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white,
        height : '100%'
    },
    carlogo : {
        height : 30 , 
        width : 30
    },
    logocontainer : {
        backgroundColor : colors.white,
        padding : 12,
        alignSelf : 'flex-start',
        margin : 20,
        borderRadius : 100,
    }
})