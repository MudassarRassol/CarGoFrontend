import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Topheaderapp from '../../Components/topheaderapp/Topheaderapp';
import assests from '../../assets';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import Brands from '../../Components/Brands/Brands';
import HomePagesCarShowCase from '../../Components/HomepageCarShowCase/HomePagesCarShowCase';



const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}   contentContainerStyle={{ flexGrow: 1 }}>
      <Topheaderapp  />
      <SearchFilter />
      <Brands  horizontal={false} />
      <HomePagesCarShowCase/>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
