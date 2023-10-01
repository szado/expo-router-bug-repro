import {Drawer} from "expo-router/drawer";
import {Text} from "react-native";

export default function () {
    return <Drawer
        screenOptions={{
            drawerPosition: 'right',
            headerStyle: {backgroundColor: '#ffffff'},
        }}
    />
}