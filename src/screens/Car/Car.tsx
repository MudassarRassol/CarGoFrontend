import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import UpperBar from '../../Components/UpperBar/UpperBar';
import Slider from '../../Components/Slider/Slider';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Line from '../../Components/line/Line';
import assests from '../../assets';
import { colors } from '../../theme/color';
import { MessageCircle, Phone } from 'lucide-react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatureBox from '../../Components/FeaturesBox/FeatureBox';
import UpperCardSection from '../../Components/UpperCardSection.tsx/UpperCardSection';
import Review from '../../Components/Review/Review';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/ButtonCom/Button';


 type navigation = StackNavigationProp<RootStackParamList, 'Review'>

const features = [
  {
    id: '1',
    icon: <Icon2 name="event-seat" size={20} />,
    label: 'Capacity',
    value: '5 Seats',
  },
  {
    id: '2',
    icon: <FontAwesome6 name="traffic-light" size={15} color="black" />,
    label: 'Advance',
    value: 'Autopilot',
  },
  {
    id: '3',
    icon: <Icon2 name="switch-access-shortcut" size={20} color="black" />,
    label: 'Engine Out',
    value: '670 HP',
  },
  {
    id: '4',
    icon: <FontAwesome6 name="bolt-lightning" size={15} color="black" />,
    label: 'Singel Charge',
    value: '405 Miles',
  },
  {
    id: '5',
    icon: <Ionicons name="speedometer-outline" size={20} color="black" />,
    label: 'Top Speed',
    value: '250km/h',
  },
  {
    id: '6',
    icon: <FontAwesome name="product-hunt" size={20} color="black" />,
    label: 'Advance',
    value: 'Auto Parking',
  },
];

const CarScreen = () => {

  const navigate = useNavigation<navigation>()

  return (
    <View style={styles.container}>
      <UpperBar hasback={true} title="Car Details" />
      <View style={styles.container}>
        <Slider />
        <View style={styles.contentWrapper}>
          <ScrollView
            // stickyHeaderIndices={[]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View style={styles.detailsHeader}>
              <View style={styles.spaceBetween}>
                <Text style={styles.carTitle}>Tesla Model S</Text>
                <View style={styles.rowCenter}>
                  <Text style={styles.ratingText}>5.0</Text>
                  <Icon name="star" size={13} color={'orange'} />
                  <Text style={styles.reviewText}>(100+ Reviews)</Text>
                </View>
              </View>
              <Text style={styles.descText}>
                A car with high specs that are rented at an affordable price.
              </Text>
            </View>

            <Line />

            <View style={styles.userRow}>
              <View style={styles.userLeft}>
                <Image source={assests.profile} style={styles.profileImage} />
                <View style={styles.userNameRow}>
                  <Text style={styles.userName}>Mudassar</Text>
                  <Image source={assests.varify} style={styles.varifyIcon} />
                </View>
              </View>
              <View style={styles.contactButtons}>
                <View style={styles.iconCircle}>
                  <Phone size={20} color={'black'} />
                </View>
                <View style={styles.iconCircle}>
                  <MessageCircle size={20} color={'black'} />
                </View>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Car features</Text>

            <FlatList
              data={features}
              numColumns={3}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.featureList}
              columnWrapperStyle={styles.featureRow}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <FeatureBox
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              )}
            />
            <UpperCardSection onpress={() =>navigate.navigate('Review') } title={'Review (125)'} />
            <FlatList
            data={[1,2,3]}
            renderItem={() => (
              <Review />
            )}
            horizontal
            showsHorizontalScrollIndicator ={false}
            contentContainerStyle={{marginHorizontal  : 10 , paddingEnd : 20}}
            />
          </ScrollView>
          <Button text={'Book Now'} onpress={() =>navigate.navigate('Booking') } />
        </View>
      </View>
    </View>
  );
};

export default CarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 10,
  },
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
  },
  userRow: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userLeft: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  userNameRow: {
    flexDirection: 'row',
    alignItems : 'center',
    gap: 5,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing : 1
  },
  varifyIcon: {
    width: 15,
    height: 15,
    marginBottom: -2,
  },
  contactButtons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing : 1
  },
  featureList: {
    marginHorizontal : 20,
    marginTop: 10,
  },
  featureRow: {
    justifyContent: 'space-between',
    marginBottom: 5,    
  }
});
