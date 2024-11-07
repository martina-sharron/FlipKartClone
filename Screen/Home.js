import { Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '../Styling/Style'
import { Switch, TextInput } from 'react-native-paper'
import LottieView from 'lottie-react-native'
import CarouselFlip from '../Components/Carousel'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


export default function Home() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const placeholders = ['Shoes', 'Mobile', 'Watch', 'HomeApp']

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
    }, 500)
    return () => clearInterval(interval)
  }, [placeholders.length])


  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.cards}>
        {/* Lottie */}
        <LottieView
          source={require('../assets/JSON/Party.json')}
          autoPlay
          loop
          style={styles.sprinkleStars}
        />

        <View style={styles.card1}>
          <Image
            style={styles.images}
            source={require('../assets/Images/logo.png')}
          />
          <Text style={styles.textStyle1}>Flipkart</Text>
        </View>

        <View style={styles.card2}>
          <Image
            style={styles.images}
            source={require('../assets/Images/grocery.png')}
          />
          <Text style={styles.textStyle2}>Grocery</Text>
        </View>
      </View>


      <View style={styles.secondheader}>
        <View style={styles.SwitchView}>
          <Text style={{ color: '#848482', fontSize: 16 }}>Brand Mall</Text>
          <Switch />
        </View>

        <View style={styles.input}>
          <TextInput
            style={styles.searchInput}
            placeholder={placeholders[placeholderIndex]}
            left={
              <TextInput.Icon
                icon={() => (
                  <Image
                    style={styles.searchIcon}
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/128/17813/17813640.png' }}
                  />
                )}
              />
            }
            right={
              <TextInput.Icon
                icon={() => (
                  <View style={styles.iconGroup}>
                    <Image
                      style={styles.iconimg}
                      source={require('../assets/Images/voice1.png')}
                    />
                  </View>
                )}
              />
            }
          />
        </View>
      </View>


      <View style={styles.saleSection}>
        <Image
          style={styles.saleBanner}
          source={require('../assets/Images/alya1.jpeg')}
        />
      </View>
      <CarouselFlip />
    </GestureHandlerRootView>
  )
}
