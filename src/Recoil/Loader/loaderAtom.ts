import { atom } from 'recoil';

export const loaderAtomState = {
    isLoading: false
}

export type LoaderAtomProps = typeof loaderAtomState;

export const loaderAtom = atom({
    key: 'loaderAtom',
    default: loaderAtomState
})