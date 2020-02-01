import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';


// As a body in html
const HomeScreen = ( {navigation} ) => {
    const myName = "Ali";
    return (
        <View>
                <Text style={styles.text}>أهلا وسهلا بالجميع</Text>
                <Button
                    title="GO TO COMPONENTS DEMO"
                    onPress={() => navigation.navigate('Components')}
                />
                <Button
                    title="GO TO LIST DEMO"
                    onPress={() => {
                        navigation.navigate({routeName: 'List'})
                    }}
                />
                <Button
                    title="GO TO IMAGE DEMO"
                    onPress={() => {
                        navigation.navigate({routeName: 'Image'})
                    }}
                />
                <Button
                    title="GO TO COUNTER"
                    onPress={() => {
                        navigation.navigate({routeName: 'Counter'})
                    }}
                />
                <Button
                    title="GO TO COLORS"
                    onPress={() => {
                        navigation.navigate({routeName: 'Color'})
                    }}
                />
        </View>

    );
};


//for CSS style
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'blue',
        textAlign: 'center'
    }
});

export default HomeScreen;
