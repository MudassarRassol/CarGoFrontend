import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import assests from '../../assets';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Welcome to the App',
    image: assests.slide1,
  },
  {
    id: '2',
    title: 'Donate or Sell Books',
    image: assests.slide5,
  },
  {
    id: '3',
    title: 'Chat with Donors',
    image: assests.slide3,
  },
];

const YourSlideComponent = ({ item }: { item: any }) => (
  <View style={styles.slide}>
    <Image source={item.image} style={styles.image}  />
    {/* <Text style={styles.title}>{item.title}</Text> */}
  </View>
);

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <YourSlideComponent item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: 200,
    borderRadius: 10,
    marginBottom: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#000000ff',
  },
  inactiveDot: {
    backgroundColor: '#C0C0C0',
  },
});

export default Slider;
