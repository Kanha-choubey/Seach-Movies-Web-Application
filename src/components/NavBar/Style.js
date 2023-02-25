import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  toolbar: {
    height: "60px",
    display: "flex",
    justifyContent: "space-between",

    margieLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      flexWrap: "wrap",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginLeft: "0",
      display: "none",
    },
  },
}));
