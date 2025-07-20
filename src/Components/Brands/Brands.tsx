// /components/Brands/Brands.tsx
import React from 'react';
import { View, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import assests from '../../assets';
import { Text } from 'react-native-gesture-handler';

type BrandItem = {
  key: string;
  name: string;
  image: any; // or ImageSourcePropType for stronger typing
};

type Props = {
  // brandList: BrandItem[];
  horizontal : Boolean
};

const carBrands : BrandItem[] = [
  { key: 'Tesla', name:'Tesla', image: assests.tesla },
  { key: 'Lambo', name:'Lamborghini', image: assests.lambo },
  { key: 'Ferrari', name: 'Ferrari', image: assests.ferrari },
  { key: 'BMW', name: 'BMW', image: assests.bmw },
  { key: 'Royalrolance', name: 'Rolls Royce', image: assests.royalrolance },
  { key: 'Audi', name: 'Audi', image: assests.audi },
  { key: 'Bugati', name: 'Bugatti', image: assests.bugati },
];

const Brands = ({ horizontal }: Props) => {
  const [selectedKey, setSelectedKey] = React.useState<Number>(0);


    const brands = horizontal ? [{ key : 'All' , name : 'All' , image : assests.logo },...carBrands] : carBrands;
  
  return (
    <View>
      {
        horizontal ? null :        <View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 1 }}>
          Brands
        </Text>
      </View>
      }
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
    >
      <View style={styles.container}>
        {brands.map((item, index) => (
          
          <Pressable key={item.key} onPress={() => setSelectedKey(index)}  style={ horizontal  ? [styles.brandrow , selectedKey === index ? styles.brandrowselected : null ] : styles.brandcolum} >
            <View style={ horizontal ? styles.brandRowCircle : styles.brandColumCircle}>
              <Image source={item.image} style={horizontal ? styles.brandrowImage : styles.brandImage} resizeMode='contain' />
            </View>
            <Text style = {horizontal && selectedKey === index ? styles.brandnameselected : styles.brandname} >{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  scroll: {
    marginTop: 5,
    padding: 10,
    paddingRight: 10,
  },
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingEnd: 18,
  },
  brandColumCircle: {
    backgroundColor: 'black',
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  brandImage: {
    height: 28,
    width: 28,
  },
  brandcolum : {
  flexDirection : 'column' , gap : 4
  },
  brandrow:{
    flexDirection : 'row' , gap : 2 , alignItems : 'center' , padding : 3
  },
  brandrowselected:{
    backgroundColor : 'black' , borderRadius : 100  , paddingEnd : 15
  },
  brandnameselected:{
    color : 'white'
  },  
  brandname:{
    fontSize : 13 ,textAlign : 'center' , letterSpacing : 1
  },
  brandRowCircle:{
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  brandrowImage: {
    height: 20,
    width: 20,
  },
  brandrowname : {
    fontSize : 12 ,textAlign : 'center' , letterSpacing : 1 , color : 'black'
  }
});
