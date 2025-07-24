import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Model from '../../Components/countrypicker/Model';
import { IFilterProps } from '../../Components/SearchFilter/Ipropes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../theme/color';
import TabSwitch from '../../Components/TabSwitcher/tab';
import Slider from '@react-native-community/slider';
import assests from '../../assets';
import InputCom from '../../Components/input/Input';
import Line from './../../Components/line/Line';
import { Capacity, FuelType, tabdata, tabtime } from './Filterdata';
import DatePicker from '../../Components/DatePicker/DatePicker';
const Filter = ({ visible, setVisible }: IFilterProps) => {
  const [location, setLocation] = useState<string>('');
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(5000);
  const [value, setvalue] = useState(0);
  const [datepicker, setdatepicker] = useState(false);

  return (
    <Model visible={visible} setVisible={setVisible}>
      <View style={styles.container} >
        <ScrollView  >
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
        <TabSwitch
          title="Type of Cars"
          tabdata={tabdata}
          flatlistcontainer={styles.flatlistcontainer}
          tab={styles.tabcars}
        />
        <Line />
        <View
          style={{
            marginHorizontal: 18,
            marginTop: 15,
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
            minimumValue={min}
            maximumValue={max}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            thumbTintColor="#000000"
            onValueChange={e => setvalue(e)}
            step={1}
            value={value}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 20,
            }}
          >
            <InputCom
              data={{
                placeholder: 'Min Value',
                value: min.toString(),
                keyboardType: 'numeric',
                width : "40%",
                onChangeText: e => {
                  const val = parseInt(e) || 0;
                  setmin(val);
                  if (value < val) setvalue(val); // Ensure value is not less than min
                },
              }}
            />
            <Image
              source={assests.logo}
              style={{ height: 50, width: 50 }}
              resizeMode="contain"
            />
            <InputCom
              data={{
                placeholder: 'Max Value',
                value: max.toString(),
                width : "40%",
                keyboardType: 'numeric',
                onChangeText: e => {
                  const val = parseInt(e) || 0;
                  setmax(val);
                  if (value > val) setvalue(val); // Ensure value is not more than max
                },
              }}
            />
          </View>
          <Line />
        </View>
        <TabSwitch
          title="Rental Time"
          tabdata={tabtime}
          flatlistcontainer={styles.flatlisttimecontainer}
          tab={styles.tabtime}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}
        >
          <Text>Pick up and Drop Date</Text>
          
          <Pressable onPress={() => {setdatepicker(true)}} >
            <DatePicker isVisible={datepicker} setIsVisible={setdatepicker} />
            <Text>05,Jun,2024</Text>
          </Pressable>
        </View>
        <View style={{ marginHorizontal: 18, marginTop: 5 }}>
          <InputCom
            data={{
              placeholder: 'Pickup Location',
              onChangeText: e => {
                setLocation(e);
              },
              keyboardType: 'default',
              value: location,
            }}
          />
        </View>
        <Line />
        <TabSwitch
          title="Siting Capacity"
          tabdata={Capacity}
          flatlistcontainer={styles.flatlisttimecontainer}
          tab={styles.tabtime}
        />
        <TabSwitch
          title="Fuel Type"
          tabdata={FuelType}
          flatlistcontainer={styles.flatlisttimecontainer}
          tab={styles.tabtime}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 , marginVertical : 20 , borderTopWidth : 1 , paddingTop : 20 , borderColor : colors.border , alignItems :'center' }} >
          <Pressable>
            <Text>
              Clear All
            </Text>
          </Pressable>
          <Pressable style={{backgroundColor : 'black' , padding : 16 , borderRadius : 100 }} >
           <Text style={{color : 'white' , fontSize : 10}} >
             Show 100+ Cars
           </Text>
          </Pressable>
        </View>
        </ScrollView>
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
    marginTop: 12,
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
  flatlistcontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    marginHorizontal: 15,
  },
  flatlisttimecontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  tabtime: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabcars: {
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
