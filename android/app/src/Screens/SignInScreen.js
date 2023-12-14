import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SvgComponent from '../Components/SvgComponent';
export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../Assests/couple-cafe.png')} style={styles.imageContainer} />
            <View style={styles.colorLayer}>
                <View style={[styles.absoluteLayer, { backgroundColor: '#9177F71A' }]} />
                <View style={[styles.absoluteLayer, { backgroundColor: '#5F69E5D7' }]} />
                <View style={[styles.absoluteLayer, { backgroundColor: '#5967E3' }]} />
                <View style={[styles.absoluteLayer, { backgroundColor: '#5466E1' }]} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: '700' }}>Sign In</Text>
                    <Text style={{ color: 'white', fontSize: 15 }}>Enter the Number of the friend whose</Text>
                    <Text style={{ color: 'white', fontSize: 15 }}>location you want to know</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'darkblue', height: '20%', width: '80%', borderRadius: 50, marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', columnGap: 40 }}>
                            <Image source={require('../Assests/apple-logo.png')} style={{ width: 25.49, height: 30.25, marginLeft: 20, marginTop: 5 }} />
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', alignSelf: 'center', marginTop: 8 }}>Sign in with Apple ID</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', height: '20%', width: '80%', borderRadius: 50, marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', columnGap: 40 }}>
                            <Image source={require('../Assests/search.png')} style={{ width: 25.49, height: 30.25, marginLeft: 20, marginTop: 5 }} />
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: '700', alignSelf: 'center', marginTop: 8 }}>Sign in with Google</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        zIndex: -1,
    },
    colorLayer: {
        position: 'absolute',
        width: '100%',
        height: '70%',
        bottom: 0
    },
    absoluteLayer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.25
    },
});
