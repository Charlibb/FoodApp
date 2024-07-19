import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title} hello </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    //IoS
    backgroundColor: 'white', // ios required backgroundColor for shadowColor,opacity, offest,radius to work
    shadowColor: 'black',
    shadowOpacity: 0.55,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // android
    elevation: 4, // for android shadow
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.8,
    backgroundColor: 'red',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
