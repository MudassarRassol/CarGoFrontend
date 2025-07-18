import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import assests from '../../assets'
import { colors } from '../../theme/color'

const Header = () => {
  return (
    <View style={{flexDirection : 'row' , alignItems : 'center'}} >
      <View  style={styles.container} >
        <Image 
        source={assests.logo}
        resizeMode='contain'
        style={{height : 50 , width : 50}}
        />
      </View>
      <Text style={styles.title} >
        CAR GO
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container : {
                width : 60,
                height : 60,
                backgroundColor : colors.black,
                padding : 12,
                margin : 20,
                marginTop : 20,
                borderRadius : 100,
                alignItems : 'center',
                justifyContent : 'center'
    },
    title:{
        fontSize : 20,
        fontWeight :'bold',
        letterSpacing : 3
    }
})