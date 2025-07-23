import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type propes = {
    text : string,
    onpress? : () => void
}

const Button = ({text,onpress}:propes) => {
  return (

      <Pressable onPress={onpress} style={styles.bookNowButton}>
        <Text style={{ color: 'white', fontSize: 15 , letterSpacing: 1, fontWeight: 'bold' }}>
          {
            text
          }
        </Text>
      </Pressable>

  );
};

export default Button;

const styles = StyleSheet.create({
      bookNowButton: {
    backgroundColor: 'black',
    marginHorizontal: 20,
    // marginTop: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius : 100,
    marginBottom  : 10

  },
});
