//import Swiper component and modules
import { Swiper} from 'swiper/react';
import  {Autoplay, Thumbs, Pagination } from 'swiper';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";

//import custom styles
import './index.scss';


//interface for types props
export interface MySwiperProps {
  children : React.ReactChild | React.ReactNode
}


const MySwiper:React.FC<MySwiperProps> = ({children}) => {

  // custom config for autoplay
   const autoplayConfig = {
    delay: 3000,
    disableOnInteraction: false,
  };

  return (
      <Swiper loop={true} slidesPerView={"auto"} autoplay={autoplayConfig} spaceBetween={10} centeredSlides pagination={{ clickable: true }} grabCursor={true} modules={[Thumbs, Pagination, Autoplay]} className='slider'>
          {children}
      </Swiper>
  )
}

export default MySwiper;