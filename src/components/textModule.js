import React from 'react';
import { Text, SafeAreaView, TextInput, Button, StyleSheet, Alert } from 'react-native'

const TextModule = () => {
    const [text, onChangeText] = React.useState("");
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <TextInput style={styles.TextInput} onChangeText={onChangeText} value={text} placeholder="Entrez un texte ici"></TextInput>
            <Button color={"red"} title="DO NOT PRESS THIS!" onPress={() => Alert.alert('BOOM!!!!!!!!')}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TextModule