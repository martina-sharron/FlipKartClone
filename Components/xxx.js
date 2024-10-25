import { StyleSheet, Text, View, Image, FlatList,ScrollView } from 'react-native';
import React from 'react';
import MoreonFlipCatogories from './MoreonFlipCatogories';


const data = [
  { id: 1, image: require('../assets/CategoriesImage/bigbill.png'), title: 'Sale is Live' },
  { id: 2, image: require('../assets/CategoriesImage/express.png'), title: 'Express Store' },
  { id: 3, image: require('../assets/CategoriesImage/pocket.png'), title: 'Pocket Bazar' },
];

const threeimages = [
  {
    pic: require('../assets/HorizonImages/iron.png'),
    heading: 'Steam Iron',
  },
  {
    pic: require('../assets/HorizonImages/earbuds.jpg'),
    heading: 'True Wireless',
  },
  {
    pic: require('../assets/ExploreImages/handbg.jpg'),
    heading: 'Leather',
  },
  {
    pic: require('../assets/HorizonImages/iron.png'),
    heading: 'Steam Iron',
  },
  {
    pic: require('../assets/HorizonImages/earbuds.jpg'),
    heading: 'True Wireless',
  },
  {
    pic: require('../assets/ExploreImages/handbg.jpg'),
    heading: 'Leather',
  },
]

const renderItem = () => {
  return data.map((item) => (
    <View key={item.id} style={styles.item}>
      <Image source={item.image} style={styles.img} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  ));
};

const HoriItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.pic} style={styles.image} />
      <Text style={styles.heading}>{item.heading}</Text>
      <Text style={styles.subheading}>{item.subheading}</Text>
    </View>
  );
};

const Mobiles = () => (
  <View style={styles.item}>
    <Image source={require('../assets/CategoriesImage/coin.png')} style={styles.img} />
    <Text style={styles.itemText}>Mobiles</Text>
  </View>
);

const VerticalProductCategoryRight = () => {
  return (
    <View>
    <View >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Popular Store</Text>
        </View>

        <View style={styles.itemsContainer}>
          {renderItem()}
        </View>
      </View>
      <View style={styles.mobileContainer}>
        <Mobiles />
      </View>
      <View>
        <Text style={styles.recentxt}>Recently Viewed Stores</Text>
      </View>
      <View style={{ flexDirection: 'row',  justifyContent: 'flex-start', alignItems: 'flex-start', }}>
        <FlatList
          data={threeimages}
          renderItem={HoriItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={160}
        />
      </View>
      <View>
        <MoreonFlipCatogories />
      </View>
    </View>
    </View>
  );
};

export default VerticalProductCategoryRight;

const styles = StyleSheet.create({
  container: {
    right: 90,
    margin: 0,
  },
  headerContainer: {
    marginTop: 40,
    left: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mobileContainer: {
    alignItems: 'flex-start',
    right: 80,
  },
  item: {
    alignItems: 'flex-start',
    margin: 10,
  },
  recentxt:{
    fontSize:16,
    fontFamily:'VictorMono-SemiBold',
  },
  itemText: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  img: {
    height: 80,
    width: 80,
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    width: 150,
  },
  image: {
    height: 100,
    width: 138,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subheading: {
    fontSize: 14,
    color: '#666',
  },
  flatListContainer: {
    paddingHorizontal: 10,
    paddingEnd: 80, // Add this to compensate for right: 80
  },

});