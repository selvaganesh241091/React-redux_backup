import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActions, Button, Typography, CardContent } from "@mui/material";
import { setPrice } from "../redux/reducer";
import { routesUrl } from "../components/RouterComponent";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Summary = () => {
  const imageUrl = "https://www.gpas-cache.ford.com/guid/d30b872f-8f50-314e-b50e-42577eb1d663.png";
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (

    <Grid container spacing={2}>
      <Grid item xs={3}>
        <h2>YOUR NEW
          FORD MUSTANG MACH‑E</h2>
        <p style={{ fontFamily: "sans-serif" }}>This exact vehicle specification is no longer in stock, but if you would like to be kept advised of when 2023 Model Year becomes available to order, please click the ‘Get Stock Alerts’ button below.

          Ford will then contact you when the Mustang Mach-E you are interested in is available to order. Alternatively, you can also request a contact from a Ford Dealer.</p>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <Typography>
            <strong>Summary</strong>
          </Typography>
          <CardMedia
            component="img"
            height="300"
            width="600"
            image={imageUrl}
            alt="Engine"
          />
          <CardContent>
            <Typography>
              <strong>Recommended on road price : </strong> &#8364;{state.price}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>


  );
};

export default Summary;
