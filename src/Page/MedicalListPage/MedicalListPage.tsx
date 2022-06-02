import * as React from "react";
import { Button, Nav } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { ModalAction } from "../../Actions/ModalAction";
import { ProductAction } from "../../Actions/ProductAction";
import { AddNewProductForm } from "../../Component/Forms/AddNewProductForm/AddNewProductForm";
import { PageTitle } from "../../Component/PageElement/PageTitle/PageTitle";
import { ProductTable } from "../../Component/ProductTable/ProductTable";
import { SearchProduct } from "../../Component/SearchProduct/SearchProduct";
import { PageWrapper } from "../../Component/Wrappers/PageWrapper/PageWrapper";
import { SidebarWrapper } from "../../Component/Wrappers/SidebarWrapper/SidebarWrapper";


export const MedicalListPage: React.FC = () => {
    const productAction = new ProductAction()
    const products = productAction.productState
    const modalAction = new ModalAction()


    const addNewProduct = () => {
        modalAction
            .setTitle((<h2>Добавить новый товар</h2>))
            .setContent(<AddNewProductForm />)
            .setShowFooter(false)
            .setOpen(true)
    }

    React.useEffect(() => {
        productAction.getProducts()
    }, [])

    return (
        <PageWrapper>

            <SidebarWrapper>

                <SidebarWrapper.SidebarCol>
                    <Nav variant="pills" defaultActiveKey="#home" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#home">Дом</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#auto">Машина</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#dacha">Дача</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </SidebarWrapper.SidebarCol>

                <SidebarWrapper.ContentCol>
                    <PageTitle title="Мои лекарства" />
                    <div className="d-flex justify-content-between">
                        <Button variant="primary" className="me-3" onClick={addNewProduct}>Добавить препарат</Button>
                        <SearchProduct />
                    </div>
                    <div className="py-3">
                        <ProductTable onClickDelete={(id) => productAction.deleteProduct([id])} arrayProduct={products} />
                    </div>
                </SidebarWrapper.ContentCol>

            </SidebarWrapper>
        </PageWrapper>
    )
}