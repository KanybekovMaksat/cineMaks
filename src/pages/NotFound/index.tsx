import { Box, Typography } from "@mui/material"



import lookingImg from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <img src={lookingImg} alt="Not found" className="NotFound-img" width="450px"/>
      <Typography variant="h4" component="h2" color="white">
        This is not the web-page you are looking for
      </Typography>;
    </Box>
  )
}

export default NotFound