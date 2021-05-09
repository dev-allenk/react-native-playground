import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 550,
  },
  imageInnerContainer: {
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  searchButton: {
    position: 'absolute',
    top: 50,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 20,

    backgroundColor: '#fff',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  title: {
    width: '70%',
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
  },

  exploreButton: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '55%',
    height: 40,
    marginTop: 20,
    borderRadius: 10,

    backgroundColor: '#fff',
  },
})

export default styles
