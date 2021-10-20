import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomSlider from '../components/CustomSlider';

const About = () => {
    return (
      <View style={styles.container}>
        <Text>About</Text>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default About
