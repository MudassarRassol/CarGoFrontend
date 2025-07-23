import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import assests from '../../assets';


const VisaCards = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.box1} />
      <View style={styles.box2} />

      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={assests.visalogo}
          resizeMode="contain"
        />
        <Text style={styles.visaText}>VISA</Text>
      </View>

      <Image
        source={assests.Simicons}
        style={styles.simIcon}
        resizeMode="contain"
      />

      <View style={styles.infoRow}>
        <Text style={styles.name}>BANJAMIN JACK</Text>
        <Text style={styles.expiry}>Expire: 10-5-2030</Text>
      </View>

      <Text style={styles.cardNumber}>9655    9655    9655    9655</Text>
    </View>
  );
};

export default VisaCards;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 20,
    // height: '40%',
    width: '90%',
    backgroundColor: '#21292B',
    borderRadius: 20,
    overflow: 'hidden',
    paddingBottom : 40
  },
  box1: {
    backgroundColor: '#000000',
    width: 130,
    height: 130,
    borderRadius: 100,
    position: 'absolute',
    top: -40,
    right: -40,
  },
  box2: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    position: 'absolute',
    bottom: -100,
    left: -90,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
  },
  visaText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  simIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 25,
  },
  infoRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 30,
    marginTop: 10,
  },
  name: {
    color: 'white',
    marginTop: 10,
    letterSpacing: 1,
    fontSize: 10,
    fontWeight: 'bold',
  },
  expiry: {
    color: 'white',
    marginTop: 10,
    letterSpacing: 1,
    fontSize: 9,
  },
  cardNumber: {
    color: 'white',
    marginHorizontal: 20,
    marginTop: 10,
    letterSpacing: 1,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
