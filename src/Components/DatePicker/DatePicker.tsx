import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Model from '../countrypicker/Model';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import ButtonCom from '../button/Component';

type Props = {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
};

const DatePicker = ({ isVisible, setIsVisible }: Props) => {
  let today = new Date();
  const [startdate, setStartdate] = useState<DateType>();
  const [enddate, setEnddate] = useState<DateType>();
  const defaultstyles = useDefaultStyles();
  return (
    <Model visible={isVisible} setVisible={() => setIsVisible(!isVisible)}>
      <View style={styles.container}>
        <DateTimePicker
          mode="range"
          startDate={startdate}
          endDate={enddate}
          onChange={({ startDate: s, endDate: e }) => {
            setEnddate(e);
            setStartdate(s);
          }}
          styles={defaultstyles}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Pressable
           onPress={() => setIsVisible(false)}
            style={{
              borderWidth: 1,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 100,
            }}
          >
            <Text>Cancel</Text>
          </Pressable>
          <Pressable
          onPress={() => {
            setIsVisible(false)
          }}
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 100,
            }}
          >
            <Text style={{ color: 'white' }}>Done</Text>
          </Pressable>
        </View>
      </View>
    </Model>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    gap: 10,
  },
});
