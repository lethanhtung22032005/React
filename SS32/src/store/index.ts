// import { createStore } from "redux";
// interface UserState {
//     id: number;
//     userName: string;
//     gender: string;
//     dateBirth: string;
//     address: string;
// }
// const initialState: UserState = {
//     id: 1,
//     userName: "Nguyễn Văn Nam",
//     gender: "Nam",
//     dateBirth: "20/03/2023",
//     address: "Thanh Xuân, Hà Nội",
// };
// const userReducer = (state = initialState, action: any): UserState => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// };
// const store = createStore(userReducer);

// export default store;
// export type RootState = ReturnType<typeof store.getState>;

// store/userReducer.ts
export interface User {
    id: number;
    userName: string;
    gender: string;
    dateBirth: string;
    address: string;
}

const initialState: User[] = [
    {
        id: 1,
        userName: "Nguyễn Văn A",
        gender: "Nam",
        dateBirth: "20/11/2023",
        address: "Thanh Xuân, Hà Nội",
    },
    {
        id: 2,
        userName: "Nguyễn Thị B",
        gender: "Nữ",
        dateBirth: "20/11/2023",
        address: "Cầu Giấy, Hà Nội",
    },
];

type Action = { type: string; payload?: any };

export const userReducer = (state = initialState, action: Action): User[] => {
    switch (action.type) {
        default:
            return state;
    }
};

