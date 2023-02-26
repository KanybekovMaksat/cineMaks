import { Box } from '@mui/material'


import MySwiper from '../../components/organisms/Swiper'
import { SwiperSlide } from 'swiper/react'
import { useAuth } from '../../hooks/useAuth'
import 'swiper/css'
import { useNavigate } from 'react-router-dom'

import prem from '../../assets/images/luka.jpg'
import kino from '../../assets/images/panda.jpg'
import kinotwo from '../../assets/images/raya.jpg'
import kinofive from '../../assets/images/zootopia.jpg'
import imgOne from '../../assets/images/prem1.jpeg'
import imgTwo from '../../assets/images/prem2.jpeg'
import imgThree from '../../assets/images/prem3.jpeg'
import imgFour from '../../assets/images/prem4.jpeg'
import imgFive from '../../assets/images/prem5.jpeg'
import MoviesList from 'components/organisms/MoviesList'


const images = [
  { id: 1, image: prem },
  { id: 2, image: kino },
  { id: 3, image: kinotwo },
  { id: 4, image: kinofive }
]

const imagesList = [
  { id: 1, image: imgOne },
  { id: 2, image: imgTwo },
  { id: 3, image: imgThree },
  { id: 4, image: imgFour },
  { id: 5, image: imgFive }
]

const Home = () => {
  const { isAuth, email } = useAuth()

  const navigate = useNavigate()

  
  
  return (
    <>
      {true ? (
        <Box paddingTop='30px'>
          <MySwiper>
            {imagesList.map((item: any) => {
              return (
                <SwiperSlide className='slide' key={item.id}>
                  <img src={item.image} alt='' />
                </SwiperSlide>
              )
            })}
          </MySwiper>
          <Box display='flex' flexWrap='wrap' justifyContent='center'>
            <MoviesList/>
          </Box>
        </Box>
      ) : (
        navigate('/auth')
      )}
    </>
  )
}

export default Home
