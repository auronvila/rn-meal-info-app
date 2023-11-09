import {StatusBar, Text} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavouritesScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  function DrawerNavigation() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator screenOptions={{
        sceneContainerStyle: {
          backgroundColor: '#50392c'
        },
        headerStyle: {
          backgroundColor: '#351401'
        },
        headerTintColor: 'white',
      }}>
        <Drawer.Screen name={'Categories'} component={CategoriesScreen}/>
        <Drawer.Screen name={'Favourites'} component={FavouritesScreen}/>
      </Drawer.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: {
          backgroundColor: '#50392c'
        },
        headerStyle: {
          backgroundColor: '#351401'
        },
        headerTintColor: 'white',
      }} initialRouteName={'MealsCategories'}>
        <Stack.Screen
          options={{headerShown: false}}
          name={'MealsCategories'}
          component={DrawerNavigation}
        />
        <Stack.Screen
          name={'MealsOverView'}
          component={MealsOverViewScreen}
        />
        <Stack.Screen
          options={{
            title: 'Meal Details',
          }}
          name={'MealsDetail'}
          component={MealsDetailScreen}
        />
      </Stack.Navigator>
      <StatusBar barStyle={'light-content'}/>
    </NavigationContainer>
  );
}
