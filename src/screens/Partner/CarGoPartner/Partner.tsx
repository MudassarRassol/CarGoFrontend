import { Image, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { createstyles } from './style';
import assests from '../../../assets';
import ButtonCom from '../../../Components/button/Component';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'PatnerForm'>;

const Partner = () => {
  const navigation = useNavigation<NavigationProp>();
  const style = createstyles();
  return (
    <ImageBackground
      style={style.container}
      source={assests.patner}
      resizeMode="cover"
    >
      <ImageBackground
        style={{ height: '100%' }}
        source={assests.overlay}
        resizeMode="cover"
      >
        <View style={style.logocontainer}>
          <Image
            style={style.carlogo}
            source={assests.logo}
            resizeMode="contain"
          />
        </View>
        <View style={style.textcontainer}>
          <Text style={style.title}>Welcome to</Text>
          <Text style={style.title}>QENT Partner program</Text>
        </View>
        <Text style={{color : 'white' , marginHorizontal : 20 , position :'absolute' , bottom : 100 }} >
          Welcome to Our Community! We’re glad to have you as a partner in our
          car rental service. Ready to rent out your car? Let’s get started!
        </Text>
        <ButtonCom
          text="GET STARTED"
          onPress={() => navigation.navigate('PatnerForm')}
        />
      </ImageBackground>
    </ImageBackground>
  );
};

export default Partner;
