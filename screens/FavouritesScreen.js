import MealsList from '../components/mealsList/MealsList';
import {useContext} from 'react';
import {FavouritesContext} from '../store/context/favourites-context';
import {MEALS} from '../data/dummy-data';
import {StyleSheet, View, Text} from 'react-native';

export default function FavouritesScreen() {
  const {ids} = useContext(FavouritesContext)

  const favouriteMeals = MEALS.filter(meal => ids.includes(meal.id))

  if (favouriteMeals.length === 0) {
    return <View style={styles.rootContainer}><Text style={styles.textStyle}>You have no favourite meals
      yet</Text></View>
  }

  return (
    <MealsList items={favouriteMeals}/>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})