import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealDetailsScreen({ route }) {
  console.log(route.params.mealId);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  console.log('selected meal: ', selectedMeal.title);

  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Recipe for {selectedMeal.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
          <Text style={styles.detailItem}>{selectedMeal.complexity}</Text>
          <Text style={styles.detailItem}>{selectedMeal.affordability}</Text>
        </View>
        <Image
          style={styles.image}
          source={{ uri: selectedMeal.imageUrl }}
        ></Image>
        <Text style={styles.details}>{selectedMeal.steps}</Text>
      </View>
    </View>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
