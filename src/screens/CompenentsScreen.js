import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';


//The body

const ComponentsScreen = () => {
    const myName = 'Ali Aljabr';


    return (
        <View>
            <View>
                <Text style={styles.helloText}>Getting started with React Native!</Text>
                <Text style={styles.myName}>My name is {myName}</Text>

            </View>

        </View>
    );


};


// CSS code
const styles = StyleSheet.create({
    helloText: {
        fontSize: 45,
        color: 'blue'
    },
    myName: {
        fontSize: 20,
        color:'green'
    },
    viewFather:{
        marginTop:'50%',

    }

});

export default ComponentsScreen;
