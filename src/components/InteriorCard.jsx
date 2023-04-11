import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActions, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routesUrl } from "./RouterComponent";
import { useSelector, useDispatch } from "react-redux";
import { increasePrice } from "../redux/reducer";

const InteriorCard = () => {
  const imageUrl = "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2023/collections/dm/23_FRD_MST_42403.tif?croppathe=1_3x2&wid=720&fit=crop&hei=480";
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const goToSummary = () => {
    dispatch(increasePrice(3000))
    navigate("/" + routesUrl.summary);
  };

  return (
    <Card style={{width:"1000px"}}>
      <Typography><strong>Cost</strong> - &#8364;3000</Typography>
      <CardMedia component="img" height="300" width="1200" image={imageUrl} alt="Engine" />
      <CardActions>
        <Button size="small" style={{width :"100%"}} variant="contained" color="success" onClick={goToSummary}>
          Select 
        </Button>
      </CardActions>
    </Card>
  );
};

export default InteriorCard;
