import React from 'react';
import { Text, StyleSheet } from 'react-native';


// As a body in html
const HomeScreen = () => {
  return <Text style={styles.text}>أهلا وسهلا بالجميع</Text>;
};


//for CSS style
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
      color:'blue',
      textAlign:'center'
  }
});

export default HomeScreen;
