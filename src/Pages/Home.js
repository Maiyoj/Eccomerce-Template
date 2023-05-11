import { Fragment } from "react";

const Home = ()=>{
    const image = require('../Images/bg-stage.png');
    return (
    <Fragment>
      <div
      className="bg-cover bg-center flex items-center">
       <img src={image} alt="Example" className="h-96" />
       </div>
      <div className="ml-10">
        <h1 className="text-3xl font-bold">Shopping And Department Store.</h1>
        <p className="text-lg">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
      </div>
    </Fragment>
    )
}

export default Home;