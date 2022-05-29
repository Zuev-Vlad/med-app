import { Container } from "react-bootstrap"
import { AppNavBar } from "../../AppNavBar/AppNavBar"
import styled from 'styled-components'

const Content = styled.div`
    height:100vh;
`


interface PageWrapperPropsInterface {
    children?: React.ReactNode
}
export const PageWrapper: React.FC<PageWrapperPropsInterface> = ({ children }) => {
    return (
        <Content>
            <AppNavBar />
            <Container className="py-5">
                {children}
            </Container>
        </Content>
    )
}