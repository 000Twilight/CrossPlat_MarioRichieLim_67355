import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { updatePost } from '../Services/axios';
import form_styles from '../Styles/Form.style';

const FormScreen = ({ route, navigation }) => {
    const { post, refresh } = route.params;
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleUpdatePost = () => {
        const updatedPost = { ...post, title, body };
        updatePost(updatedPost).then((res) => {
            if (res.status === 200) {
                refresh(); 
                navigation.goBack(); 
            }
        });
    };

    return (
        <View style={form_styles.container}>
            <Text style={form_styles.label}>Edit Title</Text>
            <TextInput
                style={form_styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={form_styles.label}>Edit Body</Text>
            <TextInput
                style={form_styles.input}
                value={body}
                onChangeText={(text) => setBody(text)}
                multiline
            />
            <Button title="Save Changes" onPress={handleUpdatePost} />
        </View>
    );
};

export default FormScreen;
