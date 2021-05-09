import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderRadius: 10,
  },
  bedroomText: {
    marginVertical: 10,
    fontSize: 18,
    color: 'grey',
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
  },
  prices: {
    marginVertical: 10,
    fontSize: 18,
  },
  oldPrice: {
    fontWeight: 'bold',
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    color: 'grey',
    textDecorationLine: 'underline',
  },
})

export default styles
