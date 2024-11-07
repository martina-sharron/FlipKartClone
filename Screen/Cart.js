import React, { useRef, useEffect } from 'react'
import { View, StyleSheet, Animated, Easing, Image, ScrollView, Text, Button, TouchableOpacity } from 'react-native'

const CartWithFallingProducts = () => {
  const cartMove = useRef(new Animated.Value(0)).current;
  const productFall1 = useRef(new Animated.Value(-150)).current
  const productFall2 = useRef(new Animated.Value(-150)).current
  const productOpacity1 = useRef(new Animated.Value(1)).current
  const productOpacity2 = useRef(new Animated.Value(1)).current

  useEffect(() => {

    const cartAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(cartMove, {
          toValue: 10,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(cartMove, {
          toValue: -10,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    )


    const productAnimations = [

      Animated.sequence([
        Animated.timing(productFall1, {
          toValue: 150,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(productOpacity1, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(productFall1, {
          toValue: -150,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(productOpacity1, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),


      Animated.sequence([
        Animated.timing(productFall2, {
          toValue: 150,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(productOpacity2, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(productFall2, {
          toValue: -150,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(productOpacity2, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ]


    cartAnimation.start()
    Animated.loop(
      Animated.stagger(1000, productAnimations)
    ).start()

    return () => {
      cartAnimation.stop()
    }
  }, [cartMove, productFall1, productFall2, productOpacity1, productOpacity2])

  return (
    <ScrollView style={styles.scrollContainer}>

      <View style={styles.container1}>

        <Animated.View
          style={[
            styles.product,
            {
              transform: [{ translateY: productFall1 }],
              opacity: productOpacity1,
            },
          ]}
        >
          <Image
            source={require('../assets/AccountImages/product.png')}
            style={styles.productImage}
          />
        </Animated.View>


        <Animated.View
          style={[
            styles.product,
            {
              transform: [{ translateY: productFall2 }],
              opacity: productOpacity2,
            },
          ]}
        >
          <Image
            source={require('../assets/AccountImages/pine.png')}
            style={styles.productImage}
          />
        </Animated.View>


        <Animated.View
          style={[
            styles.cart,
            {
              transform: [{ translateX: cartMove }],
            },
          ]}
        >
          <Image
            source={require('../assets/AccountImages/cart.png')}
            style={styles.cartImage}
          />
        </Animated.View>


        <View style={styles.container2}>

        </View>
      </View>
      <View>
        <Text style={styles.empty}>Your Cart is empty!</Text>
        <Button title='Shop now' />
      </View>
    </ScrollView>
  );
};

export default CartWithFallingProducts;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    flex: 1,
    marginVertical: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container2: {
    flex: 2,
  },
  product: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  productImage: {
    width: 50,
    height: 50,
  },
  cart: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartImage: {
    width: 200,
    height: 200,
  },
  empty: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
  }
});
