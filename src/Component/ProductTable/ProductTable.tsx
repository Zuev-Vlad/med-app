import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ButtonGroup, Table } from "react-bootstrap"
import { ProductInterface } from "../../Recoil/Product/productsAtom"


interface ProductPropsInterface {
    arrayProduct: ProductInterface[]
    onClickDelete?: (id: string) => void
}

export const ProductTable = ({ arrayProduct, onClickDelete = () => ({}) }: ProductPropsInterface) => {

    return (
        <Table responsive='sm' striped bordered >
            <thead>
                <tr>
                    <th className="text-nowrap text-center">#</th>
                    <th className="text-nowrap text-center">Название</th>
                    <th className="text-nowrap text-center">Кол-во</th>
                    <th className="text-nowrap">Описание</th>
                    <th className="text-nowrap text-center">Срок годности</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {arrayProduct.map((product, i) => (
                    <tr key={product?.id}>
                        <td data-name='Номер' className="text-center">{i + 1}</td>
                        <td data-name='Название' className="text-center">{product.name}</td>
                        <td data-name='Кол-во' className="text-center">{product.count}</td>
                        <td data-name='Описание'>{product.description?.substr(0, 50)}</td>
                        <td data-name='Срок годности'>до {product?.expirationDate ? new Date(product?.expirationDate || '').toLocaleDateString() : '--'}</td>
                        <td data-name='Кнопка купить'>
                            <div className="d-flex w-100 justify-content-center">
                                <Button className='me-2' size="sm" variant="success">Купить</Button>
                                <Button onClick={() => onClickDelete(product.id)} size="sm" variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}