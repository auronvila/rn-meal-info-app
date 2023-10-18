import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect} from 'react';

export default function MealsOverViewScreen() {
  const route = useRoute();
  const navigation = useNavigation();
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

  function renderMealItem(itemData) {
    return (
      <View style={{flex: 1}}>
        <MealItem itemData={itemData}/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false} data={displayedMeals} keyExtractor={(item) => item.id}
                renderItem={renderMealItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})