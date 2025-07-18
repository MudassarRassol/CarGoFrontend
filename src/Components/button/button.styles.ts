import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";

export const createstyles = ()=> StyleSheet.create({
    container : {
        backgroundColor : 'black',
        padding : 15,
        borderRadius : 100,
        alignItems : 'center',
        margin : 20,
        position : 'absolute',
        bottom : 10,
        width : '90%'
    },
    text:{
        color : colors.white,
        letterSpacing : 2,
        fontWeight : 'bold',
        // fontSize : 0
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconWrapper: {
      marginRight: 8,
    },
})