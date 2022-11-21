import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native'

export default function Home({navigation}) {

    return (


        <View style={styles.flexContainer} >
            <Text>
                Home screen
            </Text>

            <Button title='Press the Button'
            onPress={()=>navigation.navigate('About')}
            />

        </View>


    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    button: {
        tintColor: 'red',
        padding: 5,
        
    }
})