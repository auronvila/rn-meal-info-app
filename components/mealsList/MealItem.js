import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetails from '../MealDetails';

export default function MealItem(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={() => {
          navigation.navigate('MealsDetail', {id: props.itemData.item.id})
        }}
        style={({pressed}) => pressed ? styles.buttonPressed : null}
        android_ripple={{color: '#ccc'}}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.imageStyle} source={{uri: props.itemData.item.imageUrl}}/>
          <Text style={styles.headerMealText}>{props.itemData.item.title}</Text>
        </View>
        <MealDetails
          affordability={props.itemData.item.affordability}
          duration={props.itemData.item.duration}
          complexity={props.itemData.item.complexity}/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
  },
  innerContainer: {
    overflow: 'hidden',
    borderRadius: 8
  },
  headerMealText: {
    overflow: Platform.OS === 'android' ? 'visible' : 'hidden',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 16,
    backgroundColor: '#49a4de',
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    elevation: 5,
    textAlign: 'center'
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 12},
    shadowColor: 'black',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-evenly'
  },
  detailItem: {
    marginHorizontal: 5,
    fontSize: 12,
    marginTop: 5,
  },
  buttonPressed: {
    opacity: Platform.OS === 'ios' ? 0.5 : 1
  }
})

