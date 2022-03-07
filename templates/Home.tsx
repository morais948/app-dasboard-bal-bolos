import * as React from 'react'
import MenuOptions from '../components/menu/Menu'
import { View, Text } from 'react-native'

function HomeScreen(props: any) {

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <View>
                    <MenuOptions navigation={props.navigation} routes={['Produtos']} />
                </View>
            ),
        });
    }, [props.navigation]);

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text>BEM BINDO AO DASHBOARD</Text>
        </View>
    );
}

export default HomeScreen