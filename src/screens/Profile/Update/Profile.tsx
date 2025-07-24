import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UpperBar from '../../../Components/UpperBar/UpperBar';
import { Image } from 'react-native';
import assests from '../../../assets';
import { Edit2 } from 'lucide-react-native';
import InputCom from '../../../Components/input/Input';
import Button from '../../../Components/ButtonCom/Button';
import { useedit } from './update.hook';

const EditProfile = () => {

    const {photo,selectimage} = useedit();

  return (
    <View>
      <UpperBar hasback={true} title="Edit Profile" />
      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
        //   position: 'relative',
        }}
      >
        <Pressable onPress={selectimage} >
          <Image
            source={photo ? photo : assests.profile}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <View
            style={{
              position: 'absolute',
              width: 35,
              height: 35,
              backgroundColor: 'white',
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 0,
              right: 0,
              borderWidth : 1
            }}
          >
            <Edit2 size={20} />
          </View>
        </Pressable>
        <Text style={{ letterSpacing: 1, fontSize: 18, marginTop: 4 }}>
          Mudassar
        </Text>
      </View>
      <View style={{marginHorizontal : 20}} >
        <InputCom
        data={{
          placeholder : 'First Name',
          value : '',
          onChangeText : () => {},
          keyboardType : 'default'
        }}
        />
         <InputCom
        data={{
          placeholder : 'Last Name',
          value : '',
          onChangeText : () => {},
          keyboardType : 'default'
        }}
        />
         <InputCom
        data={{
          placeholder : 'Email Adress',
          value : '',
          onChangeText : () => {},
          keyboardType : 'email-address'
        }}
        />
         <InputCom
        data={{
          placeholder : 'Phone Number',
          value : '',
          onChangeText : () => {},
          keyboardType : 'numeric'
        }}
        />
      </View>
      <View style={{marginTop:10}} />
      <Button text="Save"  />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
