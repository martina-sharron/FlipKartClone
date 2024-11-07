import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import ListofProductsExplore from '../Components/ListofProductsExplore'


const Explore = () => {
  return (
    <View style={styles.container}>

      <View style={styles.row}>


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
            underlineColor="transparent"
          />
        </View>


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
            underlineColor="transparent"
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
            underlineColor="transparent"
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
            underlineColor="transparent"
          />
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Products For You </Text>
      </View>

      <View style={styles.productListContainer}>
        <ListofProductsExplore />
      </View>


    </View>
  )
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exploreContainer: {
    flex: 2,
    marginRight: 10,

  },
  iconsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  exploreInput: {
    backgroundColor: 'white',
  },
  iconInput: {
    width: 35,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  img: {
    height: 30,
    width: 30,
  },
  productListContainer: {
    flex: 1,
  }
});
