import {useGlobalSearchParams} from "expo-router";
import {Text} from "react-native";

export default function () {
    const params = useGlobalSearchParams();
    return <Text  style={{color: 'white'}}>both params were passed: {JSON.stringify(params)}</Text>
}