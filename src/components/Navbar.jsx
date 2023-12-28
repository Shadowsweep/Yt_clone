import { Stack,Button } from "@mui/material";
import { Link } from "react-router-dom";
// import {something} from "../utils/constants"
import logo from "../utils/logo.png";
import { SearchBar } from "./";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
// const {logo} = data;
const Navbar = () => {
  const navigate = useNavigate(); // Call useNavigate inside the functional component

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} onClick={() => navigate('/')} />
      </Link>
      <SearchBar />
      <Button
      style={{
    color: 'white',
    backgroundColor: '#30e14e',
    borderColor: 'black',
    display:'flex',
    width: '10%',
  }}
  onClick={() => navigate('/contactme')}
  >
      Contact Me 
      </Button>
     
    </Stack>
  );
};


export default Navbar;
