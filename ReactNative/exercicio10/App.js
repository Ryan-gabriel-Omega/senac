import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    Button,
    Switch,
    StyleSheet,
    ScrollView
} from 'react-native';

export default function app() {
    const produtos = [
        {
            id: 1,
            nome: 'Notebook',
            preco: 3500,
            disponivel: true
        },
        {
            id: 2,
            nome: 'Mouse',
            preco: 80,
            disponivel: true
        },
        {
            id: 3,
            nome: 'Teclado',
            preco: 150,
            disponivel: false
        },
        {
            id: 4,
            nome: 'Monitor',
            preco: 1200,
            disponivel: true
        }
    ];
    const [pesquisa, setPesquisa] = useState('');
    const [somenteDisponiveis, setSomenteDisponiveis] = useState(false);

    return (
        <View>
            <Text>
                Minha loja
            </Text>
            <TextInput
                placeholder='Pesquisar produto'
                value={pesquisa}
                onChange={setPesquisa}
            />
            <Text>
                Somente somenteDisponiveis
            </Text>
            <Switch 
                value={somenteDisponiveis}
                onValueChange={setSomenteDisponiveis}
            />
        </View>

    );


}