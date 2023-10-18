import {StyleSheet, Text, View} from 'react-native';

export default function MealDetails({duration, complexity, affordability, style, textStyle}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration} min.</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text
        style={[styles.detailItem, {borderRightWidth: 0}, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})