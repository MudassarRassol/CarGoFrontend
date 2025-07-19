import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ArrowRight } from 'lucide-react-native';
import Car from '../CarCard/Car';
import UpperCardSection from '../UpperCardSection.tsx/UpperCardSection';

const HomeBestCar = () => {
  return (
    <View >
      <UpperCardSection title={'Best Cars'} />
        <Text style={styles.text}>Available</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carcontainer}  >
        <Car />
        <Car />
        <Car />
        </ScrollView>
    </View>
  );
};

export default HomeBestCar;

const styles = StyleSheet.create({

  uppertitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal : 20
  },
  innertext: {
    fontSize: 12,
    // fontWeight: 'bold',
    letterSpacing: 1,
    
  },
  textcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    
  },
  text: {
    fontSize: 10,
    letterSpacing: 1,
    color: 'graylight',
    marginBottom : 0,
      marginHorizontal : 20
  },
  carcontainer:{
    flexDirection : 'row' , gap : 10 , padding : 20 , alignItems : 'center' , justifyContent : 'space-between'
  }
});
