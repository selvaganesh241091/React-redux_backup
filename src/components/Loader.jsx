import { ThreeDots  } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots 
  height="100"
  width="100"
  color="blue"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
  );
};

export default Loader;
