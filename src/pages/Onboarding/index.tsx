import { Link } from "react-router-dom"
import MySwiper from "../../components/organisms/Swiper"
import './index.scss'
import { SwiperSlide } from 'swiper/react';

import prem from '../../assets/images/prem1.jpeg';
import kino from '../../assets/images/prem2.jpeg';
import kinotwo from '../../assets/images/prem3.jpeg';
import kinofive from '../../assets/images/prem4.jpeg';

const images = [
  {id:1, image: prem},
  {id:2, image: kino},
  {id:3, image: kinotwo},
  {id:4, image: kinofive},
  {id:5, image: prem},
]

const Onboarding = () => {
  return (
    <div className="Body">
      <MySwiper>
      {images.map((item:any) => {
            return <SwiperSlide className='slide' key={item.id}>
          <img src={item.image} alt="" />
        </SwiperSlide>
        })}
      </MySwiper>
      <div className="Onboarding">
        <h1 className="Onboarding-title">Welcome to CineMaks</h1>
        <p className="Onboarding-subtitle">The best movie streaming app of the century to make your days great!</p>
        <Link to="/auth" className="Onboarding-link">Get started</Link>
      </div>
    </div>
  )
}

export default Onboarding