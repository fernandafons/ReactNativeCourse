import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Maria';

    return <View>
        <Text style={styles.textStyle}>Greatting started with react native!</Text>
        <Text style={styles.subTitle}>My name is {name}</Text>
        </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subTitle: {
        fontSize: 20
    }
    
});

export default ComponentsScreen;