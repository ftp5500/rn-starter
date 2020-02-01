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

            <ImageDetail
                title="Forest"
                imageSource={require(pic3)}
                imageScore="720"
            />
            <ImageDetail
                title="Mountain"
                imageSource={require(pic2)}
                imageScore="1024"
            />
            <ImageDetail
                title="Beach"
                imageSource={require(pic1)}
                imageScore="1440"
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;
