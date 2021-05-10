import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'grey',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
  },
  countText: {
    marginHorizontal: 20,
    fontSize: 16,
  },

  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginBottom: 30,

    borderRadius: 10,
    backgroundColor: '#f15454',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default styles
