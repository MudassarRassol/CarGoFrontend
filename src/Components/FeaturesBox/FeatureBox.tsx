import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../theme/color';

interface FeatureBoxProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const FeatureBox = ({ icon, label, value }: FeatureBoxProps) => {
  return (
    <View style={styles.box}>
      <View style={styles.iconContainer}>{icon}</View>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default FeatureBox;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#EDEDED',
    width: '34%',
    borderRadius: 20,
    padding: 12,
    gap: 10,
    transform: [{ scale: 0.95 }],
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  label: {
    fontSize: 12,
    letterSpacing : 1
  },
  value: {
    fontSize: 12,
    letterSpacing : 1,
    fontWeight: 'bold',
  },
});
    