import { View, StyleSheet, Text, Image, Button, } from 'react-native';
import React, { useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
export default function FindFriendScreen() {
    return (
        <>

            <View style={styles.mapcontainer}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    showUserLocation={true} >
                    <Marker coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }} />
                </MapView>
            </View>
            <View style={styles.ContentContainer}>
                <View style={{ alignSelf: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: '700', color: 'white', alignSelf: 'center' }}>Find your Friend</Text>
                    <Text style={{ color: 'white', fontSize: 14 }}>Enter the Number of your friend </Text>
                    <Text style={{ color: 'white', fontSize: 14 }}>whose location you want to know</Text>
                </View>
                <View>
                    <View style={{ backgroundColor: 'white', height: '35%', width: '90%', margin: 20, alignSelf: 'center', borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', columnGap: 5 }}>
                            <Image source={require('../Assests/united-states.png')} style={{ width: 30, height: 30, margin: 15, }} />
                            <Text style={{ fontSize: 25, marginTop: 10 }}>+1 | </Text>
                            <Text style={{ fontSize: 25, marginTop: 10 }}>212-7469-1456</Text>
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: 15 }}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: '700' }}>Select from your account</Text>
                        </View>
                        <View style={{ marginTop: 30, borderRadius: 40, width: '90%', alignSelf: 'center' }}>
                            <Button title='Track Location' color='green' />
                        </View>
                    </View>

                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    mapcontainer: {
        height: 300,
        width: 500,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    ContentContainer: {
        backgroundColor: "#5466E1",
        height: '60%',
        width: '100%',
        borderRadius: 10,
        borderColor: '#9177F7'
    },

})
