import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import assests from '../../assets';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../theme/color';


const widthscreen  = Dimensions.get('screen').width
const boxWidth = widthscreen * 0.7; // 90% of screen
const Review = () => {
  return (
    <View
      style={{
        marginHorizontal : 5,
        backgroundColor: '#D3D3D3',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        gap  : 6,
        width : boxWidth,
        marginVertical : 7
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' , alignItems : 'center' }}>
        <View style={{flexDirection : 'row' , alignItems :'center' , gap : 10 }} >
          <Image
            source={assests.profile}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <Text>Mudassar Rasool</Text>
        </View>
        <View>
          <View style={styles.rowCenter}>
            <Icon name="star" size={10} color={'orange'} />
            <Text>5.0</Text>
          </View>
        </View>
      </View>
      <Text>
        The rental car was clean, reliable, and the service was quick and
        efficient.
      </Text>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  detailText: {
    flexDirection: 'row',
    gap: 2,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 2,
  },
});
