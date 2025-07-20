import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Model from '../../Components/countrypicker/Model';
import { IFilterProps } from '../../Components/SearchFilter/Ipropes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../theme/color';
import TabSwitch from '../../Components/TabSwitcher/tab';

const Filter = ({ visible, setVisible }: IFilterProps) => {
   const tabdata = [{id:1,label:'All Cars',value:'All Cars'},{id:2,label:'Regular Cars',value:'Regular Cars'},{id:3,label:'Luxury Cars',value:'Luxury Cars'}];

  return (
    <Model visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <AntDesign name="close" size={20} />
          </Pressable>
          <Text style={styles.headerText}>Filter</Text>
          <View style={styles.placeholder} />
        </View>
        <TabSwitch title='Type of Cars' tabdata={tabdata}  />
      </View>
    </Model>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  closeButton: {
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  headerText: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 25,
  },
  tabcontainer:{
    flexDirection : 'row',
    gap : 10,
    justifyContent : 'space-between',
    marginVertical: 15,
    borderWidth : 1,
    borderColor  : colors.border , 
    paddingVertical : 14,
    paddingHorizontal : 20,
    borderRadius : 100
  },
  tab: {},
  tabtext:{
    fontSize : 15,
    letterSpacing : 0.5,
  }
});
