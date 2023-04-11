import InteriorCard from "../components/InteriorCard";
import { useSelector } from "react-redux";

const Interior = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h3>Interior</h3>
        {/* <h4>Price - {state.price}</h4> */}
      </div>
      <InteriorCard />
    </div>
  );
};

export default Interior;
