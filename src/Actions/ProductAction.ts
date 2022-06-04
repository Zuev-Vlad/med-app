import { productsSearchSelector } from './../Recoil/Product/productsSearchSelector';
import { ActionsModel } from './ActionsModel';
import { loaderAtom, LoaderAtomProps } from './../Recoil/Loader/loaderAtom';
import { API_PATH } from './../Constants/ApiPath';
import { userAtom, UserProps } from './../Recoil/User/userAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ProductInterface, productsAtom } from './../Recoil/Product/productsAtom';


export class ProductAction extends ActionsModel {
    public productState = useRecoilValue(productsAtom)
    public filterProductState = useRecoilValue(productsSearchSelector)
    private setState = useSetRecoilState(productsAtom)
    private userData = useRecoilValue(userAtom)


    public addProduct(product: ProductInterface) {
        this.setState((oldState) => ([...oldState, product]))
        return this
    }

    public removeProduct(productId: string) {
        const newList = this.productState.filter((el) => el.id != productId)
        console.log({ newList })
        this.setState(newList)
        return this
    }

    async getProducts() {
        try {
            this.loading(true)
            const resp = await this.POST(API_PATH.product, JSON.stringify({ email: this?.userData?.email || '' }))
            if (!resp?.ok) {
                return this.showError('Сервер ответил ошибкой! Посмотрите консоль!')
            }
            const rjson = await resp.json() as any;
            const product = rjson?.medicine as ProductInterface[];
            if (product) this.setState([...product])
            this.loading(false)
        } catch (e) { this.showError('Возникла серьезная ошибка при отправке запроса!') }
    }

    async deleteProduct(ids: string[]) {
        const deleteData: any = []
        ids.map(id => deleteData.push({ id }))
        try {
            this.loading(true)
            const resp = await this.DELETE(API_PATH.product, JSON.stringify({ email: this?.userData?.email || '', medicine: deleteData }))
            if (!resp?.ok) return this.showError('Сервер ответил ошибкой! Посмотрите консоль!')
            this.loading(false)
        } catch (e) {
            this.showError('Возникла серьезная ошибка при отправке запроса!')
        }
        // ids.map(id => this.removeProduct(id))
        this.getProducts()
    }

    async addedProduct(product: ProductInterface) {
        try {
            this.loading(true)
            const resp = await this.PUT(API_PATH.product, JSON.stringify({ email: this?.userData?.email || '', medicine: [product] }))
            if (!resp?.ok) {
                return this.showError('Сервер ответил ошибкой! Посмотрите консоль!')
            }
            this.loading(false)
        } catch (e) {
            this.showError('Возникла серьезная ошибка при отправке запроса!')
        }
        // this.addProduct(product)
        this.getProducts()
    }

}