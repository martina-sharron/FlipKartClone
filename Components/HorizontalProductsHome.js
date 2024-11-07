import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const { width } = Dimensions.get('window');

// Sample Data (24 items)
const data = [
  { id: 1, image: require('../assets/HorizonImages/iphone.png'), title: 'Mobile' },
  { id: 2, image: require('../assets/HorizonImages/qrcode.png'), title: 'Scan & Pay' },
  { id: 3, image: require('../assets/HorizonImages/watch.png'), title: 'Watch' },
  { id: 4, image: require('../assets/HorizonImages/fashion.png'), title: 'Fashion' },
  { id: 5, image: require('../assets/HorizonImages/toys.png'), title: 'Toys' },
  { id: 6, image: require('../assets/HorizonImages/bikes.png'), title: 'Bikes' },
  { id: 7, image: require('../assets/HorizonImages/sports.png'), title: 'Sports' },
  { id: 8, image: require('../assets/HorizonImages/grocery.png'), title: 'Groceries' },
  { id: 9, image: require('../assets/HorizonImages/tv.png'), title: 'Television' },
  { id: 10, image: require('../assets/HorizonImages/furniture.png'), title: 'Furniture' },
  { id: 11, image: require('../assets/HorizonImages/cosmetics.png'), title: 'Cosmetics' },
  { id: 12, image: require('../assets/HorizonImages/travel.png'), title: 'Travel Bags' },
  { id: 13, image: require('../assets/HorizonImages/home.png'), title: 'Home' },
  { id: 14, image: require('../assets/HorizonImages/food.png'), title: 'Food' },
  { id: 15, image: require('../assets/HorizonImages/coin.png'), title: 'Supercoin' },
  { id: 16, image: require('../assets/HorizonImages/cash.png'), title: 'Cash Loans' },
  { id: 17, image: require('../assets/HorizonImages/flipay.png'), title: 'Flipkart Pay' },
  { id: 18, image: require('../assets/HorizonImages/homeapp.png'), title: 'Appliance' },
  { id: 19, image: require('../assets/HorizonImages/iphone.png'), title: 'Battery' },
  { id: 20, image: require('../assets/HorizonImages/iphone.png'), title: 'Hard Drive' },

];

const HorizontalProductsHome = () => {

  const renderItems = () => {
    return data.map((item) => (
      <View key={item.id} style={styles.itemContainer}>

        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    ))
  }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.itemWrapper}>{renderItems()}</View>
    </ScrollView>
  )
}

export default HorizontalProductsHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#f9edf8',
    gap: 20,

  },
  itemWrapper: {
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width * 2,
    backgroundColor: '#f9edf8',

  },
  itemContainer: {
    width: width / 6,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f9edf8',



  },
  itemImage: {
    width: 60,
    height: 60,
    borderWidth: 1,
    backgroundColor: '#e6a7fb',
    borderRadius: 20,

    resizeMode: 'cover',
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});