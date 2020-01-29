import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

    const friends =
        [
            {
                key: '1',
                name: 'Ali',
                age: 39,
            },
            {
                key: '2',
                name: 'Mohammed',
                age: 33,
            },
            {
                key: '3',
                name: 'Yasser',
                age: 30,
            },
            {
                key: '4',
                name: 'Hamood',
                age: 33,
            },
            {
                key: '5',
                name: 'Faisal',
                age: 22,
            },
            {
                key: '6',
                name: 'Ammar',
                age: 3,
            },
            {
                key: '7',
                name: 'Kenan',
                age: 2
            },
        ];
    return (
        <View>
            <Text style={styles.headerTitle}>List </Text>

            <FlatList
                keyExtractor={( friend ) => friend.name}
                style={styles.flatList}
                data={friends}
                renderItem={( {item} ) => {
                    return (
                        <View>
                            <Text style={styles.item}>{item.name} - Age : {item.age}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
        ;

};

const styles = StyleSheet.create({
    fatherView: {
        marginTop: 50,
    },
    headerTitle: {
        fontSize: 30,
        textAlign: 'center'
    },
    item: {
        marginVertical: 50,
        marginHorizontal: 50,
        fontSize: 20,
        paddingBottom: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    flatList: {
        marginTop: 30,
        borderBottomColor: 'grey',

    }
});

export default ListScreen;
