import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    paper : {
        borderRadius: theme.spacing(4),
        //padding : theme.spacing(0.7, 2, 2, 2),
     },
     tableRow : {
        "& .MuiTypography-root" : {
            fonFamily: 'Signika Negative',
            
        
         },
     },
     tableHead : {
        "& .MuiTypography-root" : {
           fontFamily: 'Source Sans Pro',
           fontSize: "20px",
           color: "white"
        },
        "& .MuiTableCell-root" : {
           // borderLeft: "1px solid",
            borderBottom: "none",
            //marginBottom: theme.spacing(0),
            paddingBottom: theme.spacing(1)
        }
    },

}));
export default useStyles;