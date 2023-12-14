import { View, StyleSheet, Text, } from 'react-native';
import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function MapScreen() {
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
                    <Text style={{ fontSize: 30, fontWeight: '700', color: 'white', alignSelf: 'center' }}>Searching..</Text>
                    <Text style={{ color: 'white', fontSize: 14 }}>Please wait while the location is being inquired</Text>
                </View>

                <View>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 30, fontWeight: '700', color: 'white', }}>Name:</Text>
                        <Text style={{ color: 'white', fontSize: 14 }}>Completed</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 30, fontWeight: '700', color: 'white', }}>Location:</Text>
                        <Text style={{ color: 'white', fontSize: 14 }}>Completed</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 30, fontWeight: '700', color: 'white', }}>Line Type:</Text>
                        <Text style={{ color: 'white', fontSize: 14 }}>Completed</Text>
                    </View>
                </View>
            </View>
        </>
    );
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
    }
})
