import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import UpperBar from '../../Components/UpperBar/UpperBar';
import SingelItem from './components/SingelItem';
import { colors } from '../../theme/color';
import assests from '../../assets';

const Notifications = () => {
  const notifications = null;

  return (
    <View style={styles.container}>
      <UpperBar hasback={true} title="Notifications" />

      {notifications ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={({ item }) => <SingelItem unread={item % 2 === 0} />}
          style={styles.flatList}
        />
      ) : (
        <View style={styles.emptyWrapper}>
          <View style={styles.imageContainer}>
            <Image source={assests.nonotification} resizeMode="contain" />
          </View>
          <Text style={styles.noNotificationText}>NO NOTIFICATIONS</Text>
          <Text style={styles.noNotificationSubtext}>
            Clutter Cleared. We'll notify you when there is something new.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    marginBottom: 150,
  },
  emptyWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  imageContainer: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noNotificationText: {
    marginBottom: 10,
  },
  noNotificationSubtext: {
    textAlign: 'center',
  },
});
