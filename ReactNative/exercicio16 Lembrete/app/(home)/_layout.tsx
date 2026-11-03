import { StyleSheet} from 'react-native';
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
 
export default function TabLayout() {
    return (
        <Tabs screenOptions={{headerShown: false }}>
            <Tabs.Screen
                name="list"
                options={{ title: "Lembretes", headerShown: false, tabBarIcon: ({ color, size }) => <FontAwesome color={'#f14897'} size={28} name="list" /> }}
            />
 
<Tabs.Screen
                name="add"
                options={{ title: "Adicionar", headerShown: false, tabBarIcon: ({ color, size }) => <FontAwesome color={'#f14897'} size={28} name="plus" /> }}
            />
 
        </Tabs>
 
    )
}