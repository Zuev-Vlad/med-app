import { NextUIProvider } from '@nextui-org/react'
import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from '../Page/AuthPage/AuthPage'
import { IndexPage } from '../Page/IndexPage/IndexPage'
import { MedicalListPage } from '../Page/MedicalListPage/MedicalListPage'
import { PrivateRouter } from './PrivateRouter/PrivateRouter'
import { PAGE_PATH_NAME } from '../Constants/PagePathName'

export const AppRouter: React.FC = () => {

    return (
        <NextUIProvider>
            <Routes>
                <Route path={PAGE_PATH_NAME.index} element={<IndexPage />} />
                <Route path={PAGE_PATH_NAME.auth} element={(<AuthPage />)} />
                <Route path={PAGE_PATH_NAME.medicalList} element={<PrivateRouter children={<MedicalListPage />} />} />
                
                {/* Роутинг с несуществующих страниц на главную (можно добавить 404 page) */}
                <Route path="*" element={<Navigate to={PAGE_PATH_NAME.index} />} />
            </Routes>
        </NextUIProvider>
    )
}