import * as React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Cookies from 'js-cookie'
import { COOKIE_NAME } from '../../Constants/CookieName'
import { useNavigate } from 'react-router-dom'
import { PAGE_PATH_NAME } from '../../Constants/PagePathName'

export const AuthForm: React.FC = () => {
    const changePath = useNavigate()
    const logIn = () => {
        Cookies.set(COOKIE_NAME.auth, 'testAuthString')
        changePath(PAGE_PATH_NAME.medicalList)
    }
    return (
        <Form onSubmit={() => logIn()}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email или Логин</Form.Label>
                <Form.Control type="text" required placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" required placeholder="" />
            </Form.Group>
            <div className="d-flex justify-content-end">
                <Button type="submit" className="ml-auto">Войти</Button>
            </div>
        </Form>
    )
}