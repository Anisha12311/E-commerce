import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';

import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {useNavigate} from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { gettotalcart } from '../Reducer/CartSlice';
import logo from '../Assert/logo.png'
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      width: '40%',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    fontSize:'14px',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
const Header = () => {


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlecart = () => {
    navigate("/cart")
  }

  const {cart,items,totalPrice,totalQty} = useSelector((state) => state.allcart)
  console.log("cart",cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(gettotalcart())
  },[ cart ])
  return (
    <div>
       <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
        <img width = {150} height = {56} alt="" src={logo} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0,
              width : '15%',
              display: { xs: 'none', md: 'flex' },
             
              fontWeight: 500,
              marginLeft : '15px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            E-commerce
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
          <Box sx={{ flexGrow: 1, display: { xl:'flex', width : '100%',mr : 10} }}>
               <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Box sx={{ flexGrow: 1, display: { xs : 'flex',  md: 'flex', width : '100%'} }}>
                <MenuItem >
                <Typography onClick = {handlecart} textAlign="center" ><div><AddShoppingCartIcon style = {{width : 35 , height : 30,marginTop : '5px'}}/></div> </Typography>
                
                </MenuItem>
                <div style = {{marginTop : '5px',marginLeft : '-9px', padding : 0}}><div>Cart</div><div>{totalQty}&nbsp;items</div></div>
          </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default Header





