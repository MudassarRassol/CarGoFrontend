import { View, Text, Pressable, StyleSheet, FlatList, Animated } from 'react-native';
import React, { useRef } from 'react';
import { colors } from '../../theme/color';
import { Itab, TabProps } from './tabpropes';
import Line from '../line/Line';

const TabSwitch = ({ tabdata, title, onpress }: TabProps) => {
  const [activetab, setactivetab] = React.useState(() => tabdata?.[0]);

  return (
    <View style={{ padding: 16 }}>
      {title && (
        <Text style={styles.title}>
          {title}
        </Text>
      )}

      <View style={styles.tabcontainer}>
        <FlatList
          data={tabdata}
          contentContainerStyle={{ justifyContent: 'space-between' , flexDirection : 'row' , borderWidth : 1 , borderColor : colors.border , borderRadius : 100  }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const isSelected = item.id === activetab?.id;
            return (

                <Pressable
                  style={isSelected ? styles.selectedtab : styles.tab}
                  onPress={() => {
                  
                    setactivetab(item);
                    onpress?.(item);
                  }}
                >
                  <Text style={isSelected ? styles.selectedtabtext : styles.tabtext}>
                    {item.label}
                  </Text>
                </Pressable>

            );
          }}
        />
        <Line/>
      </View>
    </View>
  );
};

export default TabSwitch;

const styles = StyleSheet.create({
  title: {
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabcontainer: {
    marginVertical: 17,
  },
  tab: {
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabtext: {
    fontSize: 14,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  selectedtabtext: {
    fontSize: 14,
    letterSpacing: 0.5,
    color: 'white',
    textAlign: 'center',
  },
  selectedtab: {
    backgroundColor: 'black',
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
