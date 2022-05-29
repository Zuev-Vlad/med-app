import { modalAtom, defaultModalState } from './../Recoil/Modal/modalAtom/modalAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ReactNode } from 'react';

export class ModalAction {
    public modalState = useRecoilValue(modalAtom)
    private setState = useSetRecoilState(modalAtom)

    setOpen(openFlag: boolean = false) {
        this.setState((oldState) => ({ ...oldState, isOpen: openFlag }))
        return this
    }
    setTitle(newTitle: ReactNode = '') {
        this.setState((oldState) => ({ ...oldState, title: newTitle }))
        return this
    }

    setContent(content: ReactNode = '') {
        this.setState((oldState) => ({ ...oldState, content }))
        return this
    }

    setShowFooter(flag: boolean = false) {
        this.setState((oldState) => ({ ...oldState, isShowFooter: flag }))
        return this
    }

    setActionCallback(callback: () => void = () => ({})) {
        this.setState((oldState) => ({ ...oldState, onClickActionBtn: callback }))
        return this
    }

    reset() {
        this.setState(defaultModalState)
        return this
    }
}