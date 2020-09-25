import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, Linking} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import message from '../../assets/message.png';

import styles from './styles';

export default function Home(){

    const[pais, setPais] = useState('55');
    const[ddd, setDdd] = useState('38');
    const [number, setNumber] = useState('999999999');

    function sendWhatsapp(){
        const whatsapp = pais+''+ ddd+''+number;
        Linking.openURL(`Whatsapp://send?phone=${whatsapp}`);
    }

    return (
        
        <ScrollView style={{backgroundColor: '#41C58C'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={message}/>
                    <Text style={styles.title}>Envie mensagem pelo Whatsapp sem salvar o contato!</Text>
                    <Text style={styles.explanation}>Basta colocar o código do páis, o DDD e o número do celular.</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <View style={styles.preNumber}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Código do país</Text>
                                <TextInput  
                                    style={styles.input} 
                                    value={String(pais)}
                                    numericvalue
                                    keyboardType={'numeric'}
                                    onChangeText={pais=>setPais(pais)}
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>DDD</Text>
                                <TextInput  
                                    style={styles.input} 
                                    value={String(ddd)}
                                    numericvalue
                                    keyboardType={'numeric'}
                                    onChangeText={ddd=>setDdd(ddd)}
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>
                        
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Número</Text>
                            <TextInput  
                                style={styles.input} 
                                value={String(number)}
                                numericvalue
                                keyboardType={'numeric'}
                                onChangeText={number=>setNumber(number)}
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>
                    <RectButton onPress={sendWhatsapp} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Abrir</Text>
                    </RectButton>
                    
                </View>
            </View>
        </ScrollView>
            
        
    );
}