import { loaderAtom } from './../Recoil/Loader/loaderAtom';
import { useSetRecoilState } from 'recoil';
export class ActionsModel {
    private setAppLoading = useSetRecoilState(loaderAtom)

    protected loading(flag: boolean) {
        this.setAppLoading((old) => ({ ...old, isLoading: flag }))
    }
    protected showError(textError: string) {
        this.loading(false)
        return alert(textError)
    }
    async GET(url: string, body: BodyInit = "") {
        return fetch(url, { body });
    }
    async POST(url: string, body: BodyInit = "") {
        return fetch(url, { method: 'POST', body });
    }
    async PUT(url: string, body: BodyInit = "") {
        return fetch(url, {method: 'PUT', body });
    }
    async DELETE(url: string, body: BodyInit = "") {
        return fetch(url, { method: 'DELETE', body });
    }
}