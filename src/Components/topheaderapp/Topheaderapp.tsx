import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import assests from '../../assets';
import { Bell } from 'lucide-react-native';
import { colors } from '../../theme/color';

const Topheaderapp = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoWrapper}>
        <Image
          source={assests.logo}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      {/* Notification + Profile */}
      <View style={styles.rightSection}>
        {/* Notification */}
        <View style={styles.bellWrapper}>
          <Bell />
          <View style={styles.bellBadge}>
            <Text style={styles.bellBadgeText}>1</Text>
          </View>
        </View>

        {/* Profile Image */}
        <Image
          source={assests.profile}
          resizeMode="contain"
          style={styles.profile}
        />
      </View>
    </View>
  );
};

export default Topheaderapp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 14,
    borderBottomWidth: 1,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  logo: {
    height: 40,
    width: 40,
  },
  rightSection: {
    flexDirection: 'row',
    gap: 10,
  },
  bellWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor :  colors.border ,
    position: 'relative',
  },
  bellBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellBadgeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
