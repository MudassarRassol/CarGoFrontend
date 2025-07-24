import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import UpperBar from '../../../Components/UpperBar/UpperBar';
import Stepper from '../../../Components/Stepper/Stepper';
import VisaCard from '../../../Components/VisaCardCom/VisaCard'; // update the path if needed
import VisaCards from '../../../Components/VisaCardCom/VisaCard';
import { ScrollView, Text } from 'react-native-gesture-handler';
import InputCom from '../../../Components/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardPicker from '../../../Components/CardPicker.tsx/CardPicker';
import CountryPickerScreen from '../../../Components/countrypicker/CountryPickerScreen';
import CheckBox from '@react-native-community/checkbox';
import { colors } from '../../../theme/color';
import ButtonCom from '../../../Components/button/Component';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { useNavigation } from '@react-navigation/native';

type navigation = StackNavigationProp<RootStackParamList, 'Confirmation'>;

const Payment = () => {
    const navigate = useNavigation<navigation>();
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView  >
      <UpperBar title="Payment methods" hasback={true} />
      <Stepper active={1} />
      <VisaCards />
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <View>
          <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}>
            Select Payment Method
          </Text>
          <InputCom
            data={{
              placeholder: 'Credit Card',
              value: '',
              onChangeText: () => {},
              keyboardType: 'default',
              Icon: <Icon name="cc-mastercard" size={20} color="black" />,
              default: true,
              onpress: () => setIsVisible(true),
            }}
          />
        </View>
        <Text style={{ fontWeight: 'bold', letterSpacing: 1 }}>
          Card information
        </Text>
        <InputCom
          data={{
            placeholder: 'Full Name',
            value: '',
            onChangeText: () => {},
            keyboardType: 'default',
          }}
        />
        <InputCom
          data={{
            placeholder: 'Email Adress',
            value: '',
            onChangeText: () => {},
            keyboardType: 'email-address',
          }}
        />
        <View style={{}}>
          <InputCom
            data={{
              placeholder: 'MM / YY',
              value: '',
              onChangeText: () => {},
              keyboardType: 'phone-pad',
              style: { width: '35%' },
            }}
          />
          <InputCom
            data={{
              placeholder: 'CVC',
              value: '',
              onChangeText: () => {},
              keyboardType: 'phone-pad',
              style: { width: '45%' },
            }}
          />
        </View>
        <Text
          style={{ fontWeight: 'bold', letterSpacing: 1, marginVertical: 10 }}
        >
          Country or region
        </Text>
        <CountryPickerScreen color="white" />
        <InputCom
          data={{
            placeholder: 'Zip Code',
            value: '',
            onChangeText: () => {},
            keyboardType: 'numeric',
          }}
        />
        <View>
          <CardPicker
            isVisible={isVisible}
            setIsVisible={() => setIsVisible(!isVisible)}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{ true: '#0c0e0fff', false: '#aaa' }}
          />
          <Text style={{ letterSpacing: 1, fontSize: 12 }}>
            Trams & continue
          </Text>
          {/* <ArrowDown size={12}  color="black" /> */}
        </View>
        <View style={styles.or}>
          <View style={styles.line} />
          <Text
            style={{
              marginHorizontal: 20,
              textAlign: 'center',
              letterSpacing: 1,
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            Pay with card Or
          </Text>
          <View style={styles.line} />
        </View>

        <View style={{ marginHorizontal: 20, margin: 'auto', width: '100%' }}>
          <ButtonCom
            text="Google Pay "
            buttonstyle={styles.buttonstyle3}
            textstyle={styles.txt}
            // onPress={() => navigation.navigate('ScreenOne')}
            icon={<Icon2 name="google" size={20} />}
          />
          <ButtonCom
            text="Apple pay"
            buttonstyle={styles.buttonstyle3}
            textstyle={styles.txt}
            icon={<Icon2 name="apple" size={20} />}
          />
          <ButtonCom
            text="Continue"
            buttonstyle={styles.buttonstyle4}
            onPress={() => navigate.navigate('Confirmation')}
            // textstyle={styles.txt1}
            // icon={<Icon2 name="apple" size={20} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  or: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderWidth: 0.9,
    borderColor: colors.border,
    width: '35%',
  },
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
