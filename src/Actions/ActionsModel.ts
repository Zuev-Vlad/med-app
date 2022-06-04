import { loaderAtom } from './../Recoil/Loader/loaderAtom';
import { useSetRecoilState } from 'recoil';
export class ActionsModel {
    private setAppLoading = useSetRecoilState(loaderAtom)

    private request(url: RequestInfo, params?: RequestInit) {
        const headers = params?.headers;
        const p = { ...params, headers: { ...headers, "mode": 'no-cors', "Content-Type": "application/json", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization" } }
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
        return this.request(url, { body: body });
    }
    async POST(url: string, body: BodyInit = "") {
        return this.request(url, { method: 'POST', body: body});
    }
    async PUT(url: string, body: BodyInit = "") {
        return this.request(url, { method: 'PUT', body: body });
    }
    async DELETE(url: string, body: BodyInit = "") {
        return this.request(url, { method: 'DELETE', body: body });
    }
}