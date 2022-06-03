import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Button, Form, FormControl } from "react-bootstrap"

type SearchParams = {
    onClickSearch: (str: string) => void
}

export const SearchProduct: React.FC<SearchParams> = ({ onClickSearch = (strSearch: string) => strSearch }) => {

    const [strSearch, setStrSearch] = React.useState("");

    React.useEffect(() => {
        onClickSearch(strSearch)
    }, [strSearch])

    return (
        <Form className="d-flex flex-grow-1 position-relative">
            <FormControl
                type="search"
                placeholder="Поиск по медикаментам"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setStrSearch(e.currentTarget.value)}
            />
            <Button
                variant="outline-success"
                className="d-flex align-items-center"
                onClick={(e) => onClickSearch(strSearch)}
            >
                <FontAwesomeIcon className="px-2" icon={faSearch} />
                Поиск
            </Button>
        </Form>
    )
}