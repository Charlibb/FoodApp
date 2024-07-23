import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
  const { itemId } = route.params;

  const catId = route.params.categoryId;
  const title = route.params.categoryTitle;

  console.log('route.params: ', route.params.categoryTitle);
  console.log('category Id: ', catId);

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen </Text>
      <Text>itemId: {catId}</Text>
      <Text>Title : {title}</Text>
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
