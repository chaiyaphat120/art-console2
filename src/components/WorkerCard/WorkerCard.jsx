import { Box, Typography } from "@material-ui/core"
import axios from "axios"
// import axios from 'axios'
import { useCallback, useContext, useEffect, useState } from "react"
import GlobalStyles from "../../constants/GlobalStyles"
import { Context } from "../../store/Stroe"
import { useStyles } from "./WorkerCardStyle"

const WorkerCard = () => {
    const [productionItems, setProductionItems] = useState([])
    const globalStyles = GlobalStyles()
    const styles = useStyles()
    const [, dispatch] = useContext(Context)
    const [loaded, setLoaded] = useState(false)
    const mcid = 1
    const API_URL = process.env.REACT_APP_API_URL

    const getProductionItemsFromApi = useCallback(async () => {
        console.log("data")
        try {
            const dataFromApi = await axios.get(
                `${API_URL}/console/liveboard?mcid=${mcid}`
            )
            const extractedDataFromApi = dataFromApi.data[0]
            if (extractedDataFromApi) {
                setProductionItems(extractedDataFromApi)
                dispatch({
                    type: "SET_WORKER",
                    data: extractedDataFromApi.worker_code,
                })
            }
        } catch (ex) {
            console.error(ex)
        }
    }, [API_URL, mcid, dispatch])

    useEffect(() => {
        if (!loaded) {
            getProductionItemsFromApi()
        }
        return () => {
            setLoaded(true)
        }
    }, [dispatch, mcid, getProductionItemsFromApi, loaded])

    let productionComponent = (
        <Box
            height="100%"
            width="100%"
            className={[globalStyles.box, styles.workerContainer].join(" ")}
        />
    )
    if (productionItems) {
        const { worker } = productionItems
        productionComponent = (
            <Box
                height="100%"
                width="100%"
                className={[globalStyles.box, styles.workerContainer].join(" ")}
            >
                <Typography
                    variant="h5"
                    className={[globalStyles.whiteText].join(" ")}
                >
                    {worker}
                </Typography>
            </Box>
        )
    }
    return productionComponent
}

export default WorkerCard
