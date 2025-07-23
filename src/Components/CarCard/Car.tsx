import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import React from 'react';
import assests from '../../assets';
import { Heart, LocationEdit } from 'lucide-react-native';
import { colors } from '../../theme/color';
const widthscreen  = Dimensions.get('screen').width;
const cardwidth = widthscreen*0.45
type Props = {
  bookingbutton?: boolean;
  onPress? : ()=>void;
};

const Car = ({ bookingbutton,onPress }: Props) => {
  const [filled, setFilled] = React.useState(false);
  return (
    <Pressable style={styles.container} onPress={onPress} >
      <View style={styles.imageContainer}>
        <Image
          source={assests.car1}
          style={styles.carImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.datacontainer}>
        <View style={styles.rowSpaceBetween}>
          <Text style={styles.carTitle}>Ferrari-FF</Text>
          <View style={styles.rowCenter}>
            <Text style={styles.ratingText}>5.0</Text>
            <Icon name="star" size={10} color={'orange'} />
          </View>
        </View>

        <View style={styles.rowCenter}>
          <LocationEdit size={10} />
          <Text style={styles.locationText}>Washington DC</Text>
        </View>
        {
          bookingbutton ? (
            <View style={styles.rowSpaceBetween}>
            <View style={styles.rowCenter}>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>$</Text>200/Day
            </Text>
          </View>
          <Pressable style={{backgroundColor : 'black' , paddingHorizontal : 10 , paddingVertical : 5 , borderRadius : 100}}>
            <Text style={{color : 'white' , fontSize :11 , letterSpacing : 1}}>Book Now</Text>
          </Pressable>

        </View>
          ) : <View style={styles.rowSpaceBetween}>
          <View style={styles.rowCenter}>
            <Icon2 name="event-seat" size={12} />
            <Text style={styles.detailText}>4 Seats</Text>
          </View>
          <View style={styles.rowCenter}>
            <Text style={styles.detailText}>
              <Text style={styles.bold}>$</Text>200/Day
            </Text>
          </View>
        </View>
        }
      </View>
      <Pressable style={styles.heartIcon} onPress={() => setFilled(!filled)} >
        {
          filled ? <Icon name="heart" size={12} /> : <Icon3 name="heart" size={12} />
        }
      </Pressable>
    </Pressable>
  );
};

export default Car;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: cardwidth,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    flexDirection: 'column',
    gap: 4,
    position: 'relative',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carImage: {
    width: 170,
    height: 120,
    transform: [{ scale: 0.9 }],
  },
  datacontainer: {
    flexDirection: 'column',
    gap: 8,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  carTitle: {
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
  ratingText: {
    letterSpacing: 1,
    fontSize: 10,
  },
  locationText: {
    letterSpacing: 1,
    fontSize: 10,
  },
  detailText: {
    letterSpacing: 1,
    fontSize: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  heartIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 5,
    right: 5,
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.border,
  },
});
