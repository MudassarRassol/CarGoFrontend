import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/color';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
    model : string,
    rating : number,
    desc : string,
    review : number
};

const CarDetails = ({model,rating,desc,review}:Props) => {
  return (
    <View style={styles.detailsHeader}>
      <View style={styles.spaceBetween}>
        <Text style={styles.carTitle}>{model}</Text>
        <View style={styles.rowCenter}>
          <Text style={styles.ratingText}>{rating}.0</Text>
          <Icon name="star" size={13} color={'orange'} />
          <Text style={styles.reviewText}>( {review} + Reviews)</Text>
        </View>
      </View>
      <Text style={styles.descText}>
        A car with high specs that are rented at an affordable price.
      </Text>
    </View>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  detailsHeader: {
    marginHorizontal: 20,
    marginTop: 14,
    gap: 4,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing :1
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    letterSpacing: 1,
    fontSize: 13,
    
  },
  reviewText: {
    fontSize: 10,
    
  },
  descText: {
    color: '#444',
       letterSpacing :1
  },
});