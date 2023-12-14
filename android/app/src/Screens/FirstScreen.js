import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SvgComponent from '../Components/SvgComponent';
export default function FirstScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../Assests/couple-cafe.png')} style={styles.imageContainer} />
            <View style={styles.colorLayer}>
                <View style={[styles.absoluteLayer, { backgroundColor: '#9177F71A' }]} />
                <View style={[styles.absoluteLayer, { backgroundColor: '#5F69E5D7' }]} />
                <View style={[styles.absoluteLayer, { backgroundColor: '#5967E3' }]} />
                <View style={[styles.absoluteLayer, { backgroundColor: '#5466E1' }]} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('sign-in')} style={{ backgroundColor: 'darkblue', height: '10%', width: '80%', borderRadius: 50 }}>
                        <View>
                            <View style={{ flexDirection: 'row', columnGap: 40 }}>
                                <Image source={require('../Assests/apple-logo.png')} style={{ width: 25.49, height: 30.25, marginLeft: 20, marginTop: 5 }} />
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', alignSelf: 'center', marginTop: 8 }}>Go to Sign in</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Map')} style={{ backgroundColor: 'darkblue', height: '10%', width: '80%', borderRadius: 50, marginTop: 15 }}>
                        <View>
                            <View style={{ flexDirection: 'row', columnGap: 40 }}>
                                <Image source={require('../Assests/apple-logo.png')} style={{ width: 25.49, height: 30.25, marginLeft: 20, marginTop: 5 }} />
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', alignSelf: 'center', marginTop: 8 }}>Go to searching</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('friend')} style={{ backgroundColor: 'darkblue', height: '10%', width: '80%', borderRadius: 50, marginTop: 15 }}>
                    <View >
                        <View style={{ flexDirection: 'row', columnGap: 40 }}>
                            <Image source={require('../Assests/apple-logo.png')} style={{ width: 25.49, height: 30.25, marginLeft: 20, marginTop: 5 }} />
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', alignSelf: 'center', marginTop: 8 }}>Go to find friend</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('chat')} style={{ backgroundColor: 'darkblue', height: '10%', width: '80%', borderRadius: 50, marginTop: 15 }}>
                    <View>
                        <View style={{ flexDirection: 'row', columnGap: 40 }}>
                            <Image source={require('../Assests/apple-logo.png')} style={{ width: 25.49, height: 30.25, marginLeft: 20, marginTop: 5 }} />
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', alignSelf: 'center', marginTop: 8 }}>Go to chat</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
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
