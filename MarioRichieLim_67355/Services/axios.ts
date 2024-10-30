import axios from "axios"

const ENV = process.env.EXPO_PUBLIC_API_URL;

// export const getUsers = () => {
//     return axios.get(ENV + "users");
// };

// export const postData = (data) => {
//     return axios.post(ENV + "posts", data);
// }

export const getPosts = () => {
    return axios.get(ENV + "posts");
};

export const updatePost = (data) => {
    return axios.put(`${ENV}posts/${data.id}`, data);
};