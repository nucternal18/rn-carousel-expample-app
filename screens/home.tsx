import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <View>
          <FlatList
            data={reviews}
            keyExtractor={(item) => item.key}
            ItemSeparatorComponent={
              Platform.OS !== 'android' &&
              (({ highlighted }) => (
                <View
                  style={[globalStyles.separator, highlighted && { marginLeft: 0 }]}
                />
              ))
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Review', item)}
              >
                <View style={globalStyles.item}>
                  <Text style={globalStyles.titleText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
