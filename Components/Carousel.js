import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity,ScrollView } from 'react-native'
import React, { useRef, useMemo, useState, useEffect } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
const { width } = Dimensions.get('window');
import Carousel from 'react-native-reanimated-carousel';
import HorizontalProductsHome from './HorizontalProductsHome';
import { FlatList } from 'react-native-gesture-handler'
import RecentlyViewed from './RecentlyViewed';



const images = [
  require('../assets/Images/flip1.jpg'),
  require('../assets/Images/flip2.jpg'),
  require('../assets/Images/flip3.jpg'),
  require('../assets/Images/flip4.png'),
  require('../assets/Images/flip5.png'),
];

const threeimages = [
  {
    pic: require('../assets/HorizonImages/iron.png'),
    heading: 'Steam Iron',
    subheading: 'Under ₹799',
  },
  {
    pic: require('../assets/HorizonImages/earbuds.jpg'),
    heading: 'Wireless Earbuds',
    subheading: 'Under ₹499',
  },
  {
    pic: require('../assets/ExploreImages/handbg.jpg'),
    heading: 'Hand Bag',
    subheading: 'Under ₹699',
  },
]

const CarouselFlip = () => {

  const bottomSheetRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleLeftArrow = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightArrow = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // change image every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Define the snap points for the bottom sheet
  const snapPoints = useMemo(() => ['30%', '90%', '120%',], []);

  const handleSheetChange = (index) => {
    // Check if the index is -1 (closed) and bring it back to the first snap point
    if (index === -1) {
      bottomSheetRef.current?.snapToIndex(0); // Change to desired index (0 = '25%')
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.boxcontainer}>
        <Image style={styles.box} source={item.pic} />
        <Text style={styles.headingtxt}>{item.heading}</Text>
        <Text style={styles.subtxt}>{item.subheading}</Text>
      </View>
    )
  }

  return (
    // Wrap the component in GestureHandlerRootView

    <BottomSheet
    style={{ backgroundColor: '#ffe6fe' }}
    ref={bottomSheetRef}
    index={0}
    snapPoints={snapPoints}
    onChange={handleSheetChange}
  >
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.carouselContainer}>
        {/* Left Arrow */}
        <TouchableOpacity style={styles.arrowLeft} onPress={handleLeftArrow}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>

        {/* Carousel */}
        <Carousel
          loop={true}
          width={width}
          height={200}
          autoPlay={true}
          scrollAnimationDuration={500}
          data={images}
          pagingEnabled={true}
          onSnapToItem={(index) => setCurrentIndex(index)}
          ref={carouselRef}
          renderItem={({ index }) => (
            <Image
              source={images[index]}
              style={styles.carouselImage}
              resizeMode="cover"
            />
          )}
        />

        {/* Right Arrow */}
        <TouchableOpacity style={styles.arrowRight} onPress={handleRightArrow}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View>
      {/* ----------------------------------------------------------------- */}
      <HorizontalProductsHome />
      <View style={{ flex: 1 }}>
        <Image source={require('../assets/HorizonImages/middlebanner.jpeg')} style={styles.middbanner} />
      </View>
      <View>
        <RecentlyViewed />
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 40 }}>
        <FlatList
          data={threeimages}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false} // Hide the scroll indicator
          contentContainerStyle={styles.flatListContainer} // Custom container styling
        />
      </View>
    </ScrollView>
  </BottomSheet>

  )
}

export default CarouselFlip

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ensures the container takes up full screen
    backgroundColor: '#ffe6fe',
  },
  contentContainer: {
    flex: 1,  // Allows for proper spacing inside the Bottom Sheet
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6fe',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#ffe6fe',
  },
  arrowLeft: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  arrowRight: {
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },
  arrowText: {
    fontSize: 40,
    color: '#000',
  },
  carouselImage: {
    width: width,
    height: 200,
  },
  middbanner: {
    height: 90,
    width: '100%',
    borderWidth: 3,
    borderColor: 'yellow'
  },
  boxcontainer: {

    width: 150, // Width of each box
    padding: 10, // Padding inside the box
    marginRight: 10, // Space between boxes
    backgroundColor: '#8507a1', // Background color of the box
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.3, // Shadow for iOS
    shadowRadius: 4, // Shadow for iOS
    elevation: 5, // Shadow for Android
    alignItems: 'center', // Center content inside each box
  },
  box: {
    height: 120,
    width: 120,
  },
  flatListContainer: {
    paddingHorizontal: 10, // Padding around the flatlist
  },
  subheading: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
  headingtxt: {
    color: 'white',
    fontSize: 15,

  },
  subtxt: {
    color: '#f6e511',
    fontWeight: '600',
    fontSize: 17,
  },
});
