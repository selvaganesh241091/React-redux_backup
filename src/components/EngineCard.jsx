import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routesUrl } from "./RouterComponent";
import { useSelector, useDispatch } from "react-redux";
import { increasePrice } from "../redux/reducer";


const EngineCard = ({ entity }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToInterior = () => {
    dispatch(increasePrice(entity.price));
    navigate("/" + routesUrl.interior);
  };

  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            E
          </Avatar>
        }
        title={entity.ENGINE}
      />
      <CardMedia
        component="img"
        height="194"
        image={entity.imgUrl}
        alt="Engine"
      />
      <CardContent color="text.secondary">
        <Typography variant="body2" color="text.secondary">
          <strong>WLTP Extra High</strong> - {entity["WLTP Extra High"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>WLTP Overall Range</strong> - {entity["WLTP Overall Range"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Usable Battery Capacity</strong> -{" "}
          {entity["Usable Battery Capacity"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Performance 0-62 MPH</strong> -{" "}
          {entity["Performance 0-62 MPH"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Maximum Power</strong> - {entity["Maximum Power"]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Price</strong> - &#8364;{entity.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{width :"100%"}} variant="contained" color="success" onClick={goToInterior}>
          Select 
        </Button>
      </CardActions>
    </Card>
  );
};

export default EngineCard;
