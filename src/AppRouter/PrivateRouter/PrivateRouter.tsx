import * as React from "react"
import { Navigate, Route } from "react-router-dom"
import Cookies from 'js-cookie'
import { COOKIE_NAME } from "../../Constants/CookieName"
import { PAGE_PATH_NAME } from "../../Constants/PagePathName"

interface InterfacePrivateRouter {
    children: React.ReactNode
}

export const PrivateRouter: React.FC<InterfacePrivateRouter> = ({ children }) => {
    /**
     * Функция которая просто смотрит
     * наличие куки, но никак ее не проверяет
     * т.к. это бессмылсенно в данном приложении
     */
    const hasAuthCookie = () => Cookies.get(COOKIE_NAME.auth)
    return (
        <>
            {hasAuthCookie()
                ? children
                : <Navigate to={PAGE_PATH_NAME.auth} />}
        </>

    )
}