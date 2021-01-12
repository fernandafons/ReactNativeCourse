import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Maria', age: '26'},
        {name: 'Fernanda', age: '25'},
        {name: 'Marina', age: '54'},
        {name: 'Ruas', age: '27'},
        {name: 'Matheus', age: '20'},
        {name: 'Aroldo', age: '56'},
        {name: 'Regina', age: '36'},
        {name: 'Rafa', age: '29'}
    ]
    return (
    <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator={false} 
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>
                        name: {item.name} - Age: {item.age}
                    </Text>
        }} 
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;