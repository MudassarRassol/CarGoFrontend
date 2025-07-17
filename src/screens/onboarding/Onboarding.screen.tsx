import { Image, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { createstyles } from './onboarding.styles';
import assests from '../../assets';

const Onboarding = () => {
  const style = createstyles();
  return (
    <ImageBackground
      style={style.container}
      source={assests.carBg}
      resizeMode="cover"
    >
      <ImageBackground
        style={{ height: '100%' }}
        source={assests.overlay}
        resizeMode="cover"
      >
        <View style={style.logocontainer}>
          <Image style={style.carlogo} source={assests.logo} resizeMode='contain' />
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default Onboarding;
