import { StyleSheet, FlatList, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

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
}

export default CategoriesScreen;
