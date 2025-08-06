import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import Model from './Model';
import countries from './country';
import { colors } from '../../theme/color';

type propes = {
  color? : string
  onSelectCountry : (item : any) => void
}

const CountryPickerScreen = ({color,onSelectCountry}:propes) => {
  const [country, setCountry] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [countryimg , setCountryimg] = useState()
  const handleSelectCountry = (item: any) => {
    setCountryimg(item.flag)
    setCountry(item.name);
    setIsVisible(false);
    console.log(item.name)
    onSelectCountry(item.name.toString())
  };

  return (
    <View style={styles.container}>
      <Pressable style={[styles.selector , color && {backgroundColor : colors.white} ]} onPress={() => setIsVisible(true)} >
        <View style={styles.countrybox} >
                    <Image 
        source={{uri : countryimg}}
        style = {{width : 30 , height : 30}}
        resizeMode='contain'
        />
        <Text style={styles.selectedText}>
          {country ? country : 'Select Country'}
        </Text>
        </View>
      </Pressable>

      <Model visible={isVisible} setVisible={setIsVisible}>
        <View style={styles.bottomSheet}>
          <FlatList
            data={countries}
            keyExtractor={(item) => item.code}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                style={styles.countryItem}
                onPress={() => handleSelectCountry(item)}
              >
                <View style={styles.countryInfo}>
                  <Image
                    resizeMode="contain"
                    source={{ uri: item.flag }}
                    style={styles.flag}
                  />
                  <View>
                    <Text style={styles.countryName}>{item.name}</Text>
                    <Text style={styles.dialCode}>{item.ph}</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
      </Model>
    </View>
  );
};

export default CountryPickerScreen;

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  selector: {
    gap : 10,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    // backgroundColor: colors.white,
  },
  countrybox:{
    flexDirection: 'row', 
    alignItems : 'center',
    gap : 10,

  },
  selectedText: {
    fontSize: 16,
    color: colors.black,
  },
  bottomSheet: {
    backgroundColor: colors.white,
    borderRadius: 20,
    height: 400,
    padding: 20,
  },
  countryItem: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: colors.border,
  },
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  flag: {
    width: 30,
    height: 20,
    borderRadius: 3,
  },
  countryName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  dialCode: {
    fontSize: 14,
    color: colors.border,
  },
});
