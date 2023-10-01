import {Text} from "react-native";
import {useGlobalSearchParams} from "expo-router";

export default function () {
    const params = useGlobalSearchParams();
    return <Text style={{color: 'white'}}>Only first param was passed: {JSON.stringify(params.firstParam)}</Text>
}