import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

type BookingInfoProps = {
  label: string;
  value: string;
  icon?: string;
};

const BookingInfo = ({ label, value, icon }: BookingInfoProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
      </View>
      {/* {icon && <Icon name={icon} size={14} color="#888"  />} */}
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};



export default BookingInfo;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop : 8,
    alignItems: 'flex-start',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontWeight: '600',
    color: '#312e2eff',
    letterSpacing : 1,
    fontSize: 13,
  },    
  value: {
    fontSize: 13,
    color: '#7F7F7F',
    textAlign: 'right',
    flex: 1,
    letterSpacing : 1,
  },
//   icon: {
//     marginRight: 4,
//   },
});
