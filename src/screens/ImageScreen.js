import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
    <ImageDetail 
        title="Forest" 
        imageSrc={require('../../assets/forest.jpg')}
        score={10} 
    />
    <ImageDetail 
        title="Beach" 
        imageSrc={require('../../assets/beach.jpg')}
        score={8}
    />
    <ImageDetail 
        title="Mountain" 
        imageSrc={require('../../assets/mountain.jpg')}
        score={7}
    />
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;