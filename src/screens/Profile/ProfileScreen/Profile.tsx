import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UpperBar from '../../../Components/UpperBar/UpperBar';
import { ScrollView } from 'react-native-gesture-handler';
import assests from '../../../assets';
import { BellDotIcon, Camera, Car, Edit, Heart, History, Languages, LogOut, Settings, UserPlus } from 'lucide-react-native';
import General from '../../../Components/ProfileGeneral/General';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/types';
import { useNavigation } from '@react-navigation/native';

type navigation = StackNavigationProp<RootStackParamList,'EditProfile','Partner'>

const Profile = () => {

  const navigation = useNavigation<navigation>()

  return (
    <View>
      <UpperBar hasback={true} title="Profile" />
      <ScrollView  showsVerticalScrollIndicator={false} >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginVertical : 15
          }}
        >
          <View style={{ position: 'relative' }}>
            <Image
              source={assests.profile}
              style={{ width: 60, height: 60, borderRadius: 100 }}
            />
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 100,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: -2,
                bottom: -2,
              }}
            >
              <Camera onPress={() => {navigation.navigate('EditProfile')}} size={18} />
            </View>
          </View>
          <View style={{ zIndex: 99 }}>
            <Text style={{ letterSpacing: 1, fontSize: 14 }}>
              Mudassar Rasool
            </Text>
            <Text style={{ letterSpacing: 1, fontSize: 10 }}>
              mudassarrasoolchishti@gmail.com
            </Text>
          </View>
          <Pressable onPress={() => {navigation.navigate('EditProfile')}} style={{alignItems:'center'}} >
            <Edit size={18} />
            <Text style={{fontSize:10 , letterSpacing : 1 }} >Edit Profile</Text>
          </Pressable>
        </View>
        <View style={{marginHorizontal : 20 , marginVertical : 10}} >
          <Text style={{letterSpacing : 1 , fontWeight : 'bold' , fontSize : 15}} >
            General 
          </Text>
        </View>
        <View style={{marginHorizontal : 20}} >
           <General 
           text='Favorite Cars'
           icon={<Heart size={19} color={'#767676'} />}
           />
           <General 
           text='Previous Rant'
           icon={<History size={19} color={'#767676'} />}
           />
            <General 
           text='Notification'
           icon={<BellDotIcon size={19} color={'#767676'} />}
           /> 
          <General 
           onpress={() => {navigation.navigate('Partner')}}
           text='Connected to QENT Partnerships'
           icon={<Car size={19} color={'#767676'} />}
           />
        </View>
           <View style={{marginHorizontal : 20 , marginTop : 20, marginBottom:10 }} >
          <Text style={{letterSpacing : 1 , fontWeight : 'bold' , fontSize : 15}} >
            Saport 
          </Text>
        </View>
        <View style={{marginHorizontal : 20}} >
           <General 
           text='Settings'
           icon={<Settings size={19} color={'#767676'} />}
           />
           <General 
           text='Languages'
           icon={<Languages size={19} color={'#767676'} />}
           />
            <General 
           text='Invite Friends'
           icon={<UserPlus size={19} color={'#767676'} />}
           />
            <General 
           text='Privacy policy'
           icon={<Car size={19} color={'#767676'} />}
           />
            <General 
           text='heart-handshake'
           icon={<Car size={19} color={'#767676'} />}
           />
            <General 
           text='Log out'
           icon={<LogOut size={19} color={'#767676'} />}
           />
           <View style={{marginBottom : 150}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
