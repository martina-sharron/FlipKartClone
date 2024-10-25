import { StyleSheet, View, Image } from 'react-native';
import React, { useEffect } from 'react';


const FlipLogo = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
     
      navigation.replace('BottomNav');  
    }, 2000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/Images/logo.png')} />
        
    </View>
  );
};

export default FlipLogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F74BA',
  },
  img: {
    width: 60,
    height: 60,
  },
});
