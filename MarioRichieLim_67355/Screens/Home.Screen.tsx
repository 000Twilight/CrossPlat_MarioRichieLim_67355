import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getPosts } from '../Services/axios';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import home_styles from '../Styles/Home.style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const HomeScreen = () => {
    const [posts, setPosts] = useState([]);
    // const isFocused = useIsFocused();

    interface Post {
        id: number;
        title: string;
        body: string;
    }

    type RootStackParamList = {
        Home: undefined;
        Forms: { post: Post; updatePostInList: (updatedPost: Post) => void };
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

    const updatePostInList = (updatedPost) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
        );
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <View style={home_styles.container}>
            <Text style={home_styles.titleName}>Mario Richie Lim - 00000067355</Text>
            <FlatList
                data={posts.slice(0, 10)} // Limit to 10 posts
                keyExtractor={(item: Post) => item.id.toString()}
                renderItem={({ item }: { item: Post }) => (
                    <TouchableOpacity
                        style={home_styles.card}
                        onPress={() =>
                            navigation.navigate('Forms', {
                                post: item,
                                updatePostInList,
                            })
                        }
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
