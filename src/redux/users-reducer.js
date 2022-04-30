import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_IS_FOLLOWING = 'SET-IS-FOLLOWING';

let initialState = {
    users: [

    ],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 10,
    isFetching: false,
    isFollowing: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = { ...state };

            stateCopy.users = state.users.map(user => {
                if (user.id === action.userID) {
                    user.followed = true;
                }
                return user;
            })
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = { ...state };

            stateCopy.users = state.users.map(user => {
                if (user.id === action.userID) {
                    user.followed = false;
                }
                return user;
            })
            return stateCopy;
        }
        case SET_USERS: {
            let stateCopy = { ...state, users: [...action.users] };

            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            let stateCopy = { ...state };
            stateCopy.currentPage = action.currentPage;

            return stateCopy;
        }
        case SET_TOTAL_USERS_COUNT: {
            let stateCopy = { ...state };
            stateCopy.totalUsersCount = action.totalUsersCount;

            return stateCopy;
        }
        case SET_IS_FETCHING: {
            let stateCopy = { ...state };
            stateCopy.isFetching = action.isFetching;

            return stateCopy;
        }
        case SET_IS_FOLLOWING: {
            let stateCopy = { ...state };
            if (action.isFollowing === true) {
                stateCopy.isFollowing = [...stateCopy.isFollowing, action.userId];
            }
            else {
                stateCopy.isFollowing = [stateCopy.isFollowing.filter(id => id !== action.userId)];
            }

            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const followActionCreator = (userID) => {
    return { type: FOLLOW, userID: userID };
};
export const unfollowActionCreator = (userID) => {
    return { type: UNFOLLOW, userID: userID };
};
export const setUsersActionCreator = (users) => {
    return { type: SET_USERS, users: users };
};
export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount };
};
export const setCurrentPageActionCreator = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage: currentPage };
};
export const setIsFetchingActionCreator = (isFetching) => {
    return { type: SET_IS_FETCHING, isFetching: isFetching };
};
export const setIsFollowingActionCreator = (isFollowing, userId) => {
    return { type: SET_IS_FOLLOWING, isFollowing: isFollowing, userId: userId };
};





export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetchingActionCreator(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersActionCreator(data.items));
            dispatch(setTotalUsersCountActionCreator(100));
            dispatch(setIsFetchingActionCreator(false));
        })
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingActionCreator(true, userId));

        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followActionCreator(userId)); 
            }
            dispatch(setIsFollowingActionCreator(false, userId));
        })
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingActionCreator(true, userId));

        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowActionCreator(userId)); 
            }
            dispatch(setIsFollowingActionCreator(false, userId));
        })
    }
}

export default usersReducer;