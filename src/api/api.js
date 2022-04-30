import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "008538ca-ec18-4d06-8a91-fc8fa3eda943"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId){
        return instance.post(`follow/${userId}`).then(response => {
            return response.data;
        })
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response =>{
            return response.data;
        })
    },
    setStatus(status){
        return instance.put('profile/status',{status: status}).then(response => {
            return response.data;
        })
    }
}