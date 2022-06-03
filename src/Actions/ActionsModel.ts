import { loaderAtom } from './../Recoil/Loader/loaderAtom';
import { useSetRecoilState } from 'recoil';
export class ActionsModel {
    private setAppLoading = useSetRecoilState(loaderAtom)

    private request(url: RequestInfo, params?: RequestInit) {
        const headers = params?.headers;
        const p = { ...params, headers: { ...headers, "Content-Type": "application/json" } }
        return fetch(url, p)
    }

    protected loading(flag: boolean) {
        this.setAppLoading((old) => ({ ...old, isLoading: flag }))
    }
    protected showError(textError: string) {
        this.loading(false)
        return alert(textError)
    }
    async GET(url: string, body: BodyInit = "") {
        return this.request(url, { body });
    }
    async POST(url: string, body: BodyInit = "") {
        return this.request(url, { method: 'POST', body });
    }
    async PUT(url: string, body: BodyInit = "") {
        return this.request(url, { method: 'PUT', body });
    }
    async DELETE(url: string, body: BodyInit = "") {
        return this.request(url, { method: 'DELETE', body });
    }
}