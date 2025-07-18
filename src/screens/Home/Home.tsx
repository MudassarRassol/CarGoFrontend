import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Topheaderapp from '../../Components/topheaderapp/Topheaderapp';
import { Search, Settings2 } from 'lucide-react-native';
import { colors } from '../../theme/color';
import { Image } from 'react-native';
import assests from '../../assets';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';

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
    <View style={{ flex: 1 }}>
      <Topheaderapp />
      <ScrollView>
        <SearchFilter />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 1 }}>
            Brands
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 , padding : 10 ,paddingInlineEnd : 10 }}
        >
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingEnd : 18
            }}
          >
            {carBrands.map((item, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: 'black',
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight : 5
                }}
              >
                <Image
                  source={assests[item]}
                  style={{ height: 28, width: 28 }}
                  resizeMode="contain"
                  
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
