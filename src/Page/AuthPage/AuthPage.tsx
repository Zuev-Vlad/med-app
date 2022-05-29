import { Card } from "@nextui-org/react";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthForm } from "../../Component/AuthForm/AuthForm";
import { PageWrapper } from "../../Component/Wrappers/PageWrapper/PageWrapper";
import { COOKIE_NAME } from "../../Constants/CookieName";
import { PAGE_PATH_NAME } from "../../Constants/PagePathName";

const FormWrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
`

export const AuthPage: React.FC = () => {
    const changePath = useNavigate()
    React.useEffect(() => {
        if (Cookies.get(COOKIE_NAME.auth)) changePath(PAGE_PATH_NAME.medicalList)
    }, [])
    
    return (
        <PageWrapper>
            <FormWrapper>
                <Card>
                    <AuthForm />
                </Card>
            </FormWrapper>
        </PageWrapper>

    )
}