import { Grid, ThemeProvider } from "@material-ui/core"
import React, { useContext } from "react"
import { Context } from "../../store/Stroe"
import { theme } from "../../ThemeFont"
import WorkerCard from "../WorkerCard/WorkerCard"

import { useStyles } from "./MainPageStyle"

const MainPage = (props) => {
    const styles = useStyles()
    const [state] = useContext(Context)
    console.log("new massage")
    return (
        <ThemeProvider theme={theme}>
            <Grid container direction="row" className={styles.root}>
                <Grid
                    container={true}
                    item={true}gi
                    xs={12}
                    sm={6}
                    direction="row"
                    className={styles.leftContainer}
                >
                    <Grid item xs={12} className={styles.productionContainer}>
                        {/* <ProductionCard /> */}
                    </Grid>
                </Grid>
                <Grid
                    container={true}
                    item={true}
                    xs={12}
                    sm={6}
                    direction="row"
                    alignContent="space-between"
                    className={styles.rightContainer}
                >
                    <Grid item xs={6} className={styles.machineStateContainer}>
                        {/* <MachineStateCard /> */}
                    </Grid>
                    <Grid item xs={6} className={styles.dateContainer}>
                        {/* <DateCard /> */}
                    </Grid>
                    <Grid item xs={12} className={styles.chartContainer}>
                        {/* <ChartCard /> */}
                    </Grid>
                    <Grid item xs={12} className={styles.workerContainer}>
                        <WorkerCard />
                    </Grid>
                </Grid>
            </Grid>
            {/* <NotificationOverlay /> */}
            {/* <ReasonOverlay open={isReasonDialogOpen} /> */}
        </ThemeProvider>
    )
}
export default MainPage
