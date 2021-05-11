import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  carouselWrapper: {
    position: 'absolute',
    bottom: 10,
  },

  postContainer: {
    paddingVertical: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  innerContainer: {
    width: Dimensions.get('window').width - 60,
    height: 120,
    flexDirection: 'row',

    marginHorizontal: 5,
    borderRadius: 10,

    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  bedroomText: {
    marginVertical: 10,
    fontSize: 14,
    color: 'grey',
  },
  description: {
    fontSize: 14,
    lineHeight: 16,
  },
  prices: {
    marginVertical: 10,
    fontSize: 14,
  },
  newPrice: {
    fontWeight: 'bold',
  },
})

export default styles
