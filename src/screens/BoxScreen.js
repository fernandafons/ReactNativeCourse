import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child n1</Text>
            <Text style={styles.textTwoStyle}>Child n2</Text>
            <Text style={styles.textThreeStyle}>Child n3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-around'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 1
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // position: 'absolute',
        top: 30
        // flex: 1,
        // alignSelf: 'flex-end',
        // ...StyleSheet.absoluteFillObject // fullfill parent's space
        // position: 'absolute' // override, ignore its siblings
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 1
    }
});

export default BoxScreen;