import { styled } from "@mui/material/styles"

const PREFIX = "Search"
export const classes = {
    root: `${PREFIX}-root`,
    searchBar: `${PREFIX}-searchBar`,
    searchButton: `${PREFIX}-searchButton`,
    chip: `${PREFIX}-chip`,
}

export const Root = styled("div")(({ theme }) => ({
    [`&.${classes.root}`]: {
        "& .MuiTextField-root": {
            margin: theme.spacing(0.5, 0),
            marginTop: '20px !important',
        },

        "& .MuiTextField-root input": {
            borderRadius:'0px !important'
        },

        "& .MuiFormLabel-root": {
            color: "#22223b",
            fontWeight:'bold',
            fontFamily:'Nunito',
            fontSize:'15px'
        },

        "& .MuiChip-filled": {
            background: "#ffffff70 !important",
        },
        marginTop: "25px !important",
    },
    [`& .${classes.searchBar}`]: {
        marginBottom: "2rem",
        display: "flex",
        padding: theme.spacing(2),
        borderRadius: "5px",
        // backgroundColor: "rgba(255, 255, 255, .09)",
        backdropFilter: "blur(10px)",
        border:'1px solid rgba(179, 178, 178, 0.648)',
		backgroundColor:'white',
        boxShadow:'none',
    },

    [`& .${classes.searchButton}`]: {
        marginTop: 10,
        fontFamily:'Nunito !important',
        backgroundColor:'#023e8a !important'
    },

    [`& .${classes.chip}`]: {
        paddingBottom: "10px",
        
    },
}))

export default Root
