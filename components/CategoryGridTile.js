import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function CategoryGridTile(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.gridItem}>
      <Pressable onPress={() => navigation.navigate('MealsOverView', {
        categoryId: props.itemData.item.id,
      })}
                 android_ripple={{color: '#e85757'}}
                 style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
        <View style={[styles.innerContainer, {backgroundColor: props.color}]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  }
})
