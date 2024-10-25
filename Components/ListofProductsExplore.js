import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const ListofProductsExplore = () => {
    const List = [
        {
            id: 1,
            image: (require('../assets/ExploreImages/blacktop.jpg')),
            stikeprice: '₹100',
            price:450,
            name:'AR-PlUS',
            title: 'Casual Butterfly',
            reviews: '4',
            offer:'66% off',
        },
        {
            id: 2,
            image: (require('../assets/ExploreImages/blackTsht.jpg')),
            stikeprice: '$100',
            price:450,
            name:'SUPERCOMNET',
            title: 'Smartees',
            reviews: '3',
            offer:'73% off',
        },
        {
            id: 3,
            image: (require('../assets/ExploreImages/cover.jpg')),
            stikeprice: '$100',
            price:450,
            name:'RETAILNET',
            title: 'WaterProof',
            reviews: '4',
            offer:'77% off',
            
        },
        {
            id: 4,
            image: (require('../assets/ExploreImages/Gionee.jpeg')),
            stikeprice: '$100',
            price:450,
            name:'TECH-INDIA',
            title: 'Samsung Galaxy A14',
            reviews: '5',
            offer:'71% off',
        },
        {
            id: 5,
            image: (require('../assets/ExploreImages/grocery.jpg')),
            stikeprice: '$100',
            price:450,
            name:'TRENDZONLINE',
            title: 'Groceries',
            reviews: '3',
            offer:'75% off',
        },
        {
            id: 6,
            image: (require('../assets/ExploreImages/handbg.jpg')),
            stikeprice: '$100',
            price:450,
            name:'OMNITRENDZ',
            title: 'Women Pink Leather',
            reviews: '4',
            offer:'73% off',
        },
        {
            id: 7,
            image: (require('../assets/ExploreImages/kurta.jpg')),
            stikeprice: '$100',
            price:450,
            name:'BESTDEALS4U',
            title: 'Sopani',
            reviews: '5',
            offer:'73% off',
        },
        {
            id: 8,
            image: (require('../assets/ExploreImages/laptop.jpeg')),
            stikeprice: '$100',
            price:450,
            name:'DIGITECHCORP',
            title: 'Asus Vivobook 15',
            reviews: '4',
            offer:'78% off',
        },
        {
            id: 9,
            image: (require('../assets/ExploreImages/Maxi.jpeg')),
            stikeprice: '$100',
            price:450,
            name:'RETAILNET',
            title: 'Tokyo Talkies',
            reviews: '3',
            offer:'75% off',
        },
        {
            id: 10,
            image: (require('../assets/ExploreImages/saree.jpg')),
            stikeprice: '$100',
            price:450,
            name:'NEWGENRETAIL',
            title: 'Yashika',
            reviews: '4',
            offer:'73% off',
        },
        {
            id: 11,
            image: (require('../assets/ExploreImages/stick.jpg')),
            stikeprice: '$100',
            price:450,
            name:'FASHIONBAY',
            title: 'Selfie',
            reviews: '3',
            offer:'72% off',
        },
        {
            id: 12,
            image: (require('../assets/ExploreImages/sunglas.jpeg')),
            stikeprice: '$100',
            price:450,
            name:'VINCENT CHASE',
            title: 'Roadway',
            reviews: '2',
            offer:'71% off',
        },
    ]

    

    const renderItem = ({ item }) => {
        return (
          <TouchableOpacity style={styles.productItem} activeOpacity={0.8}>
            <Image style={styles.productImage} source={item.image} />
            <Text style={styles.productname}>{item.name}</Text>
            <Text style={styles.productTitle}>{item.title}</Text>
            <View style={styles.priceContainer}>
            <Text style={styles.productStrikePrice}>{item.stikeprice}</Text>
            <Text style={styles.offerPrice}>{item.price}</Text>
           </View>
           <Text style={styles.priceoffer}>{(item.offer)}</Text>
            
          </TouchableOpacity>
        );
      };
    
      return (
        <View style={styles.container}>
          <FlatList
            data={List}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}  // To render items in two columns
            columnWrapperStyle={styles.row}  // For proper spacing between columns
          />
        </View>
      );
    };
    
    export default ListofProductsExplore;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop:20,
        backgroundColor: '#f8f8f8',
      },
      row: {
        justifyContent: 'space-between',
      },
      productItem: {
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#d3d3d3',
        borderRadius: 10,
        marginTop:15,
        padding: 10,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, // Shadow for Android
      },
      productImage: {
        width: 170,  // Adjusted for grid size
        height: 170,
        resizeMode: 'contain',
        marginBottom: 10,
      },
      productTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
      },
      priceContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
        
      },
      productStrikePrice: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold',
        marginVertical: 5,
        textDecorationLine:'line-through'
      },
      offerPrice: {
        fontSize: 16,
        color: 'ccc', // Red for offer price
        fontWeight: 'bold',
      },
      productname:{
        fontSize:18,
        fontWeight:'900',
      },
      priceoffer:{
        fontSize: 16,
        color:'#059e12',
        fontWeight:'600'
      },
      productReviews: {
        fontSize: 12,
        color: '#555',
      },
    });