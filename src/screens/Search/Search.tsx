import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import UpperBar from '../../Components/UpperBar/UpperBar';
import Brands from '../../Components/Brands/Brands';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import UpperCardSection from '../../Components/UpperCardSection.tsx/UpperCardSection';
import Car from '../../Components/CarCard/Car';
import PopularCars from '../../Components/PopularCars/PopularCars';
import { usefilter } from '../../hook/Filter';
import Filter from '../View/Filter';
const Search = () => {
  const car = [1, 2, 3, 4];

  const { showfilter, setshowfilter } = usefilter();
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <UpperBar hasback={true} title="Search" />
      <SearchFilter onFilterPress={() => setshowfilter(!showfilter)} />
      <Brands horizontal={true} />
      <UpperCardSection title={'Recommend For You'} />

      <FlatList
        data={car}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{
          gap: 4,
          marginBottom: 7,
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}
        contentContainerStyle={{ padding: 5, marginBottom: 10 }}
        renderItem={() => <Car />}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />

      <UpperCardSection title={'Our Popular Cars'} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <PopularCars />
        <PopularCars />
        <PopularCars />
        <PopularCars />
      </ScrollView>

      <Filter visible={showfilter} setVisible={setshowfilter} />
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({});
