import React, { useMemo, useRef } from 'react';
import { View, Text, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const { width } = Dimensions.get('window');

const products = [
  { id: '1', name: 'Product 1', price: '₹299', imageUrl: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Product 2', price: '₹399', imageUrl: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Product 3', price: '₹499', imageUrl: 'https://via.placeholder.com/150' },
  { id: '4', name: 'Product 4', price: '₹599', imageUrl: 'https://via.placeholder.com/150' },
  { id: '5', name: 'Product 1', price: '₹299', imageUrl: 'https://via.placeholder.com/150' },
  { id: '6', name: 'Product 2', price: '₹399', imageUrl: 'https://via.placeholder.com/150' },
  { id: '7', name: 'Product 3', price: '₹499', imageUrl: 'https://via.placeholder.com/150' },
  { id: '8', name: 'Product 4', price: '₹599', imageUrl: 'https://via.placeholder.com/150' },
];

const BottomSheetComponent = () => {
  const bottomSheetRef = useRef(null);

  // Snap points for how much the bottom sheet expands
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // Render individual product items for the carousel
  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.carouselImage} />
      <Text style={styles.carouselText}>{item.name}</Text>
    </View>
  );

  // Render product items for the product list inside the bottom sheet
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View style={styles.bottomSheetContent}>
          <Text style={styles.heading}>Featured Products</Text>

          {/* Carousel */}
          <FlatList
            data={products}
            horizontal
            autoPlay={true}
            renderItem={renderCarouselItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            style={styles.carousel}
            mode="parallax"
              modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
              }}
          />

          {/* Scrollable product list */}
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.productList}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f8f8f8',
  },
  bottomSheetContent: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  carousel: {
    marginBottom: 20,
  },
  carouselItem: {
    width: width * 0.7,
    marginRight: 10,
  },
  carouselImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  carouselText: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  productList: {
    paddingBottom: 100, // to avoid cutting off at the bottom
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3, // For Android shadow
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  productInfo: {
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#ff3d00', // Red for the price
  },
});

export default BottomSheetComponent;
