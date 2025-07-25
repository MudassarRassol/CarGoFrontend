import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { UpperBarProps } from './types';
import { ArrowLeft } from 'lucide-react-native';
import Header from '../Header/Header';
import Icon from 'react-native-vector-icons/Entypo';
import { colors } from '../../theme/color';
import Topheaderapp from '../topheaderapp/Topheaderapp';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-svg';
const UpperBar = ({ hasback, title, actioncom }: UpperBarProps) => {
  const navigation = useNavigation();
  return (
    <View>
      {hasback ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            paddingVertical: 20,
            paddingHorizontal: 20,
            backgroundColor: '#EDEDED',
          }}
        >
          <View style={{flexDirection : 'row',gap : 10 , alignItems : 'center'}} >
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                borderWidth: 1,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}
            >
              <ArrowLeft size={24} color={'black'} />
            </Pressable>
            {actioncom && actioncom}
          </View>

          <Text style={{ fontSize: 20  }}>{title}</Text>
          <Pressable
            style={{
              borderWidth: 1,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}
          >
            <Icon name="dots-three-horizontal" />
          </Pressable>
        </View>
      ) : (
        <Topheaderapp />
      )}
    </View>
  );
};

export default UpperBar;

const styles = StyleSheet.create({});
