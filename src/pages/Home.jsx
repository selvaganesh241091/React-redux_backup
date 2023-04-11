import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeCard from "../components/HomeCard";
import { fetchCars } from "../redux/reducer";

const Home = () => {
  const state = useSelector((state)=> state)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCars());
  },[])

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" ,marginTop : "30px" }}>
       {state.cars?.map((entity)=> (
          <HomeCard key={entity.carId} entity={entity}/>
       ))}
      </div>
    </div>
  );
};

export default Home;
