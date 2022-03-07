import { Box, HamburgerIcon, Menu } from "native-base";
import { Pressable } from "react-native";

type params = {
    navigation: any,
    routes: string[]
}

function MenuOptions({ navigation, routes }: params) {
    return (
        <Box >
            <Menu w="190" trigger={triggerProps => {
                return (
                    <Pressable accessibilityLabel="Menu de opções" {...triggerProps}>
                        <HamburgerIcon />
                    </Pressable>
                )
            }}>
                { 
                    routes.map((element: string, i: number) => {
                        return <Menu.Item key={i} onPress={() => navigation.navigate(`${element}`)}>{element}</Menu.Item>
                    })
                }
            </Menu>
        </Box>
    )
}

export default MenuOptions