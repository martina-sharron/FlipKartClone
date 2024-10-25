import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Explore from '../Screen/Explore';
import Categories from '../Screen/Categories';
import Account from '../Screen/Account';
import Cart from '../Screen/Cart';
import { Image } from 'react-native';
import { fontConfig } from 'react-native-paper/lib/typescript/styles/fonts';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff', height: 60 }, // Customize tab bar style
      }}
    >
      <Tab.Screen
        options={{
          
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1659/1659112.png',
              }}
              style={{
                height: 26,
                width: 26,
                tintColor: focused ? '#1F74BA' : '#000000', // Change color on focus
              }}
            />
          ),
        }}
        name="Home" 
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/4229/4229877.png',
              }}
              style={{
                height: 26,
                width: 26,
                tintColor: focused ? '#1F74BA' : 'black',
              }}
            />
          ),
        }}
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/4250/4250099.png',
              }}
              style={{
                height: 26,
                width: 26,
                tintColor: focused ? '#1F74BA' : 'black',
              }}
            />
          ),
        }}
        name="Categories"
        component={Categories}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1144/1144760.png',
              }}
              style={{
                height: 26,
                width: 26,
                tintColor: focused ? '#1F74BA' : 'black',
              }}
            />
          ),
        }}
        name="Account"
        component={Account}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1170/1170678.png',
              }}
              style={{
                height: 26,
                width: 26,
                tintColor: focused ? '#1F74BA' : 'black',
              }}
            />
          ),
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
}