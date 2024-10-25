import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import MoreonFlipCatogories from './MoreonFlipCatogories';

const data = [
  { id: 1, image: require('../assets/CategoriesImage/bigbill.png'), title: 'Sale is Live' },
  { id: 2, image: require('../assets/CategoriesImage/express.png'), title: 'Express Store' },
  { id: 3, image: require('../assets/CategoriesImage/pocket.png'), title: 'Pocket Bazar' },
  { id: 4, image: require('../assets/CategoriesImage/coin.png'), title: 'Mobiles' },

]
const threeimages = [
  {
    pic: require('../assets/HorizonImages/iron.png'), heading: 'Steam Iron',
  },
  {
    pic: require('../assets/HorizonImages/earbuds.jpg'), heading: 'True Wireless',
  },
  {
    pic: require('../assets/ExploreImages/handbg.jpg'), heading: 'Leather',
  },
  {
    pic: require('../assets/HorizonImages/iron.png'), heading: 'Steam Iron',
  },
  {
    pic: require('../assets/HorizonImages/earbuds.jpg'), heading: 'True Wireless',
  },
  {
    pic: require('../assets/ExploreImages/handbg.jpg'), heading: 'Leather',
  },
]
const TopRender = () => {
  return data.map((item) => (
    <View key={item.id} >
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
    </View>
  );
};

const VerticalProductCategoryRight = () => {
  return (
    <ScrollView>
      <View>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Popular Store</Text>
          </View>
          <View style={styles.itemsContainer}>
            {TopRender()}
          </View>
        </View>
      </View>
      <View style={{ marginVertical: 20, }}>
        <Text style={styles.recentxt}>Recently Viewed Stores</Text>
      </View>
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
      <View>
        <MoreonFlipCatogories />
      </View>
    </ScrollView>
  )
}

export default VerticalProductCategoryRight

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
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    marginTop: 10,
  },
  subheading: {
    fontSize: 14,
    color: '#666',
  },
  recentxt: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 23,
  }
})