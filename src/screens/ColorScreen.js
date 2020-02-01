import React, {useState} from 'react';
import {View, Button, Text, TextInput, StyleSheet, FlatList} from "react-native";

// As a body
const ColorScreen = props => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button title="Add a Color" onPress={() => {
                setColors([...colors, randomRgb()])
            }}/>
            <View style={{
                marginTop: 20,
                marginLeft: 20,
                height: 100,
                width: 100,
                backgroundColor: randomRgb()
            }}/>
            <FlatList
                data={colors}
                keyExtractor={(item)=>item}
                renderItem={( {item} ) => {
                    return (
                        <View style={{
                            marginTop: 20,
                            marginLeft: 20,
                            height: 100,
                            width: 100,
                            backgroundColor: item
                        }}/>
                    )
                }}
            />

        </View>
    )
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`

};

// As a CSS
const styles = StyleSheet.create({
    colorBox: {
        marginTop: 20,
        marginLeft: 20,
        height: 100,
        width: 100,
        backgroundColor: randomRgb()
    }
});


//export the component
export default ColorScreen
