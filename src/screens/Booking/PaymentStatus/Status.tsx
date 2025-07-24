import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import UpperBar from '../../../Components/UpperBar/UpperBar';
import assests from '../../../assets';
import { FlatList } from 'react-native-gesture-handler';
import BookingInfo from '../../../Components/BookingInfo/BookingInfo';
import Line from '../../../Components/line/Line';
import ButtonCom from '../../../Components/button/Component';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Download, Share2 } from 'lucide-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { useNavigation } from '@react-navigation/native';

type navigate  = StackNavigationProp<RootStackParamList,'MainTabs'>

const bookingConfirmation = [
  { label: 'Car Model', value: 'Tesla Model 3' },
  { label: 'Name', value: 'Benjamin Jack' },
  { label: 'Rental Date', value: '19 Jan 2024 - 22 Jan 2024' },
];

const transactionList = [
  { label: 'Transaction ID', value: '#T000123B0J1' },
  { label: 'Transaction Date', value: '01 Jan 2024 - 10:30 am' },
  { label: 'Payment Method', value: '💳 123 *** *** *** 225' }, // you can also use an icon component instead of emoji
];

const Amount = [
  { label: 'Amount', value: '$1400' },
  { label: 'Service fee', value: '$15' },
  { label: 'Tax', value: '$0' }, // you can also use an icon component instead of emoji
];

const Status = () => {
  const navigation = useNavigation<navigate>();
  return (
    <ScrollView>
      <UpperBar hasback={true} title="Payment States " />
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <Image
          source={assests.Varifed}
          resizeMode="contain"
          style={{ width: 130, height: 150 }}
        />
        <Text
          style={{
            fontSize: 18,
            letterSpacing: 1,
            fontWeight: 'bold',
            marginTop: 8,
          }}
        >
          Payment successful
        </Text>
        <Text style={{ fontSize: 12, letterSpacing: 1 }}>
          Your car rent Booking has been successfully
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          marginHorizontal: 20,
          width: '90%',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            letterSpacing: 1,
            fontWeight: 'bold',
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          Booking information
        </Text>
        <FlatList
          data={bookingConfirmation}
          renderItem={({ item, index }) => (
            <BookingInfo key={index} label={item.label} value={item.value} />
          )}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Text
          style={{
            fontSize: 16,
            letterSpacing: 1,
            fontWeight: 'bold',
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          Transaction detail
        </Text>
        <FlatList
          data={transactionList}
          renderItem={({ item, index }) => (
            <BookingInfo key={index} label={item.label} value={item.value} />
          )}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
      <Line />
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>

        <FlatList
          data={Amount}
          renderItem={({ item, index }) => (
            <BookingInfo key={index} label={item.label} value={item.value} />
          )}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
         <View style={{ marginHorizontal: 20, margin: 'auto', width: '100%' }}>
          <ButtonCom
            text="Download Receipt"
            buttonstyle={styles.buttonstyle3}
            textstyle={styles.txt}
            // onPress={() => navigation.navigate('ScreenOne')}
            icon={<Download size={20} />}
          />
          <ButtonCom
            text="Shar Your Receipt"
            buttonstyle={styles.buttonstyle3}
            textstyle={styles.txt}
            icon={<Share2 size={20} />}
          />
          <ButtonCom
            text="Back To Home"
            buttonstyle={styles.buttonstyle4}
            onPress={() => navigation.navigate('MainTabs')}
            // textstyle={styles.txt1}
            // icon={<Icon2 name="apple" size={20} />}
          />
        </View>
    </ScrollView>
  );
};

export default Status;

const styles = StyleSheet.create({
    txt: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonstyle3: {
    position: 'relative',
    margin: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
  },
   buttonstyle4 : {
    position: 'relative',
    margin: 0,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
  }
});
