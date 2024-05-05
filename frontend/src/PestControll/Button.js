import * as React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Entypo} from '@expo/vector-icons'

export default function Button ({title,onpress,icon,color}){
    return (
        <TouchableOpacity onPress={onpress} style={styles.button}>
            <Entypo name={icon} size={28} color={color ? color : 'red'} />
            <Text style={StyleSheet.text}>{title}</Text> 
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button : {
        height:40,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    }, 
    text : {
        fontWeight: 'bold',
        fontSize : 16,
        color: 'green',
        marginLeft:10
    }
})