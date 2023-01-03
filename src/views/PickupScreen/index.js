import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
const PickupScreen = ({ navigation }) => {
    const [regionLocation, setRegionLocation] = useState({
        // 24.9249253,67.0310871
        latitude: 24.9249253,
        longitude: 67.0310871,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    })
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            // let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

            // setRegionLocation({ ...regionLocation, latitude, longitude });
            Location.watchPositionAsync({
                distanceInterval: 0.1,
                timeInterval: 100,
            }, (response) => {
                const { coords: { latitude, longitude } } = response
                setRegionLocation({ ...regionLocation, latitude, longitude })
            })
        })();
    }, []);
    console.log('location-->', regionLocation)
    return (
        // 24.9687843,67.0694094
        <View style={styles.Pcontainer}>
            <Text>Pickup Screen</Text>
            <MapView style={styles.map} region={regionLocation}>
                <Marker
                    style={styles.marker}
                    coordinate={regionLocation}
                    image={require('../../../assets/icons8-my-location-90.png')}
                    title={'Pickup'}
                    description={'your pickup location'}
                />
            </MapView>
            <Button title='Confirm Pickup' onPress={() => navigation.navigate('Destination')} />
        </View>
    );
}
const styles = StyleSheet.create({
    Pcontainer: { flex: 1 },
    map: {
        width: '100%',
        height: '90%',
    },
    marker: {
        width: 10
    }
})

export default PickupScreen
