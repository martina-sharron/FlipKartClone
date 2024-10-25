import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const data = [
  { id: 1, image: require('../assets/CategoriesImage/beauty.jpg'), name: 'cosmetics' },
  { id: 2, image: require('../assets/CategoriesImage/lugg.png'), name: 'Luggage' },
  { id: 3, image: require('../assets/CategoriesImage/headphone.png'), name: 'Headphones' },
  { id: 4, image: require('../assets/CategoriesImage/sklbag.png'), name: 'Kids Bags' },
  { id: 5, image: require('../assets/CategoriesImage/shoes.png'), name: 'Shoes' },
  { id: 6, image: require('../assets/CategoriesImage/bund.png'), name: 'Accessories' },
  { id: 7, image: require('../assets/CategoriesImage/coolers.png'), name: 'Sunglasses' },
];
const Tata = [
    { id: 1, image: require('../assets/CategoriesImage/flipupi.png'), name: 'Flipkart UPI' },
    { id: 2, image: require('../assets/CategoriesImage/supercoin.png'), name: 'Supercoin' },
    { id: 3, image: require('../assets/CategoriesImage/coupans.png'), name: 'Coupans' },
    { id: 4, image: require('../assets/CategoriesImage/bills.png'), name: 'Bills' },
    { id: 5, image: require('../assets/CategoriesImage/pay.png'), name: 'Flipkart Pay' },
    { id: 6, image: require('../assets/CategoriesImage/loan.png'), name: 'Personal Loan' },
    { id: 7, image: require('../assets/CategoriesImage/credit.png'), name: 'Credit' },
    { id: 8, image: require('../assets/CategoriesImage/firedrop.png'), name: 'Firedrop' },
    { id: 10, image: require('../assets/CategoriesImage/sealer.png'), name: 'Seller' },
    { id: 9, image: require('../assets/CategoriesImage/liveshop.png'), name: 'Liveshop+' },
    
  ];

const FlipItem = () => {
  return data.map((item) => (
    <View key={item.id} style={styles.itemContainer}>
      <Image source={item.image} style={styles.img} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  ));
};
const TriedItem = () => {
    return Tata.map((item) => (
      <View key={item.id} style={styles.itemContainer}>
        <Image source={item.image} style={styles.img} />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    ));
  };

const MoreonFlipCatogories = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>More On Flipkart</Text>
      </View>
      <View style={styles.Morecontainer}>
        {FlipItem()}
      </View>
      <View>
        <Text style={styles.headerText}>Have you tried?</Text>
      </View>
      <View style={styles.Morecontainer}>
        {TriedItem()}
      </View>
    </View>
  );
};

export default MoreonFlipCatogories;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 17,
    fontFamily:'Lato-Regular'
  },
  Morecontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Ensure spacing between items
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'white',  
  },
  itemText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
  },
});
