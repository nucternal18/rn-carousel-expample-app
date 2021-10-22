import { StyleSheet, StatusBar } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
  titleText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#333',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  separator: {}
});