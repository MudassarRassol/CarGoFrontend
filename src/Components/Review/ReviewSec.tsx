import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import assests from '../../assets';
import Icon from 'react-native-vector-icons/AntDesign';
type Props = {
  image: string;
  day: string;
  star: number;
  des: string;
};

const ReviewSec = () => {
  return (
    <View style={{gap : 6}} >
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <Image
            source={assests.profile}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
          <Text>Mudassar</Text>
        </View>
        <View>
          <Icon name="start" size={20} color={'orange'} />
          <Icon name="start" size={20} color={'orange'} />
          <Icon name="start" size={20} color={'orange'} />
          <Icon name="start" size={20} color={'orange'} />
          <Icon name="start" size={20} color={'orange'} />
        </View>
        <Text>
          The rental car was clean, reliable, and the service was quick and
          efficient. Overall, the experience was hassle-free and enjoyable.
        </Text>

    </View>
  );
};

export default ReviewSec;

const styles = StyleSheet.create({});
