import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getDatabase } from '../database/database';

export default function Layout() {
    const [pronto, setPronto] = useState(false);

    useEffect(() => {
        getDatabase().then(() => setPronto(true));
    }, []);

    if (!pronto) {
        return (
            <View style={{ flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>Carregando...</Text>
            </View>
        );
    }

    return (
        <>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: '#1E1E1E' },
                    headerTintColor: 'white',
                    contentStyle: { backgroundColor: '#121212' }
                }}
            />
        </>
    );
}
