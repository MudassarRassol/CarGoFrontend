import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import UpperBar from '../../Components/UpperBar/UpperBar';
import Brands from '../../Components/Brands/Brands';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import UpperCardSection from '../../Components/UpperCardSection.tsx/UpperCardSection';
import Car from '../../Components/CarCard/Car';
import { colors } from '../../theme/color';
import assests from '../../assets';
import PopularCars from '../../Components/PopularCars/PopularCars';

const Search = () => {
  const car = [1, 2, 3, 4];

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <UpperBar hasback={true} title="Search" />
      <SearchFilter />
      <Brands horizontal={true} />
      <UpperCardSection title={'Recommend For You'} />

      <View style={{ paddingHorizontal: 5 }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {car.map(item => (
            <Car key={item} bookingbutton={true} />
          ))}
        </View>
      </View>

      <UpperCardSection title={'Our Popular Cars'} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <PopularCars />
        <PopularCars />
        <PopularCars />
        <PopularCars />
      </ScrollView>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({});
