import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import React, { use } from 'react';
import UpperBar from '../../Components/UpperBar/UpperBar';
import Stepper from '../../Components/Stepper/Stepper';
import { Switch } from 'react-native-gesture-handler';
import { colors } from '../../theme/color';
import { useState } from 'react';
import InputCom from '../../Components/input/Input';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign2 from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TabSwitch from '../../Components/TabSwitcher/tab';
import { tabtime } from '../View/Filterdata';
import UpperCardSection from '../../Components/UpperCardSection.tsx/UpperCardSection';
import DatePicker from '../../Components/DatePicker/DatePicker';
import ButtonCom from '../../Components/button/Component';
import Button from '../../Components/ButtonCom/Button';
const Booking = () => {
  const [switchs, setswitchs] = useState(false);
  const data = [
    {
      id: 1,
      label: 'Male',
      value: 'Male',
      Icon: <FontAwesome name="male" size={20} color="black" />,
    },
    {
      id: 2,
      label: 'Female',
      value: 'Female',
      Icon: <FontAwesome name="female" size={20} color="black" />,
    },
    {
      id: 3,
      label: 'Other',
      value: 'Other',
      Icon: <Icon name="male-female-outline" size={20} color="black" />,
    },
  ];
    const [datepicker, setdatepicker] = useState(false);
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}  >
      <UpperBar title="Booking Details" hasback={true} />
      <Stepper active={2} />
      <Pressable
        style={({ pressed }) => [
          styles.driverBox,
          pressed && styles.driverBoxShadow,
        ]}
      >
        <View>
          <Text style={styles.driverTitle}>Book with driver</Text>
          <Text style={styles.driverSubtitle}>
            Don't have a driver? Book with driver.
          </Text>
        </View>
        <Switch
          value={switchs}
          onValueChange={setswitchs}
          thumbColor={colors.black}
          trackColor={{
            false: 'gray',
            true: 'gray',
          }}
        />
      </Pressable>
      <View style={{ marginHorizontal: 20 }}>
        <InputCom
          data={{
            placeholder: 'Full Name',
            value: '',
            onChangeText: () => {},
            keyboardType: 'default',
            Icon: <Icon name="person" size={23} color="black" />,
          }}
        />
        <InputCom
          data={{
            placeholder: 'Email Adress',
            value: '',
            onChangeText: () => {},
            keyboardType: 'email-address',
            Icon: <Icon name="mail" size={23} color="black" />,
          }}
        />
        <InputCom
          data={{
            placeholder: 'Phone Number',
            value: '',
            onChangeText: () => {},
            keyboardType: 'numeric',
            Icon: <AntDesign name="phone" size={23} color="black" />,
          }}
        />
      </View>
      <TabSwitch
        title="Gender"
        tabdata={data}
        flatlistcontainer={styles.flatlistcontainer}
        tab={styles.tab}
      />
      <TabSwitch
        title="Rental  Date &Time "
        tabdata={tabtime}
        flatlistcontainer={styles.flatlistcontainer}
        tab={styles.tab}
      />
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 20,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Pressable onPress={() => {setdatepicker(true)}} style={{ gap: 4 }}>
          <Text>Pick up Date</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Icon name="timer-outline" />
            <Text style={{ fontSize: 10 }}>19/ January /2024</Text>
          </View>
        </Pressable>
        <View
          style={{
            height: '100%',
            width: 0,
            backgroundColor: colors.border,
            borderWidth: 0.8,
          }}
        />
        <Pressable onPress={() => {setdatepicker(true)}} style={{ gap: 4 }}>
          <Text>Return Date</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Icon name="timer-outline" />
            <Text style={{ fontSize: 10 }}>19/ January /2024</Text>
          </View>
        </Pressable>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={styles.title}>Car Location</Text>
        <InputCom
          data={{
            placeholder: 'Shore Dr, Chicago 0062 Usa',
            value: '',
            onChangeText: () => {},
            keyboardType: 'default',
            Icon: <Icon name="location" size={23} color="black" />,
          }}
        />
      </View>
      <Button text=" $1400 Pay Now" />
      <View  >
          <DatePicker isVisible={datepicker} setIsVisible={setdatepicker} />
      </View>
    </ScrollView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  driverBox: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  driverBoxShadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  driverTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  driverSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  flatlistcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  tab: {
    //  backgroundColor: 'black',
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  title: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: 'bold',
    // marginHorizontal: 15,
    marginTop: 10,
  },
});
