import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import UpperBar from '../../../Components/UpperBar/UpperBar';
import InputCom from '../../../Components/input/Input';
import { Camera, FileSlidersIcon } from 'lucide-react-native';
import Button from '../../../Components/ButtonCom/Button';
import TabSwitch from '../../../Components/TabSwitcher/tab';
import { FuelType } from '../../View/Filterdata';
import { colors } from '../../../theme/color';

const PatnerForm = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <UpperBar hasback={true} title="Car Go Partner Program" />
      <View style={styles.formWrapper}>
        <Text style={styles.sectionTitle}>Car owner information</Text>

        <InputCom
          data={{
            placeholder: 'First Name',
            secureTextEntry: false,
            value: '',
            onChangeText: () => {},
            Icon: null,
            keyboardType: 'default',
          }}
        />
        <InputCom
          data={{
            placeholder: 'Email Address',
            secureTextEntry: false,
            value: '',
            onChangeText: () => {},
            Icon: null,
            keyboardType: 'email-address',
          }}
        />
        <InputCom
          data={{
            placeholder: 'Contact',
            secureTextEntry: false,
            value: '',
            onChangeText: () => {},
            Icon: null,
            keyboardType: 'numeric',
          }}
        />
        <InputCom
          data={{
            placeholder: 'Driving Licenses Number',
            secureTextEntry: false,
            value: '',
            onChangeText: () => {},
            Icon: null,
            keyboardType: 'numeric',
          }}
        />

        <Text style={styles.sectionTitle}>Car information</Text>

        <View style={styles.tabWrapper}>
          <Pressable style={styles.tabActive}>
            <Text style={styles.tabActiveText}>Car information</Text>
          </Pressable>
          <Pressable style={styles.tabInactive}>
            <Text style={styles.tabInactiveText}>Car Model</Text>
          </Pressable>
        </View>
        {/* 
        <View style={styles.carListContainer}>
          <View style={styles.carListColumn}>
            <Text style={styles.listTitle}>Regular Cars Brand</Text>
            <View style={styles.scrollableList}>
              <FlatList
                data={[
                  'Honda',
                  'Toyota',
                  'Nissan',
                  'Hyundai',
                  'Suzuki',
                  'Mazda',
                  'Chevrolet',
                ]}
                keyExtractor={(item, index) => `regular-${index}`}
                renderItem={({ item }) => (
                  <Text style={styles.carListItem}>{item}</Text>
                )}
                   showsVerticalScrollIndicator={false}
              />
            </View>
          </View>

          <View style={styles.carListColumn}>
            <Text style={styles.listTitle}>Luxury Cars Brand</Text>
            <View style={styles.scrollableList}>
              <FlatList
                
                data={['Tesla', 'Mercedes', 'BMW', 'Audi', 'Jaguar', 'Porsche']}
                keyExtractor={(item, index) => `luxury-${index}`}
                renderItem={({ item }) => (
                  <Text style={styles.carListItem}>{item}</Text>
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View> */}

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 20,
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TextInput
            placeholder="Upload Cars images"
            style={{ backgroundColor: 'white' }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Camera size={25} />
            <FileSlidersIcon size={25} />
          </View>
        </View>
      </View>
      <TabSwitch
        title="Fuel Type"
        tabdata={FuelType}
        flatlistcontainer={styles.flatlisttimecontainer}
        tab={styles.tabtime}
      />
         <TextInput
            style={{
                marginHorizontal : 20,
                backgroundColor  : 'white',
                height : 140,
                marginBottom : 20,
                borderRadius : 20,
                padding : 20
            }}
            multiline={true}
            numberOfLines={4} // Sets initial height to 4 lines
            // onChangeText={newText => setText(newText)}
            // value={text}
            placeholder="Enter your comments here..."
            textAlignVertical="top" // Aligns text to the top
          />
      <Button text="Submit" />
    </ScrollView>
  );
};

export default PatnerForm;

const styles = StyleSheet.create({
  flatlisttimecontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  tabtime: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  formWrapper: {
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  tabWrapper: {
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 5,
  },
  tabActive: {
    backgroundColor: 'black',
    width: '50%',
    padding: 10,
    borderRadius: 100,
  },
  tabInactive: {
    width: '50%',
    padding: 10,
  },
  tabActiveText: {
    textAlign: 'center',
    color: 'white',
  },
  tabInactiveText: {
    textAlign: 'center',
    color: 'black',
  },
  carListContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  carListColumn: {
    width: '48%',
    // borderLeftWidth: 1,
    // borderLeftColor: 'black',
  },
  listTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  carListItem: {
    textAlign: 'center',
    paddingVertical: 5,
  },
  scrollableList: {
    height: 120,
  },
});
