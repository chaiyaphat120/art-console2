const { createMuiTheme } = require("@material-ui/core")

export const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h1: {
                fontWeight: 100,
            },
            h2: {
                fontWeight: 100,
            },
            h3: {
                fontWeight: 100,
            },
            h4: {
                fontWeight: 100,
            },
            h5: {
                fontWeight: 100,
            },
            h6: {
                fontWeight: 100,
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})

//theme.breakpoints.down("xl")  ตั้งแต่  1280 ลงมา   =>1280
//theme.breakpoints.up("xl")  ตั้งแต่  1280  ขึ้นไป   =>1280
//theme.breakpoints.between("xs", "sm")  //0 - 599px   *sm =  600  ** 600-1 = 599
theme.typography.h1 = {
    [theme.breakpoints.between("xs", "sm")]: {
        //0 - 599px      //ตัวสุดท้าย - 1
        fontSize: "2.5rem",
        lineHeight: "2.8rem",
    },
    [theme.breakpoints.between("sm", "md")]: {
        //600 - 959 px
        fontSize: "3.3rem",
        lineHeight: "3.6rem",
    },
    [theme.breakpoints.between("md", "xl")]: {
        //960 - 1919px
        fontSize: "5.5rem",
        lineHeight: "5.8rem",
    },
    [theme.breakpoints.up("xl")]: {
        //1920 - up
        fontSize: "9.8125rem",
        lineHeight: "10rem",
    },
}
theme.typography.h2 = {
    [theme.breakpoints.down("xs")]: {
        fontSize: "2.2rem",
        lineHeight: "2.5rem",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "3rem",
        lineHeight: "3.3rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "5rem",
        lineHeight: "5.3rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "8rem",
        lineHeight: "8.3rem",
    },
}
theme.typography.h3 = {
    [theme.breakpoints.down("xs")]: {
        fontSize: "1.8rem",
        lineHeight: "2.1rem",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "2.6rem",
        lineHeight: "2.9rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "3.2rem",
        lineHeight: "3.5rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "5.5rem",
        lineHeight: "5.8rem",
    },
}
theme.typography.h4 = {
    [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
        lineHeight: "1.8rem",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "2.3rem",
        lineHeight: "2.6rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
        lineHeight: "2.8rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "3.875rem",
        lineHeight: "4.1rem",
    },
}
theme.typography.h5 = {
    [theme.breakpoints.down("xs")]: {
        fontSize: "1.2rem",
        lineHeight: "1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "2rem",
        lineHeight: "2.3rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2.2rem",
        lineHeight: "2.5rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "3.1rem",
        lineHeight: "3.5rem",
    },
}
theme.typography.h6 = {
    [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.2rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "1.75rem",
    },
}
theme.typography.h6 = {
    [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem",
        lineHeight: "1.1rem",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        lineHeight: "1.3rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.2rem",
        lineHeight: "1.5rem",
    },
    [theme.breakpoints.up("xl")]: {
        fontSize: "1.75rem",
        lineHeight: "2.5rem",
    },
}
