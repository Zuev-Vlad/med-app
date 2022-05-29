
import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAction } from "../../Actions/UserAction";
import { PageWrapper } from "../../Component/Wrappers/PageWrapper/PageWrapper";
import { PAGE_PATH_NAME } from "../../Constants/PagePathName";


export const IndexPage: React.FC = () => {
    const changePath = useNavigate()
    const goToAuth = () => changePath(PAGE_PATH_NAME.auth)
    const goToProduct = () => changePath(PAGE_PATH_NAME.medicalList)
    const user = new UserAction()
    return (
        <PageWrapper>

            <Card className="text-center ">
                <Card.Header>
                    <h1> Добро пожаловать в приложение <br /> "Моя Аптечка"</h1>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{user.checkUserAuth() && 'Для работы с приложением необходимо выполнить вход'}</Card.Title>
                    {user.checkUserAuth()
                        ? <Button variant="primary" onClick={goToAuth}>Авторизоваться</Button>
                        : <Button variant="primary" onClick={goToProduct}>Перейти к лекарствам</Button>
                    }

                </Card.Body>
            </Card>
        </PageWrapper>
    )
}