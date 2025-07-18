import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Topheaderapp from '../../Components/topheaderapp/Topheaderapp';
import { Search, Settings2 } from 'lucide-react-native';
import { colors } from '../../theme/color';
import { Image } from 'react-native';
import assests from '../../assets';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import Brands from '../../Components/Brands/Brands';
import HomePagesCarShowCase from '../../Components/HomepageCarShowCase/HomePagesCarShowCase';

const carBrands: (keyof typeof assests)[] = [
  'tesla',
  'lambo',
  'ferrari',
  'bmw',
  'royalrolance',
  'audi',
  'bugati',
];

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Topheaderapp />
      <SearchFilter />
      <Brands brandList={carBrands} />
      <HomePagesCarShowCase/>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
