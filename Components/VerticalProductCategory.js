import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native'
import React from 'react'

const data = [
  { id: 21, image: require('../assets/CategoriesImage/bag.png'), title: 'For you' },
  { id: 1, image: require('../assets/HorizonImages/iphone.png'), title: 'Mobile' },
  { id: 4, image: require('../assets/HorizonImages/fashion.png'), title: 'Fashion' },
  { id: 9, image: require('../assets/HorizonImages/tv.png'), title: 'Electronics' },
  { id: 2, image: require('../assets/CategoriesImage/gadgets.png'), title: 'Gadgets' },
  { id: 5, image: require('../assets/HorizonImages/toys.png'), title: 'Toys' },
  { id: 10, image: require('../assets/HorizonImages/furniture.png'), title: 'Furniture' },
  { id: 11, image: require('../assets/HorizonImages/cosmetics.png'), title: 'Cosmetics' },
  { id: 3, image: require('../assets/HorizonImages/watch.png'), title: 'Watch' },
  { id: 20, image: require('../assets/HorizonImages/medicine.png'), title: 'Medicine' },
  { id: 12, image: require('../assets/HorizonImages/travel.png'), title: 'Travel' },
  { id: 15, image: require('../assets/HorizonImages/coin.png'), title: 'Supercoin' },
  { id: 6, image: require('../assets/HorizonImages/bikes.png'), title: 'Bikes' },
  { id: 17, image: require('../assets/HorizonImages/flipay.png'), title: 'Gift Cards' },
  { id: 7, image: require('../assets/HorizonImages/sports.png'), title: 'Sports' },
  { id: 8, image: require('../assets/HorizonImages/grocery.png'), title: 'Groceries' },
  { id: 13, image: require('../assets/HorizonImages/home.png'), title: 'Home' },
  { id: 14, image: require('../assets/HorizonImages/food.png'), title: 'Food' },
  { id: 16, image: require('../assets/HorizonImages/cash.png'), title: 'Cash Loans' },
  { id: 18, image: require('../assets/HorizonImages/homeapp.png'), title: 'Appliance' },
  { id: 19, image: require('../assets/HorizonImages/wash.png'), title: 'Washing Machine' },

];

const Vertical = () => {
  const renderItem = () => {
    return data.map((item) => (
      <View
        key={item.id}
        style={[
          styles.container,
          item.id === 21 && styles.specialContainer
        ]}>
        <Image
          style={[
            styles.imagecont,
            item.id === 21 && styles.specialImage
          ]}
          source={item.image}
        />
        <Text
          style={[
            styles.titleText,
            item.id === 21 && styles.specialText
          ]}>
          {item.title}
        </Text>
        <View
          style={[
            styles.horizontalLine,
            item.id === 21 && styles.specialLine
          ]}
        />
      </View>
    ));
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View>{renderItem()}</View>
    </ScrollView>
  );
}

export default Vertical;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,

  },
  imagecont: {
    height: 60,
    width: 60,
  },
  horizontalLine: {
    height: 2,
    backgroundColor: '#c2c2c2',
    width: 80,
    marginTop: 5,
  },
  titleText: {
    color: '#000',
    marginTop: 5,
  },


  specialContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  specialImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  specialText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  specialLine: {
    backgroundColor: 'none'
  },
});
