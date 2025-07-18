// /components/Brands/Brands.tsx
import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import assests from '../../assets';
import { Text } from 'react-native-gesture-handler';

type Props = {
  brandList: (keyof typeof assests)[];
};

const Brands = ({ brandList }: Props) => {
  return (
    <View>
       <View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 1 }}>
          Brands
        </Text>
      </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
    >
      <View style={styles.container}>
        {brandList.map((item, index) => (
          <View key={index} style={styles.brandCircle}>
            <Image source={assests[item]} style={styles.brandImage} resizeMode="contain" />
          </View>
        ))}
      </View>
    </ScrollView>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  scroll: {
    marginTop: 10,
    padding: 10,
    paddingRight: 10,
  },
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingEnd: 18,
  },
  brandCircle: {
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
});
