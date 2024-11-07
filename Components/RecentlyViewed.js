import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react';

const threeimages = [
  { pic: require('../assets/Images/watch.png'), heading: 'Branded' },
  { pic: require('../assets/Images/bluetooth.png'), heading: 'True Wireless' },
  { pic: require('../assets/Images/grocery1.png'), heading: 'Grocery' },
  { pic: require('../assets/Images/grocery1.png'), heading: 'Grocery' },
  { pic: require('../assets/HorizonImages/earbuds.jpg'), heading: 'True Wireless' },
  { pic: require('../assets/ExploreImages/handbg.jpg'), heading: 'Leather' },
];

const HoriItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.pic} style={styles.image} />
      <Text style={styles.heading}>{item.heading}</Text>
    </View>
  );
};

const RecentlyViewed = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.recentxt}>Recently Viewed Stores</Text>
      <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'center' }}>
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
    </View>
  );
};

export default RecentlyViewed;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
    left: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemsContainer: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 20,
  },
  card: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    width: 140,
  },
  image: {
    height: 100,
    width: 110,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  heading: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
  },
  subheading: {
    fontSize: 14,
    color: '#666',
  },
  recentxt: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 23,
  },
});
