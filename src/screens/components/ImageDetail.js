import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';


// import styles from './styles';

const ImageDetail = (props) => {
console.log(props);
    return (
        <View>
            <Text>{props.title}</Text>
            <Image  source={props.imageSource}/>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImageDetail;
