import * as React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { ModalAction } from '../../../Actions/ModalAction'
import { ProductAction } from '../../../Actions/ProductAction'
import { ProductInterface } from '../../../Recoil/Product/productsAtom'

export const AddNewProductForm = () => {
    const productAction = new ProductAction()
    const modalAction = new ModalAction()
    const addNewProduct = (e: any) => {
        e.stopPropagation()
        e.preventDefault()
        const fd = new FormData(e?.target as HTMLFormElement)

        const newProduct: ProductInterface = {
            id: String(Date.now()),
            name: String(fd.get('name')) || '',
            count: Number(fd.get('count')) || 1,
            description: String(fd.get('description')) || ''
        }
        productAction.addProduct(newProduct)
        modalAction.setOpen(false).reset()
    }

    return (
        <Form onSubmit={addNewProduct}>
            <Form.Group>
                <Form.Label>Название</Form.Label>
                <Form.Control type="text" name="name" required placeholder="Например: Анальгин" />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Кол-во</Form.Label>
                <Form.Control type="number" name="count" required placeholder="1" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Описание</Form.Label>
                <Form.Control as="textarea" name="description" rows={3} />
            </Form.Group>

            <Form.Group className="py-3 text-end">
                <Button type="submit">Добавить</Button>
            </Form.Group>

        </Form>
    )
}