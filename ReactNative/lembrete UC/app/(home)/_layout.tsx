
import { Tabs } from "expo-router";

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
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="add"
                options={{
                    title: "Adicionar",
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="concluidos"
                options={{
                    title: "Concluídos",
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="estatisticas"
                options={{
                    title: "Estatísticas",
                    headerShown: false
                }}
            />
        </Tabs>
    );
}
