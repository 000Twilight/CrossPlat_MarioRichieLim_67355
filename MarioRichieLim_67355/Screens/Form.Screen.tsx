import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { updatePost } from '../Services/axios';
import form_styles from '../Styles/Form.style';
import CustomHeader from '../Components/CustomHeader';
import { TouchableOpacity } from 'react-native';

const FormScreen = ({ route, navigation }) => {
    const { post, updatePostInList } = route.params;
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleUpdatePost = () => {
        const updatedPost = { ...post, title, body };
        updatePost(updatedPost).then((res) => {
            if (res.status === 200) {
                updatePostInList(updatedPost); // Update the post in HomeScreen directly
                navigation.goBack(); // Navigate back to HomeScreen
            } else {
                alert('Failed to update post');
            }
        });
    };
    
    return (
        <View style={form_styles.container}>
            <CustomHeader onBackPress={() => navigation.goBack()} />
            <Text style={form_styles.label}>Edit Title</Text>
            <TextInput
                style={form_styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={form_styles.label}>Edit Body</Text>
            <TextInput
                style={[form_styles.input, { paddingBottom: 100 }]}
                value={body}
                onChangeText={(text) => setBody(text)}
                multiline
            />
            <TouchableOpacity style={form_styles.button} onPress={handleUpdatePost}>
                <Text style={form_styles.buttonText}>Update Post</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FormScreen;
