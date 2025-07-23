import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import assests from '../../assets';
import Icon from 'react-native-vector-icons/AntDesign';
type Props = {
  image: string;
  day: string;
  star: number;
  des: string;
  name: string;
};

const ReviewSec = ({ image, day, star, des, name }: Props) => {
  return (
    <View
      style={{
        gap: 10,
        borderWidth: 1,
        borderColor: '#D7D7D7',
        padding: 15,
        borderRadius: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <Image
            source={assests.profile}
            style={{ width: 40, height: 40, borderRadius: 100 }}
          />
          <Text>{name}</Text>
        </View>
        <Text>{day}</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 5 }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon
            key={index}
            name="star"
            size={13}
            color={index < star ? 'orange' : 'gray'}
          />
        ))}
      </View>

      <Text>{des}</Text>
    </View>
  );
};

export default ReviewSec;

const styles = StyleSheet.create({});
