import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Form, FormControl } from "react-bootstrap"

export const SearchProduct = () => {
    return (
        <Form className="d-flex flex-grow-1">
            <FormControl
                type="search"
                placeholder="Поиск по медикаментам"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success" className="d-flex align-items-center">
                <FontAwesomeIcon className="px-2" icon={faSearch} />
                Поиск
            </Button>
        </Form>
    )
}