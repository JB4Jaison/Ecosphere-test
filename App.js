import * as React from 'react';
import { Text, View, Div, SafeAreaView} from 'react-native';
// import { Ionicons, FontAwesome } from '@expo/vector-icons';
// import { Icons as Ionicons} from 'react-native-ionicons';
import Icon from '@expo/vector-icons/FontAwesome';
// import {Icon as Ionicons} from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CameraPage from './screens/CameraScreen';
import something from './categoriesIn.json';
import HomeActivity from './screens/HomeScreen';
import SearchPage from './screens/SearchScreen';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

// function HomeScreen() {
//   return (
//     <SafeAreaView style= { { flex : 1 } }>
//     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//       {something.map((postDetail, index) => {
//         return <Text> {postDetail.Categories} </Text>
//       })}

//     </View>
//     </SafeAreaView >
//   );
// }

// function SettingsScreen() {
//   return (
//     <SafeAreaView style= { { flex : 1 } }>
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>This will be changed to camera soon!!</Text>
//     </View>
//     </SafeAreaView >
//   );
// }

// const Tab = createBottomTabNavigator();

const Tab = createMaterialTopTabNavigator();

// export default function App() {
//   return (
//     <SafeAreaView style= { { flex : 1 } }>
//     <NavigationContainer>

//       <Tab.Navigator
//         tabBarPosition = 'bottom'
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color}) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-folder' : 'ios-folder';
//             }
//             else if (route.name === 'Camera') {
//               iconName = focused ? 'ios-camera' : 'ios-camera';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size = { 24 } color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//           showIcon : true
//         }}
      
//       >
//         <Tab.Screen name="Home" component={SearchPage} />
//         <Tab.Screen name="Settings" component={HomeActivity} />
//         <Tab.Screen name="Camera" component={CameraPage} />
//       </Tab.Navigator>
 
//     </NavigationContainer>
//     </SafeAreaView>
   
//   );
// }

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false,
//   };

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <SafeAreaView style= { { flex : 1 } }>
//         <NavigationContainer>
    
//           <Tab.Navigator
//             tabBarPosition = 'bottom'
//             screenOptions={({ route }) => ({
//               tabBarIcon: ({ focused, color}) => {
//                 let iconName;
    
//                 if (route.name === 'Home') {
//                   iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//                 } else if (route.name === 'Settings') {
//                   iconName = focused ? 'ios-folder' : 'ios-folder';
//                 }
//                 else if (route.name === 'Camera') {
//                   iconName = focused ? 'ios-camera' : 'ios-camera';
//                 }
    
//                 // You can return any component that you like here!
//                 return <Icon name={iconName} size = { 24 } color={color} />;
//               },
//             })}
//             tabBarOptions={{
//               activeTintColor: 'tomato',
//               inactiveTintColor: 'gray',
//               showIcon : true
//             }}
          
//           >
//             <Tab.Screen name="Home" component={SearchPage} />
//             <Tab.Screen name="Settings" component={HomeActivity} />
//             <Tab.Screen name="Camera" component={CameraPage} />
//           </Tab.Navigator>
     
//         </NavigationContainer>
//         </SafeAreaView>
       
    
//       );
//     }
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([
//       Font.loadAsync({
//         // This is the font that we are using for our tab bar
//         // 'Ionicons': require('./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
//         'FontAwesome': require('./assets/fonts/FontAwesome.ttf')       
//       }),
//     ]);
//   };

//   _handleLoadingError = error => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
// }

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [require('./assets/images/icon.png')],
        fonts: [
          Ionicons.font,
          FontAwesome.font
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
                <SafeAreaView style= { { flex : 1 } }>
                <NavigationContainer>
            
                  <Tab.Navigator
                    tabBarPosition = 'bottom'
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color}) => {
                        let iconName;
            
                        if (route.name === 'Home') {
                          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                          iconName = focused ? 'ios-folder' : 'ios-folder';
                        }
                        else if (route.name === 'Camera') {
                          iconName = focused ? 'ios-camera' : 'ios-camera';
                        }
            
                        // You can return any component that you like here!
                        return <Icon name={iconName} size = { 24 } color={color} />;
                      },
                    })}
                    tabBarOptions={{
                      activeTintColor: 'tomato',
                      inactiveTintColor: 'gray',
                      showIcon : true
                    }}
                  
                  >
                    <Tab.Screen name="Home" component={SearchPage} />
                    <Tab.Screen name="Settings" component={HomeActivity} />
                    <Tab.Screen name="Camera" component={CameraPage} />
                  </Tab.Navigator>
              
                </NavigationContainer>
                </SafeAreaView>
                
            
              );
    } else {
      return <AppLoading />;
    }
  }
}
