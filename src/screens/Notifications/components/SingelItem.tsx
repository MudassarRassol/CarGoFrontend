import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/color';
import { Bell, BellDot, BellOff } from 'lucide-react-native';

interface IsingelItemProps {
  unread: boolean;
}


const SingelItem = ({unread}:IsingelItemProps) => {
  return (
    <Pressable style={[styles.NotificationsContainer  , {backgroundColor : unread ? '#F2F2F2' : 'white'}]}>
      <View style={styles.circle}>
        {
            unread ? <BellDot /> : <BellOff />
        }
      </View>
      <View style={{ flexShrink: 1, gap: 5 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={styles.notificationtitle}>Car Booking Successful</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={{ fontSize: 10 }}>9:00 am </Text>
            {
                unread &&             <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'blue',
                borderRadius: 100,
              }}
            />
            }
          </View>
        </View>
        <Text
          style={styles.notificationtext}
          ellipsizeMode="tail"
          numberOfLines={2}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          accusamus, aliquid em, ipsum dolor sit amet consectetur adipisicing
          elit. Illum accusamus, aliquid
        </Text>
      </View>
    </Pressable>
  );
};

export default SingelItem;

const styles = StyleSheet.create({
  NotificationsContainer: {
    marginBottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  notificationtitle: {
    color: 'black',
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  notificationtext: {
    fontSize: 12,
    letterSpacing: 1,
  },
  circle: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
