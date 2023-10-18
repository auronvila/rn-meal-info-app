import {StatusBar, Text} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

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
          options={{title: 'All Categories'}}
          name={'MealsCategories'}
          component={CategoriesScreen}
        />
        <Stack.Screen
          name={'MealsOverView'}
          component={MealsOverViewScreen}
        />
        <Stack.Screen
          options={{
            title:'Meal Details',

          }}
          name={'MealsDetail'}
          component={MealsDetailScreen}
        />
      </Stack.Navigator>
      <StatusBar barStyle={'light-content'}/>
    </NavigationContainer>
  );
}
