import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeBestCar from '../HomeBestCar/HomeBestCar';
import HomeNeaberyCar from '../HomeNeaberyCar/HomeNeaberyCar';

const HomePagesCarShowCase = () => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <HomeBestCar/>
        <HomeNeaberyCar/>
      </View>
    </View>
  );
};

export default HomePagesCarShowCase;

const styles = StyleSheet.create({});
