import { StyleSheet, Image, View, Text } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import ListofProductsExplore from '../Components/ListofProductsExplore';


const Explore = () => {
  return (
    <View style={styles.container}>
      {/* Wrapper for Search and Icons */}
      <View style={styles.row}>

        {/* Explore TextInput on the Left */}
        <View style={styles.exploreContainer}>
          <TextInput
          
            placeholder="Explore"
            right={
              <TextInput.Icon
                icon={() => (
                  <Image
                    source={require('../assets/Images/search.png')}
                    style={styles.img}
                  />
                )}
              />
            }
            style={styles.exploreInput}
            underlineColor="transparent"  // Removes the underline
          />
        </View>

        {/* Icons on the Right */}
        <View style={styles.iconsContainer}>
          <TextInput
            right={
              <TextInput.Icon
                icon={() => (
                  <Image
                    source={require('../assets/Images/voice1.png')}
                    style={styles.img}
                  />
                )}
              />
            }
            style={styles.iconInput}
            underlineColor="transparent"  // Removes the underline
          />
          <TextInput
            right={
              <TextInput.Icon
                icon={() => (
                  <Image
                    source={require('../assets/Images/camera.png')}
                    style={styles.img}
                  />
                )}
              />
            }
            style={styles.iconInput}
            underlineColor="transparent"  // Removes the underline
          />
          <TextInput
            right={
              <TextInput.Icon
                icon={() => (
                  <Image
                    source={require('../assets/Images/cart.png')}
                    style={styles.img}
                  />
                )}
              />
            }
            style={styles.iconInput}
            underlineColor="transparent"  // Removes the underline
          />
        </View>
      </View>
      <View>
        <Text style={{fontSize:22,fontWeight:'bold'}}>Products For You </Text>
      </View>
      {/* Product List */}
      <View style={styles.productListContainer}>
        <ListofProductsExplore />
      </View>


    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'// Add some padding for better layout
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exploreContainer: {
    flex: 2, // More space for the explore input
    marginRight: 10,
     // Space between explore and icons
  },
  iconsContainer: {
    flexDirection: 'row',
    flex: 1, // Less space for icons
    justifyContent: 'space-between',
  },
  exploreInput: {
    backgroundColor: 'white',
  },
  iconInput: {
    width: 35, // Adjust width to fit icons better
    backgroundColor: 'white',
    marginHorizontal: 5, // Space between each icon
  },
  img: {
    height: 30,
    width: 30,
  },
  productListContainer: {
    flex: 1,
    
  }
});
