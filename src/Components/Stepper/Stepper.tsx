import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CheckIcon } from 'lucide-react-native';

interface IStepper {
  active: number;
}
const InnerCircle = () => {
  return <View style={styles.circleInner} />;
};

const Stepper = ({ active }: IStepper) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressLine} />
      {['Booking details', 'Payment methods', 'Confirmation'].map(
        (item, index) => {
          return (
            <View key={index} style={styles.stepContainer}>
              <View style={styles.circleOuter}>
                {active === index ? <InnerCircle /> : active >= index ?  <CheckIcon size={18} color={'white'} />    : null}
              </View>
              <Text 
              style={active === index ? styles.active : styles.inactive}
              >{item}</Text>
            </View>
          );
        },
      )}
      {/* Step 1 */}
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    position: 'relative',
  },
  progressLine: {
    position: 'absolute',
    top: '24%',
    borderWidth: 1,
    width: '82%',
    left: '10%',
  },
  stepContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  circleOuter: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInner: {
    width: 13,
    height: 13,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active : {
    color : 'black',
    
  },
  inactive : {
    color : 'gray'
  }
});
