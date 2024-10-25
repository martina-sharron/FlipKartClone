import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fef1c2',
    
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    
    
  },
  card1: {
    flexDirection: 'row',
    height: 60,
    width: 195,
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: 50,
    backgroundColor: '#4356f9',
    margin: 5,
  },
card2: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 60,
    width: 195,
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: 50,
    backgroundColor: 'white',
    borderColor: 'white',
    margin: 5,

},
  images: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  textStyle1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    fontStyle:'italic'
  },
  textStyle2: {
    fontSize: 20,
    color: '#777777',
    fontWeight: 'bold',
    fontStyle:'italic'
  },
  secondheader: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
},
SwitchView: {
    flexWrap: 'wrap'
},
  brandMallText: {
    fontSize: 16,
    color: '#848482',
  },
  input: {
    flexDirection: 'row',
  },
  searchInput: {
    width:290,
    fontWeight: '600',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
    
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconimg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  saleSection: {
    marginVertical: 20,
  },
 
  saleBanner: {
    width: 400,
    height: 380,
    borderRadius: 10,
    marginBottom: 20,
  },
  sprinkleStars: {
    position: 'absolute',
    width: 300,
    height: 300, 
    zIndex: 1, 
  }
    
});

