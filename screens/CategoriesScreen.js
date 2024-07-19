import { StyleSheet, FlatList, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

const CategoriesScreen = () => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}

      /*   renderItem={({ item }) => (
          <Text style={{ color: `${item.color}` }}>{item.title}</Text>
        )} */
    />
  );
};

export default CategoriesScreen;
