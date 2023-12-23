import {useNavigation, useRoute} from '@react-navigation/native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {useLayoutEffect} from 'react';
import MealsList from '../components/mealsList/MealsList';

export default function MealsOverViewScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(i => i.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle
    });
  }, [navigation, categoryId]);

  const displayedMeals = MEALS.filter(i => {
    return i.categoryIds.indexOf(categoryId) >= 0;
  })

  return <MealsList items={displayedMeals}/>
}

