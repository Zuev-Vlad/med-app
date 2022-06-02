import * as React from 'react'
import { Spinner } from 'react-bootstrap'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components'
import { loaderAtom } from '../../Recoil/Loader/loaderAtom';


const SpinerWrapper = styled.div<{ isShow?: boolean }>`
    display: ${({ isShow }) => isShow ? 'flex' : 'none'};
    align-items:center;
    justify-content:center;
    position:fixed;
    inset: 0 0 0 0;
    background: rgba(255,255,255, 0.6)
`;

export const AppLoader = () => {
    const { isLoading } = useRecoilValue(loaderAtom)
    return (
        <SpinerWrapper isShow={isLoading} >
            <Spinner animation="border" variant="primary" />
        </SpinerWrapper>
    )
}