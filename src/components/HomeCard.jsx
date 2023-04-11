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
import { setPrice } from "../redux/reducer";
import { useDispatch } from "react-redux";

const HomeCard = ({ entity }) => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToEngine = () => {
    dispatch(setPrice(entity.price))
    navigate("/" + routesUrl.engine, {
      state: {
        carId: entity.carId,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        titleTypographyProps={{variant:'subtitle2' }}
        title={entity.name}
        subheaderTypographyProps={{ color: 'white' }} 
        style={mystyle} 

        
      />
      <CardMedia
        component="img"
        height="194"
        image={entity?.imgUrl}
        alt="Car"
      />
      <CardContent>
         <h3>{entity.variant}</h3>
        <Typography variant="body2" color="text.secondary">
          <strong>Recommended OTR from </strong> - {entity.otr}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>WLTP Extra High</strong> - {entity.wltp}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>WLTP Overall Range</strong> - {entity.wltp0verall}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Price</strong> - &#8364;{entity.price}
        </Typography>
        <div >
        <Typography variant="body2"  sx={{ textAlign: "center" }} color="text.secondary">
          <strong>Features</strong> 
        </Typography>
        </div>
        <p style={{
        maxHeight: "150px",
        overflow: "auto",
        fontFamily:"system-ui"
      }}>{entity?.features} </p>
      </CardContent>
      <CardActions>
        <Button size="small" style={{width :"100%"}} variant="contained" color="success" onClick={goToEngine}>
         Select
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeCard;
