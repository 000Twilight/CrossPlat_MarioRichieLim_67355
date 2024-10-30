import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getPosts } from '../Services/axios';
import { useNavigation } from '@react-navigation/native';
import home_styles from '../Styles/Home.style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

const HomeScreen = () => {
    interface Post {
        id: number;
        title: string;
        body: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);

    type RootStackParamList = {
        Home: undefined;
        Forms: { post: Post; refresh: () => void };
    };
    
    type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const getAllPosts = () => {
        getPosts().then((res) => {
            if (res.status === 200) {
                setPosts(res.data);
            }
        });
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <View style={home_styles.container}>
            <Text>Mario Richie Lim - 00000067355</Text>
            <FlatList
                data={posts}
                keyExtractor={(item: Post) => item.id.toString()}
                renderItem={({ item }: { item: Post }) => (
                    <TouchableOpacity
                        style={home_styles.card}
                        onPress={() => navigation.navigate('Forms', { post: item, refresh: getAllPosts })}
                    >
                        <Text style={home_styles.title}>{item.title}</Text>
                        <Text style={home_styles.body}>{item.body}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HomeScreen;
