import {Redirect} from "expo-router";

export default function () {
    // Redirect to nested navs
    return <Redirect href="/drawers/first-param-value/second-param-value"/>
}