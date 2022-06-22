import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header({name}){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>
                    {name}
                </Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="azure"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username:{
        fontSize: 18,
        color: 'azure',
        fontWeight: 'bold',
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
})