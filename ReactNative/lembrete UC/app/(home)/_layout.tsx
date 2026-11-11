
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
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
        </Tabs>
    );
}
