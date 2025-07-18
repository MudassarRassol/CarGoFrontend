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
        marginTop : 20,
        borderRadius : 100,
    },
    title:{
        color : colors.white,
        fontSize : 30,
        fontWeight : 'bold',
        fontFamily: 'Helvetica',
        letterSpacing : 3
    },
    textcontainer : {
        marginHorizontal : 20
    },
    button:{
        backgroundColor : colors.black,
        color : colors.white,
        padding : 15,
        borderRadius : 100,
        alignItems : 'center',
        width : '90%',
        marginTop : 10
    }
})