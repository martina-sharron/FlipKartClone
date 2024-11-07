import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'
import VerticalProductCategory from '../Components/VerticalProductCategory'
import VerticalProductCategoryRight from '../Components/VerticalProductCategoryRight'


const Categories = () => {

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>All Categories</Text>
        </View>
        <View style={styles.imgcontainer}>
          <Image source={require('../assets/Images/search.png')} style={styles.img} />
          <Image source={require('../assets/Images/voice1.png')} style={styles.img} />
        </View>
      </View>
      {/* .......................................... */}
      <View style={styles.LeftRightContainer}>
        <View style={styles.leftSide}>
          <VerticalProductCategory />
        </View>
        <View style={styles.rightSide}>
          <VerticalProductCategoryRight />
        </View>
      </View>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  headercontainer: {
    padding:10,
    marginTop:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    
  },
  headerTextContainer: {
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'VictorMono-Bold',
    backgroundColor: 'white',
  },
  imgcontainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    gap: 25,
  },
  img: {
    height: 30,
    width: 30,
  },
  LeftRightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  leftSide: {
    flex: 1,
    marginRight: 5,
  },
  rightSide: {
    flex: 3,
    marginLeft: 5,
  },
})