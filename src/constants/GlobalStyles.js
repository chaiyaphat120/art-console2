import { makeStyles } from '@material-ui/core'
import { ThemeColors } from './ThemeColors'

const GlobalStyles = makeStyles({
    fullHeight: {
        height: '100%',
    },
    smallPadding: {
        padding: '20px',
    },
    box: {
        boxSizing: 'border-box',
        backgroundColor: ThemeColors.darkGrey,
        borderRadius: '1vh',
        borderColor: 'transparent',
        overflow: 'hidden',
    },
    backButton: {
        background: ThemeColors.lightGrey,
        color: ThemeColors.white,
        border: 1,
        borderStyle: 'solid',
        borderRadius: '1vh',
        borderColor: 'transparent',
        height: 48,
        padding: '0 30px',
        boxShadow: 'none',
        fontFamily: 'prompt',
        '&:hover': {
            background: ThemeColors.lightGrey,
            color: ThemeColors.white,
            boxShadow: 'none',
        },
    },
    confirmButton: {
        background: ThemeColors.blue,
        color: ThemeColors.white,
        border: 1,
        borderStyle: 'solid',
        borderRadius: '15px',
        borderColor: 'transparent',
        height: 48,
        padding: '0 30px',
        fontFamily: 'prompt',
        boxShadow: 'none',
        '&:hover': {
            background: ThemeColors.blue,
            color: ThemeColors.white,
        },
    },
    reasonBoxBtn: {
        background: ThemeColors.whiteGrey,
        color: ThemeColors.white,
        padding: '15px 0',
        flex: '0 0 49%',
        fontFamily: 'prompt',
        '&:hover': {
            background: ThemeColors.whiteGrey,
            color: ThemeColors.white,
        },
    },
    selectedReasonBoxBtn: {
        background: ThemeColors.blue,
        color: ThemeColors.white,
        padding: '15px 0',
        flex: '0 0 49%',
        fontFamily: 'prompt',
        '&:hover': {
            background: ThemeColors.blue,
            color: ThemeColors.white,
        },
    },
    bigButton: {
        padding: '2em',
        borderRadius: '2em',
    },
    semiBoldText: {
        fontWeight: 500,
    },
    boldText: {
        fontWeight: 600,
    },
    whiteText: {
        color: ThemeColors.white,
    },
    greyText: {
        color: ThemeColors.grey,
    },
    redText: {
        color: ThemeColors.red,
    },
    greenText: {
        color: ThemeColors.green,
    },
    greyButton: {
        display: 'none',
        backgroundColor: ThemeColors.lightGrey,
        color: ThemeColors.blue,
    },
    darkGreyBackground: {
        backgroundColor: ThemeColors.darkGrey,
    },
    lightGreyBackground: {
        backgroundColor: ThemeColors.lightGrey,
    },
    greyBorder: {
        borderColor: ThemeColors.lightGrey,
    },
})

export default GlobalStyles
