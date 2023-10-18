import {CATEGORIES} from '../data/dummy-data';
import {FlatList, View} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile itemData={itemData} title={itemData.item.title} color={itemData.item.color}/>
  );
}

export default function CategoriesScreen() {
  return (
    <View style={{flex:1}}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
    </View>
  );
}
