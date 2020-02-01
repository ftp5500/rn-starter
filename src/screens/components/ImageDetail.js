import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';


// import styles from './styles';

const ImageDetail = ({imageSource,title,imageScore}) => {

    return (
        <View>

            <Image  source={imageSource}/>
            <Text>{title} | Image Score: {imageScore}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImageDetail;
