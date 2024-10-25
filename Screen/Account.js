import { StyleSheet, Text, View, Image, Button,ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NextPartAccount from '../Components/NextPartAccount';



const Account = () => {

  return (
    <ScrollView style={styles.container}>
      {/* First Container */}
      <View style={styles.firstContainer}>
        <Text style={styles.numberText}>Hey! martina sharron</Text>
        <View style={styles.imgContainer}>
          <Image style={styles.coinImage} source={require('../assets/AccountImages/coin.png')} />
          <Text style={styles.coinText}>0</Text>
        </View>
      </View>

      {/* Explore Plus Section */}
      <View style={styles.exploreplusContainer}>
        <Text style={styles.exploretxt}>Explore</Text>
        <Image source={require('../assets/AccountImages/fliplus.png')} style={{height:20,width:20}}/>
        <Text style={styles.plustxt}>Plus <Ionicons name="chevron-forward-outline" size={15} color="grey" /></Text>
      </View>

      {/* Box Container */}
      <View style={styles.BoxContainer}>
        <View style={styles.boxtxt}>
          <Image style={styles.imgclr} source={require('../assets/AccountImages/order.png')} />
          <Text style={styles.boxText}>Orders</Text>
        </View>
        <View style={styles.boxtxt}>
          <Image style={styles.imgclr} source={require('../assets/AccountImages/heart.png')} />
          <Text style={styles.boxText}>Wishlist</Text>
        </View>
        <View style={styles.boxtxt}>
          <Image style={styles.imgclr} source={require('../assets/AccountImages/coupon.png')} />
          <Text style={styles.boxText}>Coupons</Text>
        </View>
        <View style={styles.boxtxt}>
          <Image style={styles.imgclr} source={require('../assets/AccountImages/help.png')} />
          <Text style={styles.boxText}>Help center</Text>
        </View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.gap} />
        <View style={styles.line} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
        <Image
          source={require('../assets/AccountImages/mail.png')}
          style={styles.mailimage}
        />
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={styles.titleText}>Add/Verify your Email </Text>
          <Text style={styles.subtitleText}>Get latest updates of your orders</Text>
        </View>
        <View>
          <Button title='Update' onPress={() => { }} />
        </View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.gap} />
        <View style={styles.line} />
      </View>
      <View>
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700' }}>Credit Options</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Image source={(require('../assets/AccountImages/loan.png'))} style={styles.loanImage} />
        <View style={styles.textContainer}>
          <Text style={styles.loanText}>Cash loan up to ₹10,00,000</Text>
          <Text style={styles.subText}>100% Digital | Instant Approval</Text>
        </View>
        <View><Ionicons name="chevron-forward-outline" size={15} color="grey" style={styles.icon} /></View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.gap} />
        <View style={styles.line} />
      </View>
      <View>
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700' }}>Credit Score</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Image source={(require('../assets/AccountImages/score.png'))} style={styles.loanImage} />
        <View style={styles.textContainer}>
          <Text style={styles.loanText}>Free credit score check</Text>
          <Text style={styles.subText}>Get detailed credit report instantly</Text>
        </View>
        <View><Ionicons name="chevron-forward-outline" size={15} color="grey" style={styles.icon1} /></View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.gap} />
        <View style={styles.line} />
      </View>
      <View>
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700' }}>Notifications</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Image source={(require('../assets/AccountImages/noti.png'))} style={styles.loanImage} />
        <View style={styles.textContainer}>
          <Text style={styles.loanText}>Tap for latest updates and offers</Text>
        </View>
        <View><Ionicons name="chevron-forward-outline" size={15} color="grey" style={styles.icon2} /></View>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.gap} />
        <View style={styles.line} />
      </View>
      <View>
        <Text style={{fontSize:16,fontWeight:'600'}}>Sponsored</Text>
      </View>
      <Image source={(require('../assets/AccountImages/zaruk-transformed.jpeg'))} style={{height:250,width:'100%'}}/>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.gap} />
        <View style={styles.line} />
      </View>
      <View>
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '700' }}>Recently Viewed Stores</Text>
      </View>
      <View>
        <NextPartAccount />
      </View>
    </ScrollView>
  );
}

export default Account;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: 'white',
  },

  firstContainer: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imgContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    height: 40,
    width: 65,
    gap:5,
  },
  icon: {
    marginLeft: 100,
  },
  icon1: {
    marginLeft: 80,
  },
  icon2: {
    marginLeft: 60,
  },

  coinImage: {
    width: 35,
    height: 35,
    
    
  },
  coinText: {
    fontSize: 17,
    
  },
  loanText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
  },
  numberText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  exploreplusContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  exploretxt: {
    fontSize: 16,
    color: '#a9a9a9',
  },
  plustxt: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#0000e6',
    fontWeight: 'bold',
  },
  BoxContainer: {   
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  boxtxt: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    gap: 10,
    alignItems: 'center',
    width: '48%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  boxText: {
    fontSize: 16,
    fontWeight: '700'
  },
  imgclr: {
    tintColor: '#0000e6',
    height: 30,
    width: 30,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#d3d3d3',
  },
  gap: {
    height: 9,
  },
  lineContainer: {
    justifyContent: 'center',
    backgroundColor: '#fcfcfc',
  },
  mailimage: {
    width: 50,
    height: 50,
    transform: [{ skewX: '-20deg' }],
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 12,
    color: 'grey',
  },
  loanImage: {
    height: 45,
    width: 45,
    tintColor: '#0000e6',
  },
  textContainer: {
    textContainer: {
      flex: 1,
      marginLeft: 10,
    },
  }
});
