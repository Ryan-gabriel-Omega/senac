
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#252535',
                    borderTopColor: '#514477',
                },
                tabBarActiveTintColor: '#A78BFA',
                tabBarInactiveTintColor: '#85859A',
                tabBarLabelStyle: {
                    fontWeight: '600',
                },
            }}
        >
            <Tabs.Screen
                name="list"
                options={{
                    title: "Lembretes",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="list" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="add"
                options={{
                    title: "Adicionar",
                    tabBarLabel: "Adicionar Lembrete",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="plus" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="concluidos"
                options={{
                    title: "Concluídos",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="check-circle" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="estatisticas"
                options={{
                    title: "Estatísticas",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bar-chart" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}
