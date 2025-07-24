import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ArrowRight, Heart, Icon } from 'lucide-react-native';
import { colors } from '../../theme/color';

type props = {
  text: string;
  icon : React.ReactNode;
  onpress? : ()=>void
};

const General = ({text , icon,onpress}:props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical : 10
      }}
    >
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <View style={{ width: 40, height: 40, borderWidth : 1 , borderColor:colors.border, borderRadius : 100 , alignItems : 'center' , justifyContent : 'center' }}>
          {icon}
        </View>
        <Text>
            {text}
        </Text>
      </View>
      <ArrowRight size={19} color={'#767676'} />
    </View>
  );
};

export default General;

const styles = StyleSheet.create({});
