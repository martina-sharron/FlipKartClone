import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Image, ScrollView, Text, Button, TouchableOpacity } from 'react-native';

const CartWithFallingProducts = () => {
  const cartMove = useRef(new Animated.Value(0)).current; // Horizontal cart movement
  const productFall1 = useRef(new Animated.Value(-150)).current; // Vertical product falling for product 1
  const productFall2 = useRef(new Animated.Value(-150)).current; // Vertical product falling for product 2
  const productOpacity1 = useRef(new Animated.Value(1)).current; // Opacity for product 1
  const productOpacity2 = useRef(new Animated.Value(1)).current; // Opacity for product 2

  useEffect(() => {
    // Move the cart back and forth horizontally
    const cartAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(cartMove, {
          toValue: 10, // Move to the right
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(cartMove, {
          toValue: -10, // Move to the left
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );

    // Handle falling animation for both products
    const productAnimations = [
      // Product 1 falling and hiding
      Animated.sequence([
        Animated.timing(productFall1, {
          toValue: 150, // Fall into the cart
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(productOpacity1, {
          toValue: 0, // Hide the product after falling
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(productFall1, {
          toValue: -150, // Reset product position for the next fall
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(productOpacity1, {
          toValue: 1, // Make the product visible again
          duration: 0,
          useNativeDriver: true,
        }),
      ]),

      // Product 2 falling and hiding
      Animated.sequence([
        Animated.timing(productFall2, {
          toValue: 150, // Fall into the cart
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(productOpacity2, {
          toValue: 0, // Hide the product after falling
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(productFall2, {
          toValue: -150, // Reset product position for the next fall
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(productOpacity2, {
          toValue: 1, // Make the product visible again
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ];

    // Start both the cart animation and product animations
    cartAnimation.start();
    Animated.loop(
      Animated.stagger(1000, productAnimations)
    ).start();

    return () => {
      cartAnimation.stop(); // Clean up animations on unmount
    };
  }, [cartMove, productFall1, productFall2, productOpacity1, productOpacity2]);

  return (
    <ScrollView style={styles.scrollContainer}>
      
      <View style={styles.container1}>
        {/* Falling product 1 */}
        <Animated.View
          style={[
            styles.product,
            {
              transform: [{ translateY: productFall1 }], // Falling effect for product 1
              opacity: productOpacity1, // Control product opacity for product 1
            },
          ]}
        >
          <Image
            source={require('../assets/AccountImages/product.png')} // Your product 1 image
            style={styles.productImage}
          />
        </Animated.View>

        {/* Falling product 2 */}
        <Animated.View
          style={[
            styles.product,
            {
              transform: [{ translateY: productFall2 }], // Falling effect for product 2
              opacity: productOpacity2, // Control product opacity for product 2
            },
          ]}
        >
          <Image
            source={require('../assets/AccountImages/pine.png')} // Your product 2 image
            style={styles.productImage}
          />
        </Animated.View>

        {/* Cart */}
        <Animated.View
          style={[
            styles.cart,
            {
              transform: [{ translateX: cartMove }], // Horizontal cart movement
            },
          ]}
        >
          <Image
            source={require('../assets/AccountImages/cart.png')} // Your cart image
            style={styles.cartImage}
          />
        </Animated.View>

        {/* Additional Components Container */}
        <View style={styles.container2}>
          {/* Add additional components here */}
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
    justifyContent: 'flex-end', // Align items to the bottom
    alignItems: 'center',
  },
  container2: {
    flex: 2, // Keep this for additional components
  },
  product: {
    position: 'absolute',
    top: 0,
    zIndex: 1, // Ensure product falls above the cart
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
