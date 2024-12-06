import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as Location from 'expo-location';
import Restaurants from '../Data/Restaurants';
import restaurantNearYou_style from '../Styles/RestaurantNearYou.style';
import CustomHeader from '../Components/CustomHeader';

const RestaurantNearYouScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [restaurants, setRestaurants] = useState([]);

    const hardcodedLocation = {
        coords: {
            latitude: -6.1490296,
            longitude: 106.7825592
        },
    };

    const requestPermissionAndGetLocation = async () => {
        // let { status } = await Location.requestForegroundPermissionsAsync();
        // if (status !== 'granted') {
        //     setErrorMsg('Permission to access location was denied');
        //     return;
        // }

        // let location = await Location.getCurrentPositionAsync({});
        setLocation(hardcodedLocation);
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const toRad = (value) => value * Math.PI / 180;
        const R = 6371; // Radius of Earth in km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    };

    const fetchNearbyRestaurants = () => {
        if (location) {
            const nearbyRestaurants = Restaurants.filter((restaurant) => {
                const distance = calculateDistance(
                    location.coords.latitude,
                    location.coords.longitude,
                    restaurant.location.latitude,
                    restaurant.location.longitude
                );
                return distance <= 5; // Filter restaurants within 5 km radius
            });
            setRestaurants(nearbyRestaurants);
        }
    };

    useEffect(() => {
        requestPermissionAndGetLocation();
    }, []);

    useEffect(() => {
        if (location) {
            fetchNearbyRestaurants();
        }
    }, [location]);

    return (
        <View>
            <CustomHeader
                title="Restaurant Near You"
                placeholder="Search for restaurant"
                haveSearchBar={false}
            />
            <View style={restaurantNearYou_style.container}>
                {/* {errorMsg ? (
                    <Text style={restaurantNearYou_style.error}>{errorMsg}</Text>
                ) : location ? (
                    <Text>
                        Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
                    </Text>
                ) : (
                    <Text>Fetching location...</Text>
                )} */}
                <View style={{ flexDirection: 'row', marginBottom: 14 }}>
                    <Text style={restaurantNearYou_style.subTitle}>Vegan Restaurants Near You</Text>
                    <TouchableOpacity onPress={requestPermissionAndGetLocation} style={restaurantNearYou_style.button}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Get Location</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {restaurants.length > 0 ? (
                        restaurants.map((restaurant, index) => (
                            <View key={index} style={restaurantNearYou_style.restaurantCard}>
                                <Image source={restaurant.menu[0].image} style={restaurantNearYou_style.image} />
                                <View style={restaurantNearYou_style.infoWrapper}>
                                    <Text style={restaurantNearYou_style.restaurantName}>{restaurant.title}</Text>
                                    <Text style={restaurantNearYou_style.restaurantLocation}>
                                        {restaurant.address}
                                    </Text>
                                </View>
                            </View>
                        ))
                    ) : (
                        <Text>No vegan or vegetarian restaurants found within 5 km.</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

export default RestaurantNearYouScreen;