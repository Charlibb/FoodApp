import { useLayoutEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  // Set the title of the screen

  // Code below will give warning Cannot update a component ('ConnectFunction') while rendering a different component ('Register'). We need to process this side effect before rendering with useLayoutEffect.
  //  navigation.setOptions({ title: catTitle });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({ title: catTitle });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      ingredients: item.ingredients,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
