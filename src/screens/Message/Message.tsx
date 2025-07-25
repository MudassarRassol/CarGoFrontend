import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpperBar from '../../Components/UpperBar/UpperBar'
import assests from '../../assets'

const Message = () => {
  return (
    <View  >
      <UpperBar hasback={true}  actioncom={<Image source={assests.profile} style={{width : 45 , height : 45 , backgroundColor : 'red', borderRadius : 100}} />} />
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})