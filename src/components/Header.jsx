import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { routesUrl } from "./RouterComponent";
import { useNavigate } from "react-router-dom";
import { setPrice } from "../redux/reducer";
import Typography from "@mui/material/Typography";


const Header = () => {

  const dispatch = useDispatch();
  const url = window.location.href;

  const showbackToDashboard = url.includes(routesUrl.summary);

  const navigate = useNavigate();

  const goToDashboard = () => {
    dispatch(setPrice(0));
    navigate(routesUrl.home);
  };

  return (
    <AppBar position="static"   title="Some title">
      <Toolbar>
      <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },textAlign : "center" }}
          >
            Car Configurator
            </Typography>
        {showbackToDashboard && (
        <Button color="inherit" onClick={goToDashboard}>
          Back To Dashboard
        </Button>
      )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
