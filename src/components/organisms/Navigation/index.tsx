//import hooks
import { useState } from 'react'


//import lib for routing
import { Outlet, useNavigate } from 'react-router-dom';


//import material ui components
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styled from '@emotion/styled';


//creating styles components
const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  &.Mui-selected {
    color:#E21221;
  }
`;


const Navigation = () => {
    //for navigate
    const navigate = useNavigate()

    //state for navigate
    const [value, setValue] = useState('home');


    //function for navigation after click a button
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <Outlet />
            <BottomNavigation className="Nav" sx={{ borderRadius: "45px" }} showLabels value={value} onChange={handleChange} >
                <StyledBottomNavigationAction  value={"home"} onClick={() => navigate('/home')} label="Home" icon={<HomeOutlinedIcon />}  />
                <StyledBottomNavigationAction  value={"explore"} onClick={() => navigate('/explore')} label="Explore" icon={<ExploreOutlinedIcon /> } />
                <StyledBottomNavigationAction  value={"favorite"} onClick={() => navigate('/favorite')} label="Favorite" icon={<BookmarksOutlinedIcon />} />
                <StyledBottomNavigationAction  value={"profile"} onClick={() => navigate('/profile')} label="Profile" icon={<AccountCircleOutlinedIcon />} />
            </BottomNavigation>
        </>
    )
}

export default Navigation