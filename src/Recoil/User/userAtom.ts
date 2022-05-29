import { atom } from 'recoil';
export const userAtom = atom({
    key: 'userAtom',
    default: {
        isAuth: false,
        name: 'Demo User',
        id: '1'
    }
})