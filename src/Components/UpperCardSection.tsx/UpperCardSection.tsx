import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ArrowRight } from 'lucide-react-native';

type Props = {
  title: string;
  onpress?: () => void;
};

const UpperCardSection = ({ title,onpress }: Props) => {
  return (
    <View style={styles.uppertitle}>
      <Text style={[styles.innertext, { fontWeight: 'bold', fontSize: 14 }]}>
        {title}
      </Text>
      <Pressable style={styles.textcon} onPress={onpress} >
        <Text style={styles.innertext}>View All</Text>
        <ArrowRight size={12} />
      </Pressable>
    </View>
  );
};

export default UpperCardSection;

const styles = StyleSheet.create({
  uppertitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  innertext: {
    fontSize: 12,
    // fontWeight: 'bold',
    letterSpacing: 1,
  },
  textcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  text: {
    fontSize: 10,
    letterSpacing: 1,
    color: 'graylight',
    marginBottom: 0,
    marginHorizontal: 20,
  },
  carcontainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
