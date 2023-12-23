import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/mealDetail/SubTitle';
import List from '../components/mealDetail/List';
import {useContext, useLayoutEffect} from 'react';
import IconButton from '../components/IconButton';
import {FavouritesContext} from '../store/context/favourites-context';

export default function MealsDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const mealId = route.params.id;
  const {ids, addFavourite, removeFavourite} = useContext(FavouritesContext)

  const mealIsFavourite = ids.includes(mealId);

  function triggerWhenPressed() {
    if (mealIsFavourite) {
      removeFavourite(mealId)
    } else {
      addFavourite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          color={'white'}
          icon={mealIsFavourite ? 'star' : 'star-outline'}
          onPress={triggerWhenPressed}
        />
      ),
    });
  }, [mealIsFavourite]);


  const selectMeal = MEALS.find(meal => mealId === meal.id);
  return (
    <ScrollView style={styles.rootContainer} showsVerticalScrollIndicator={false}>
      <Image style={styles.image} source={{uri: selectMeal.imageUrl}}/>
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        duration={selectMeal.duration}
        affordability={selectMeal.affordability}
        complexity={selectMeal.complexity}/>
      <SubTitle>
        Ingredients
      </SubTitle>
      <List data={selectMeal.ingredients}/>
      <SubTitle>
        Steps
      </SubTitle>
      <List data={selectMeal.steps}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  subtitle: {
    color: '#bbaead',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitleContainer: {
    padding: 6,
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: '#837269',
  }
})

