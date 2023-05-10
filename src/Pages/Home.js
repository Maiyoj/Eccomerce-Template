import { Fragment } from "react";

const Home = ()=>{
    const image = require('../Images/Home.png');
    return (
    <Fragment>
     <div style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '70vh'
    }}>
      <h1>My App</h1>
    </div>
    <div className="">
    <div>
        <p>Shopping And </p>
        <p>Department Store.</p>
        <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
    </div>
    <div>
    <img src={`url(${image})`} alt="This is an image" />
    </div>
    </div>
    </Fragment>
    )
}

export default Home;