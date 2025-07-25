import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpperBar from '../../Components/UpperBar/UpperBar'
import assests from '../../assets'

const Message = () => {
  return (
    <View  >
      <UpperBar hasback={true}  actioncom={<View style={{flexDirection : 'row',gap : 10 , alignItems : 'center'}} >
        <Image source={assests.profile} style={{width : 40 , height : 0 , backgroundColor : 'red', borderRadius : 100}} />
              <Text style={{fontSize : 20 , letterSpacing : 1}} >Chats</Text>  
              </View>} />
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})



