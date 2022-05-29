import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cookies from 'js-cookie'
import * as React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, Navigate, useNavigate, useNavigationType } from 'react-router-dom'
import { COOKIE_NAME } from '../../Constants/CookieName'
import { PAGE_PATH_NAME } from '../../Constants/PagePathName'
import logo from './../../uploads/med-app-logo-2.png'


export const AppNavBar: React.FC = () => {
  const authToken = Cookies.get(COOKIE_NAME.auth)
  const changePath = useNavigate()

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="">
          <Link className='navbar-brand align-items-center d-flex' to={PAGE_PATH_NAME.index}>
            <FontAwesomeIcon size='2x' icon={faBriefcaseMedical} />
            <span className='px-3'>Моя аптечка</span>
          </Link>
        </Navbar.Brand>

        <Nav className="me-auto">
          <Link to={PAGE_PATH_NAME.medicalList} className="nav-link">Список лекарств</Link>
        </Nav>

        <Nav className="mr-0">
          {!authToken?.length
            ? <Link to={PAGE_PATH_NAME.auth} className="nav-link">Авторизоваться</Link>
            : <Nav.Item
              className="nav-link"
              onClick={() => {
                Cookies.set(COOKIE_NAME.auth, '')
                changePath(PAGE_PATH_NAME.index)
              }}
            >Выйти из профиля</Nav.Item>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}