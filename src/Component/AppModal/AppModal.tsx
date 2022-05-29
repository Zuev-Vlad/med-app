import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalAtom } from "../../Recoil/Modal/modalAtom/modalAtom";

export const AppModal = () => {
    const [modalState, setModalState] = useRecoilState(modalAtom)

    const closeHandler = () => {
        setModalState((oldState) => ({ ...oldState, isOpen: false }))
    };

    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={modalState.isOpen}
            onClose={closeHandler}
        >
            <Modal.Header>
                {modalState.title}
            </Modal.Header>
            <Modal.Body>
                {modalState.content}
            </Modal.Body>
            {modalState.isShowFooter &&
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Закрыть
                    </Button>
                    <Button auto onClick={modalState.onClickActionBtn}>
                        {modalState.textActionBtn}
                    </Button>
                </Modal.Footer>
            }
        </Modal>
    );
}
