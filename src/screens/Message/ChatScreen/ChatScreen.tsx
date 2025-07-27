import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpperBar from '../../../Components/UpperBar/UpperBar'
import assests from '../../../assets'

const ChatScreen = () => {
  return (
    <View>
      <UpperBar hasback={true} 
       actioncom={
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image
              source={assests.profile}
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'red',
                borderRadius: 100,
              }}
            /><View></View>
           <View style={{flexDirection : 'column' }} >
             <Text style={{ fontSize: 13, letterSpacing: 1 , marginTop :2 }}>Mudassar Rasool</Text>
            <Text style={{ fontSize: 13, letterSpacing: 1 , marginTop :2 }}>online</Text>
            </View>
          </View>
        }
      />
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})