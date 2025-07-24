import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';
import UpperBar from '../../Components/UpperBar/UpperBar';
import Stepper from '../../Components/Stepper/Stepper';
import assests from '../../assets';
import CarDetails from '../../Components/CarDeatilsHeader/CarDetails';
import Line from '../../Components/line/Line';
import BookingInfo from '../../Components/BookingInfo/BookingInfo';
import Button from '../../Components/ButtonCom/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';

type navigation = StackNavigationProp<RootStackParamList, 'Status'>;

const bookingData = [
  { label: 'Booking ID', value: '00451' },
  { label: 'Name', value: 'Benjamin Jack' },
  { label: 'Pick up Date', value: '19 Jan 2024   10:30 am' },
  { label: 'Return Date', value: '22 Jan 2024   05:00 pm' },
  {
    label: 'Location',
    value: 'Shore Dr, Chicago 0062 Usa',
    icon: 'location-pin',
  },
];

const paymentData = [
  { label: 'Trx ID', value: '#141mtslv5854d58' },
  { label: 'Amount', value: '$1400' },
  { label: 'Service fee', value: '$15' },
];

const Confirmation = () => {
    const navigation = useNavigation<navigation>();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <UpperBar hasback={true} title="Confirmation" />
      <Stepper active={2} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 20,
        }}
      >
        <Image
          source={assests.car1}
          resizeMode="contain"
          style={{ width: '100%', height: 200 }}
        />
      </View>
      <CarDetails
        model="Tesla Model S"
        rating={5}
        review={100}
        desc="A car with high specs that are rented at an affordable price."
      />
      <Line />
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 16,
            letterSpacing: 1,
            fontWeight: 'bold',
            marginTop: 10,
          }}
        >
          Booking informational
        </Text>
        <FlatList
          data={bookingData}
          renderItem={({ item, index }) => (
            <BookingInfo
              key={index}
              label={item.label}
              value={item.value}
              icon={item.icon}
            />
          )}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
      <Line />
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 16,
            letterSpacing: 1,
            fontWeight: 'bold',
            marginTop: 10,
          }}
        >
          Payment
        </Text>
        <FlatList
          data={paymentData}
          renderItem={({ item, index }) => (
            <BookingInfo key={index} label={item.label} value={item.value} />
          )}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
      <Line />
      <View style={{ marginHorizontal: 20  , flexDirection : 'row' , justifyContent : 'space-between'  }}>
        <Text
          style={{
            fontSize: 16,
            letterSpacing: 1,
            fontWeight: 'bold',
            marginTop: 10,
          }}
        >
          Total amount
        </Text>
        <Text
         style={{
            fontSize: 13,
            letterSpacing: 1,
            fontWeight: 'bold',
            marginTop: 10,
          }}
        >
            $1415
        </Text>

      </View>
       <View style={{ marginHorizontal: 20  , flexDirection : 'row' , justifyContent : 'space-between'  }}>
        <Text
          style={{
            fontSize: 12,
            letterSpacing: 1,
            fontWeight: 'bold',
            marginTop: 10,
          }}
        >
          Payment with
        </Text>
        <Image
        source={assests.Master}
        resizeMode='contain'
        style={{width : 40 , height : 40}}
        />
      </View>
      <View style={{marginVertical : 10}} >
              <Button
      text='Confirm'
      onpress={()=>{navigation.navigate('Status')}}
      />
      </View>
    </ScrollView>
  );
};

export default Confirmation;

const styles = StyleSheet.create({});
