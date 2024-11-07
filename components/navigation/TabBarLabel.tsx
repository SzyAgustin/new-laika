import COLORS from "@/configs/colors";
import { StyleSheet, Text } from "react-native";

interface TabBarLabelProps {
    title: string;
    focused: boolean;
}

const TabBarLabel = ({ title, focused }: TabBarLabelProps) => {
    const styles = dynamicStyles({ focused });
    return <Text style={styles.tabBarLabel}>{title}</Text>;
}


const baseStyles = StyleSheet.create({
    tabBarLabel: {
        fontSize: 12, //todo: poner valores por default según el diseño
        padding: 0,
    }
});

interface StyleParams {
    focused: boolean;
}

const dynamicStyles = (params: StyleParams) => ({
    tabBarLabel: {
        ...baseStyles.tabBarLabel,
        color: params.focused ? COLORS.PRIMARY : COLORS.TEXT_LIGHT,
    }
});

export default TabBarLabel;