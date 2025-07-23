import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UpperBar from '../../Components/UpperBar/UpperBar'
import InputCom from '../../Components/input/Input'
import Icon from 'react-native-vector-icons/AntDesign';
import ReviewSec from '../../Components/Review/ReviewSec';
import { Scroll } from 'lucide-react-native';
import { ScrollView } from 'react-native-gesture-handler';


const messages = [
  {
    image: "https://example.com/image1.jpg",
    day: "Monday",
    star: 4,
    des: "Start your week with positivity and focus.",
    name : 'Mudassar Rasool'
  },
  {
    image: "https://example.com/image2.jpg",
    day: "Tuesday",
    star: 5,
    des: "Keep pushing forward—you're doing great!",
    name : 'Sarmad Rasool'
  },
  {
    image: "https://example.com/image3.jpg",
    day: "Wednesday",
    star: 3,
    des: "Midweek check-in: Take a deep breath.",
     name : 'Shafqat Rasool'
  },
  {
    image: "https://example.com/image4.jpg",
    day: "Thursday",
    star: 4,
    des: "Almost there—stay strong and steady.",
     name : 'Sarmad Rasool'
  },
  {
    image: "https://example.com/image5.jpg",
    day: "Friday",
    star: 5,
    des: "You made it! Time to celebrate your wins.",
    name : 'Mudassar Rasool'
  },
  {
    image: "https://example.com/image6.jpg",
    day: "Saturday",
    star: 4,
    des: "Relax and recharge—you’ve earned it.",
    name : 'Mudassar Rasool'
  },
  {
    image: "https://example.com/image7.jpg",
    day: "Sunday",
    star: 5,
    des: "Prepare and plan for a strong week ahead.",
    name : 'Mudassar Rasool'
  },
  {
    image: "https://example.com/image8.jpg",
    day: "Holiday",
    star: 5,
    des: "Enjoy your break and create joyful memories.",
    name : 'Mudassar Rasool'
  },
  {
    image: "https://example.com/image9.jpg",
    day: "Special Day",
    star: 5,
    des: "Today is special—make the most of it.",
    name : 'Mudassar Rasool'
  },
  {
    image: "https://example.com/image10.jpg",
    day: "Anytime",
    star: 4,
    des: "Stay motivated and keep your goals in sight.",
    name : 'Mudassar Rasool'
  },
];


const Review = () => {

    const [search,setsearch] = useState('');
    
  return (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} >
      <UpperBar hasback={true} title='Reviews' />
      <View style={{marginHorizontal : 20 , marginVertical : 20 }} >
        <View style={{flexDirection : 'row' , gap : 4 , alignItems : 'center' , marginBottom:10 }} >
            <Icon name="star" size={13} color={'orange'} />
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
       <FlatList 
       data={messages}
       renderItem={({item}) => <ReviewSec day={item.day} image={item.image} star={item.star} des={item.des} name={item.name}  />}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{gap : 10}}
       scrollEnabled ={false}
       />
      </View>
    </ScrollView>
  )
}

export default Review

const styles = StyleSheet.create({})