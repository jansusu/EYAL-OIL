import React from 'react';
import './home.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Roundcastor from '../images/Roundcastor.jpg';
import Rcoconut from '../images/Rcoconut.jpg';
import Rsessame from '../images/Rsessame.webp';
import Rground from '../images/Rground.webp';



const Home = () => {
 
  return (
    <div>
      <div className='top'>
        <img src={Rcoconut} alt=''/>
        <img src={Rground} alt=''/>
        <img src={Rsessame} alt=''/>
        <img src={Roundcastor} alt=''/>
      </div>
      <div className='container-fluid top1' >
       <div className='row'>
        <div className='col-lg-3'>Coconutoil</div>
        <div className='col-lg-3'>Groundoil</div>
        <div className='col-lg-3'>Sessameoil</div>
        <div className='col-lg-3'>Casteroil</div>
       </div>
      </div>
      <div className='top2'>
        <div className='col-lg-7'>
          <p>A Healthy Heart With</p>
          <h1>Healthy oil</h1>
        </div>
        <div className='col-lg-5'></div>
      </div>
      
     
      <div className='top4'>
        <p>Chase the <span className='spn'>Flavor</span> and <br/><span className='spn'>Serve</span>  The Best</p>
      </div>
     
      <div className='top5'>
        <p>Taste <span>HEALTH</span>In <br/>  Every <span>BITE</span></p>
      </div>
      
      <div className='top6'>
        <p>The <span>Purest</span> <br/>and<span>Unadultrated</span></p>
      </div>
      
      
    </div>
  )
}

export default Home
