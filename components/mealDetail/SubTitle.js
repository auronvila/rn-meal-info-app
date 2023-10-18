import {StyleSheet, Text, View} from 'react-native';

export default function SubTitle(props){
  return(
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  subtitle: {
    color: '#bbaead',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitleContainer: {
    padding: 6,
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 12,
    borderBottomColor: '#837269',
  }
})
