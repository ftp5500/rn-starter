import React, {useState} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from "react-native";

// As a body
const ColorChanging = props => {

    const COLOR_INCREMENT = 15;
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const randomRgb = () => {

        return `rgb(${red},${green},${blue})`
    };

    return (

        <View>
            <View>
                <Button title="More Red ⬆" onPress={() => {
                    if ( red < 255){
                        setRed(red + COLOR_INCREMENT)
                    }

                }}/>

                <Button title="Less Red ⬇ "
                        onPress={() => {
                            if (red > 0){
                                setRed(red - COLOR_INCREMENT)
                            }

                        }}
                />

            </View>

            <View>
                <Button title="More Green ⬆"
                        onPress={() => {
                            if (green < 255){
                                setGreen(green + COLOR_INCREMENT)
                            }

                        }}
                />

                <Button title="Less Green ⬇"

                        onPress={() => {
                            if (green > 0){
                                setGreen(green - COLOR_INCREMENT)
                            }

                        }}
                />

            </View>

            <View>
                <Button title="More Blue ⬆"
                        onPress={() => {
                            if (blue < 255){
                                setBlue(blue + COLOR_INCREMENT)
                            }

                        }}

                />

                <Button title="Less Blue ⬇"

                        onPress={() => {
                            if (blue > 0){
                                setBlue(blue - COLOR_INCREMENT)
                            }

                        }}
                />

            </View>
            <Text style={styles.textStyle}>Red:{red} , Green:{green} , Blue:{blue}</Text>

            <View style={{
                marginTop: 50,
                marginLeft: '28%',
                height: 200,
                width: 200,
                backgroundColor: randomRgb(),
                borderColor: 'grey',
                borderWidth:1

            }}/>

        </View>

    )
};

// As a CSS
const styles = StyleSheet.create({
    textStyle: {

        fontSize: 20
    }
});


//export the component
export default ColorChanging
