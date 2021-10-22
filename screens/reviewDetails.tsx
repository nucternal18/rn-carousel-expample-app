import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({route}) => {
    const item = route.params
    console.log(item);
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{item.title}</Text>
      </View>
    );
}


const styles = StyleSheet.create({
  
});


export default ReviewDetails
