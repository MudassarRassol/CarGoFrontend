  import {
    View,
    Text,
    Pressable,
    StyleSheet,
    FlatList,
    Animated,
  } from 'react-native';
  import React, { useRef } from 'react';
  import { colors } from '../../theme/color';
  import { Itab, TabProps } from './tabpropes';
  import Line from '../line/Line';

  const TabSwitch = ({ tabdata, title, onpress,flatlistcontainer,tab }: TabProps) => {
    const [activetab, setactivetab] = React.useState(() => tabdata?.[0]);

    return (
      <View>
        {title && <Text style={styles.title}>{title}</Text>}

        <View style={styles.tabcontainer}>
          <FlatList
            data={tabdata}
            contentContainerStyle={flatlistcontainer}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => {
              const isSelected = item.id === activetab?.id;
              return (
                <Pressable
                  style={isSelected ? styles.selectedtab : tab}
                  onPress={() => {
                    console.log(item);
                    setactivetab(item);
                    onpress?.(item);
                  }}
                >
                  <Text
                    style={isSelected ? styles.selectedtabtext : styles.tabtext}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    );
  };

  export default TabSwitch;

  const styles = StyleSheet.create({
    title: {
      letterSpacing: 1,
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 15,
      marginTop: 10,
    },
    tabcontainer: {
      marginVertical: 17,
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
