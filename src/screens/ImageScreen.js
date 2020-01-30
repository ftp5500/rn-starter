import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "./components/ImageDetail";

// import styles from './styles';

const ImageScreen = () => {
    let pic1 = '../../assets/images/beach.jpg';
    let pic2 = '../../assets/images/mountain.jpg';
    let pic3 = '../../assets/images/forest.jpg';

    return (
        <View>
            <ImageDetail title="Forest" imageSource={require(pic3)}/>
            <ImageDetail title="Mountain" imageSource={require(pic2)}/>
            <ImageDetail title="Beach" imageSource={require(pic1)}/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;
