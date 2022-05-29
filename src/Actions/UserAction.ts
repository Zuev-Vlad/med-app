import { COOKIE_NAME } from './../Constants/CookieName';
import { userAtom } from './../Recoil/User/userAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Cookies from 'js-cookie';


export class UserAction {
    public userState = useRecoilValue(userAtom)
    private setUserState = useSetRecoilState(userAtom)

    public checkUserAuth() {
        return this.userState.isAuth
    }

    public logIn() {
        Cookies.set(COOKIE_NAME.auth, new Date().toJSON())
        this.setUserState({ ...this.userState, isAuth: true })
    }

    public logOut() {
        Cookies.set(COOKIE_NAME.auth, '')
        this.setUserState({ ...this.userState, isAuth: false })
    }

}