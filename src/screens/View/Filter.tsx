import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Model from '../../Components/countrypicker/Model';
import { IFilterProps } from '../../Components/SearchFilter/Ipropes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../theme/color';
import TabSwitch from '../../Components/TabSwitcher/tab';
import Slider from '@react-native-community/slider';
import assests from '../../assets';
import InputCom from '../../Components/input/Input';
const Filter = ({ visible, setVisible }: IFilterProps) => {
  const tabdata = [
    { id: 1, label: 'All Cars', value: 'All Cars' },
    { id: 2, label: 'Regular Cars', value: 'Regular Cars' },
    { id: 3, label: 'Luxury Cars', value: 'Luxury Cars' },
  ];

  const [value, setvalue] = useState(0);

  return (
    <Model visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <AntDesign name="close" size={20} />
          </Pressable>
          <Text style={styles.headerText}>Filter</Text>
          <View style={styles.placeholder} />
        </View>
        <TabSwitch title="Type of Cars" tabdata={tabdata} />
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.pricetext}>Price Range</Text>
          <Text style={styles.pricetext}>${value}</Text>
        </View>
        <View>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            thumbTintColor="#000000"
            onValueChange={e => setvalue(e)}
            step={1}
            value={value}
            thumbImage={assests.car1}
          />
          <View >
            <InputCom
              data={{
                placeholder: 'Min Value',
                value: value.toString(),
                keyboardType: 'default',
                onChangeText: e => setvalue(parseInt(e)),
              }}
            />
             <InputCom
              data={{
                placeholder: 'Max Value',
                value: value.toString(),
                keyboardType: 'default',
                onChangeText: e => setvalue(parseInt(e)),
              }}
            />
          </View>
        </View>
      </View>
    </Model>
  );
};

export default Filter;

const styles = StyleSheet.create({
  pricetext: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -12,
    // marginHorizontal : 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  closeButton: {
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 25,
  },
  tabcontainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginVertical: 15,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  tab: {},
  tabtext: {
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
