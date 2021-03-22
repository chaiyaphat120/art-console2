import { makeStyles } from '@material-ui/core'
const marginSize = 32
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100vw',
        height: '100vh',
    },
    leftContainer: {
        backgroundColor:'pink',
        [theme.breakpoints.up('sm')]: {
            padding: `${marginSize}px 0 ${marginSize}px ${marginSize}px`,
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '90%',
            padding: `${marginSize}px`,
        },
    },
    rightContainer: {
        [theme.breakpoints.up('sm')]: {
            padding: `${marginSize}px`,
        },
        [theme.breakpoints.down('xs')]: {
            padding: `0 ${marginSize}px ${marginSize}px ${marginSize}px`,
        },
    },
    productionContainer: {
        height: '100%',
    },
    machineStateContainer: {
        paddingRight: `${marginSize / 2}px`,
        [theme.breakpoints.up('sm')]: {
            height: '20%',
        },
        [theme.breakpoints.down('xs')]: {
            height: '25%',
        },
    },
    dateContainer: {
        paddingLeft: `${marginSize / 2}px`,
        [theme.breakpoints.up('sm')]: {
            height: '20%',
        },
        [theme.breakpoints.down('xs')]: {
            height: '25%',
        },
    },
    chartContainer: {
        paddingTop: `${marginSize}px`,
        [theme.breakpoints.up('sm')]: {
            height: '60%',
        },
        [theme.breakpoints.down('xs')]: {
            height: '75%',
        },
    },
    workerContainer: {
        paddingTop: `${marginSize}px`,
        [theme.breakpoints.up('sm')]: {
            height: '20%',
        },
        [theme.breakpoints.down('xs')]: {
            height: '30%',
            paddingBottom: `${marginSize}px`,
        },
    },
}))
