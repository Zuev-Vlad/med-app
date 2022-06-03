import { selector } from "recoil";
import { searchStringProductAtom } from "../SearchProduct/searchStringProductAtom";
import { productsAtom } from "./productsAtom";

export const productsSearchSelector = selector({
    key: 'productsSearchSelector',
    get: ({ get }) => {
        const searchStr = get(searchStringProductAtom);
        const products = get(productsAtom)

        return products.filter(p => p.name.toLowerCase().indexOf(searchStr.toLowerCase()) != -1);
    }
}) 