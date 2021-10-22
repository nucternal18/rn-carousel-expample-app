import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CustomSlider from '../components/CustomSlider';
import { globalStyles } from '../styles/global';

const About = () => {
    const [reviews, setReviews] = useState([])
    return (
      <View style={globalStyles.container}>
        <Text>About</Text>
      </View>
    );
}


const styles = StyleSheet.create({
 
});


export default About
