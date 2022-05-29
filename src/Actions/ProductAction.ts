import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ProductInterface, productsAtom } from './../Recoil/Product/productsAtom';


export class ProductAction {
    public productState = useRecoilValue(productsAtom)
    private setState = useSetRecoilState(productsAtom)

    addProduct(product: ProductInterface) {
        this.setState((oldState) => ([...oldState, product]))
        return this
    }

    removeProduct(productId: string) {
        const newList = this.productState.filter((el) => el.id != productId)
        console.log({ newList })
        this.setState(newList)
        return this
    }

}