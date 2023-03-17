import { styled } from "@mui/material/styles"

const PREFIX = "Posts"
export const classes = {
    root: `${PREFIX}-root`,
    mainContainer: `${PREFIX}-mainContainer`,
    smMargin: `${PREFIX}-smMargin`,
    actionDiv: `${PREFIX}-actionDiv`,
}

export const Root = styled("div")(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: "flex",
        justifyContent: "center",
        minHeight: 150,
        alignItems: "center",
        padding:'10px !important',
        borderRadius:'10px',
        border:'1px solid rgba(179, 178, 178, 0.648)',
		backgroundColor:'white',
    },
    [`& .${classes.mainContainer}`]: {
        display: "flex",
        alignItems: "center",
    },
    [`& .${classes.smMargin}`]: {
        margin: theme.spacing(1),
    },
    [`& .${classes.actionDiv}`]: {
        textAlign: "center",
    },
}))

export default Root
