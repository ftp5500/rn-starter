import React, {useState} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from "react-native";

// for body
const CounterScreen = props => {
    const [counter, serCounter] = useState(0);





    return (
        <View>

            <Text>Counter Screen : {counter}</Text>
            <Button
                title="Increase"
                onPress={() => {
                    serCounter(counter + 1)
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    serCounter(counter - 1)

                }}
            />

        </View>
    );
};
// for styles like CSS
const styles = StyleSheet.create({});
// export this component
export default CounterScreen;
