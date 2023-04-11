import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEngines } from "../redux/reducer";
import { useEffect } from "react";
import EngineCard from "../components/EngineCard";

const Engine = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const location = useLocation();
  let carId = location.state.carId;

  useEffect(() => {
    dispatch(fetchEngines(carId));
  }, []);

  return (
    <div>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <h3>Select Engine Range</h3>
        {/* <h4>Price - {state.price}</h4> */}
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {state.engines?.map((entity) => (
          <EngineCard key={entity.engineId} entity={entity} />
        ))}
      </div>
    </div>
  );
};

export default Engine;
