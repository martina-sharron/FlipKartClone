import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useMemo, useState, useEffect } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
const { width } = Dimensions.get('window')
import Carousel from 'react-native-reanimated-carousel'
import HorizontalProductsHome from './HorizontalProductsHome'
import { FlatList } from 'react-native-gesture-handler'
import RecentlyViewed from './RecentlyViewed'



const images = [
  require('../assets/Images/flip1.jpg'),
  require('../assets/Images/flip2.jpg'),
  require('../assets/Images/flip3.jpg'),
  require('../assets/Images/flip4.png'),
  require('../assets/Images/flip5.png'),
]

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
  const carouselRef = useRef(null)

  const handleLeftArrow = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleRightArrow = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [])


  const snapPoints = useMemo(() => ['30%', '90%', '120%',], [])

  const handleSheetChange = (index) => {

    if (index === -1) {
      bottomSheetRef.current?.snapToIndex(0)
    }
  }

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


    <BottomSheet
      style={{ backgroundColor: '#ffe6fe' }}
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.carouselContainer}>

          <TouchableOpacity style={styles.arrowLeft} onPress={handleLeftArrow}>
            <Text style={styles.arrowText}>{"<"}</Text>
          </TouchableOpacity>


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
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </ScrollView>
    </BottomSheet>

  )
}

export default CarouselFlip

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6fe',
  },
  contentContainer: {
    flex: 1,
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

    width: 150,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#8507a1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  box: {
    height: 120,
    width: 120,
  },
  flatListContainer: {
    paddingHorizontal: 10,
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
})
