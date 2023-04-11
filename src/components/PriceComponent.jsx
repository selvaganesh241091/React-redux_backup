import { useSelector } from "react-redux";
import { routesUrl } from "./RouterComponent";
import Typography from "@mui/material/Typography";

const PriceComponent = () => {
  const state = useSelector((state) => state);
  const url = window.location.href;

  const showPrice =
    url.includes(routesUrl.engine) ||
    url.includes(routesUrl.interior) ||
    url.includes(routesUrl.summary);

  return (
    <div style={{
      float: "right"}}>
    {showPrice && (
    <div
      style={{
        display: "inline-block",
        border: "1px solid black",
        borderRadius: "5%",
        padding: "0.5rem",
        margin: "1rem",
        marginBottom:"0.2rem"
      }}
    >
    
      <Typography style={{ flex: 1 }} variant="h6" component="div">
      <strong>Recommended Grand Total - </strong>
      &#8364;{state.price}
      </Typography>
      
    </div>
    )}
    </div>
    
  );
};

export default PriceComponent;
