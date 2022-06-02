import { atom } from 'recoil';

export const demoUser = {
    isAuth: false,
    name: 'Demo User',
    email: 'gandzha@ya.com',
    id: '1'
}

export type UserProps = typeof demoUser;

export const userAtom = atom({
    key: 'userAtom',
    default: demoUser
})