import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UpperBar from '../../Components/UpperBar/UpperBar'
import InputCom from '../../Components/input/Input'
import Icon from 'react-native-vector-icons/AntDesign';
import ReviewSec from '../../Components/Review/ReviewSec';
const Review = () => {

    const [search,setsearch] = useState('');
    
  return (
    <View>
      <UpperBar hasback={true} title='Reviews' />
      <View style={{marginHorizontal : 20 , marginVertical : 20 }} >
        <View style={{flexDirection : 'row' , gap : 4 , alignItems : 'center' , marginBottom:10 }} >
            <Icon name="star" size={20} color={'orange'} />
            <Text style={{fontSize : 16 , fontWeight : 'bold' }} >
                5.0 Reviews (125)
            </Text>
        </View>
        <InputCom
        data={{
            placeholder : 'Find reviews..........',
            keyboardType : 'default',
            secureTextEntry : false,
            value : search,
            onChangeText : setsearch
        }}
        />
        <ReviewSec/>
      </View>
    </View>
  )
}

export default Review

const styles = StyleSheet.create({})