import React from "react"

export const useFetch = (url:string) => {
    const [data, setData] = React.useState(null)
    const [isLoadingData, setIsLoadingData] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoadingData(true)
            fetch(url)
                .then((response) => response.json())
                .then((result) => {
                    setData(result)
                    setIsLoadingData(false)
                })
        }
        fetchData()
    }, [])
    return { data, isLoadingData }
}