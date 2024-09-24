import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import Landingsmallcategory from '../Components/Landingsmallcategory';
import Taglinesec from '../Components/Taglinesec';
import NewLaunches from '../Components/NewLaunches';
import Marquee from '../Components/Marquee';


const Home = () => {

let images = [
    {
      image: 'https://img.freepik.com/free-vector/perfume-spray-bottle-podium-with-clouds-sky-mock-up-banner-glass-flask-mockup-blue-heaven-background-scent-fragrance-cosmetic-product-promotion-advertising-realistic-3d-vector-illustration_107791-4550.jpg?size=626&ext=jpg&ga=GA1.1.1450349076.1718553543&semt=ais_hybrid'
    },
    {
        image: 'https://img.freepik.com/free-vector/cosmetic-pump-bottle-banner_33099-2058.jpg?size=626&ext=jpg&ga=GA1.1.1450349076.1718553543&semt=ais_hybrid'
    },
    {
        image: 'https://img.freepik.com/free-vector/perfume-bottle-swirl-velvet-silk-fabric_33099-1547.jpg?size=626&ext=jpg&ga=GA1.1.1450349076.1718553543&semt=ais_hybrid'
    }
]

let marquee = [
  {
    img: './public/images/marquee1.svg'
  },
  {
    img: './public/images/marquee2.svg'
  },
  {
    img: './public/images/marquee3.svg'
  },
  {
    img: './public/images/marquee4.svg'
  },
  {
    img: './public/images/marquee5.svg'
  },
  {
    img: './public/images/marquee6.svg'
  },
]




  return (
    <div>
            <HeroSlider images={images}/>
            <Landingsmallcategory/>
            <Taglinesec/>
            <NewLaunches/>
            <Marquee images={marquee}/>
            
    </div>
  );
};

export default Home;
