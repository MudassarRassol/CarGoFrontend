import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import assests from '../../assets';
import Icon from 'react-native-vector-icons/AntDesign';
const PopulerCars = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 10,
        backgroundColor: '#D3D3D3',
        padding: 10,
        borderRadius: 8,
        minHeight: 50,
      }}
    >
      <Image
        source={assests.car3}
        style={{ height: 90, width: 160 }}
        resizeMode="center"
      />
      <View style ={{flexDirection :'column' , justifyContent : 'center' , gap : 5}}  >
        <Text style={{letterSpacing : 1}} >Ferrari LaFerrari</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
          <Text>5.0</Text>
          <Icon name="star" size={10} color={'orange'} />
        </View>
          <View style={styles.rowCenter}>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>$</Text><Text>
                200/Day
              </Text>
            </Text>
          </View>
      </View>
    </View>
  );
};

export default PopulerCars;

const styles = StyleSheet.create({
rowCenter : {
  flexDirection : 'row' , 
  alignItems : 'center',
  gap : 2
},
detailText : {
  flexDirection : 'row',
  gap : 2
},
bold : {
  fontWeight : 'bold',
  fontSize : 13,
  marginRight : 2
}
});
