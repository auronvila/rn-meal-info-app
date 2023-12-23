import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from './MealItem';

export default function MealsList({items}){
  function renderMealItem(itemData) {
    return (
      <View style={{flex: 1}}>
        <MealItem itemData={itemData}/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})