import { ReactNode } from "react";
import { atom } from "recoil";
export interface ModalStateInterface {
    isOpen: boolean,
    title: ReactNode,
    content: ReactNode,
    isShowFooter: boolean,
    textActionBtn: string,
    onClickActionBtn: () => void
}
export const defaultModalState: ModalStateInterface = {
    isOpen: false,
    title: '',
    content: '',
    isShowFooter: true,
    textActionBtn: '',
    onClickActionBtn: () => ({})
}

export const modalAtom = atom<ModalStateInterface>({
    key: 'modalAtom',
    default: defaultModalState
})