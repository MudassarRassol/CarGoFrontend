import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UpperBar from '../../../Components/UpperBar/UpperBar';
import assests from '../../../assets';
import SearchFilter from '../../../Components/SearchFilter/SearchFilter';
import InputCom from '../../../Components/input/Input';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../../theme/color';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { useNavigation } from '@react-navigation/native';

type navigation = StackNavigationProp<RootStackParamList,'ChatScreen'>

const Message = () => {
  const navigation = useNavigation<navigation>()
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <UpperBar
        hasback={true}
        actioncom={
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Image
              source={assests.profile}
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'red',
                borderRadius: 100,
              }}
            />
            <Text style={{ fontSize: 20, letterSpacing: 1 }}>Chats</Text>
          </View>
        }
      />
      <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
        <InputCom
          data={{
            placeholder: 'Search Your Dream Car',
            value: '',
            onChangeText: () => {},
            keyboardType: 'default',
          }}
        />
      </View>
      {/* <View style={{ flexDirection: 'row', marginLeft: 20, borderRadius: 100 }}>
        <View>
          <View
            style={{
              width: 55,
              height: 55,
              backgroundColor: 'white',
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 20 }}>+</Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              letterSpacing: 1,
              textAlign: 'center',
              marginTop: 4,
            }}
          >
            Add Story
          </Text>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <View
                style={{
                  width: 55,
                  height: 55,
                  borderWidth: 1,
                  borderRadius: 100,
                  borderColor: 'blue',
                  overflow: 'hidden',
                  flexDirection: 'column',
                }}
              >
                <Image
                  source={assests.profile}
                  resizeMode="contain"
                  style={{ width: 55, height: 55, borderRadius: 100 }}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  textAlign: 'center',
                  marginTop: 4,
                }}
              >
                {item}
              </Text>
            </View>
          )}
          contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        />
      </View> */}
      <FlatList
      showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({}) => (
          <Pressable
          onPress={()=>{navigation.navigate('ChatScreen')}}
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}
          >
            <View style={{flexDirection : 'row' , gap : 10  }} >
              <View  >
                              <Image
                source={assests.profile}
                style={{ width: 50, height: 50, borderRadius: 100 }}
              />
              <View style={{width : 10 , height : 10 , backgroundColor:'green' , position : 'absolute' , bottom : 4 , right : 2 , borderRadius : 100 }} ></View>
              </View>
              <View>
                <Text style={{letterSpacing : 1}} >Jhon</Text>
                  <Text style={{ letterSpacing : 1   }} ellipsizeMode='tail' numberOfLines={2}>Your Car is on the wa</Text>

              </View>
            </View>
            <View style={{ alignItems: 'center', gap: 4 }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: colors.primary,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: 'white', fontSize: 8 }}>3</Text>
              </View>
              <Text style={{ fontSize: 10 }}>09:20 am</Text>
            </View>
          </Pressable>
        )}
        contentContainerStyle={{ padding: 20, gap: 20 }}
        style={{marginBottom : 60}}      />
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({});
