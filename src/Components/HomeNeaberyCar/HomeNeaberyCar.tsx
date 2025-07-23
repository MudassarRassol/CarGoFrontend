import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { ArrowRight } from 'lucide-react-native';
import assests from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';
import Car from '../CarCard/Car';

const HomeNeaberyCar = () => {
    const carData = [1, 2, 3, 4]; // replace with actual car data if available

  return (
    <View>
      <View style={styles.uppertitle}>
        <Text style={[styles.innertext, { fontWeight: 'bold', fontSize: 25 }]}>
          CAR GO
        </Text>
        {/* <View style={styles.textcon}>
          <Text style={styles.innertext}>View All</Text>
          <ArrowRight size={12} />
        </View> */}
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          paddingVertical: 20,
        }}
      >
        <Image source={assests.car1}  resizeMode='contain'  />
      </View>
      <View style={styles.uppertitle}>
        <Text style={[styles.innertext, { fontWeight: 'bold', fontSize: 14 }]}>
          Neabry Car
        </Text>
        <View style={styles.textcon}>
          <Text style={styles.innertext}>View All</Text>
          <ArrowRight size={12} />
        </View>
      </View>
      <FlatList
       data={carData}
      numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{ gap: 4, marginBottom: 10 , justifyContent : 'space-between' , marginHorizontal : 15 }}
        contentContainerStyle={{ padding : 5 , marginBottom : 70 }}
        renderItem={() => <Car />}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

export default HomeNeaberyCar;

const styles = StyleSheet.create({
  uppertitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 20,
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
});
