import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavbarMenu,
  UserImg,
  DropDown,
  SignOut,
  ImgLogo,
} from "./NavbarElements";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkR, useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../../features/user/userSlice.js";

const Navbar = ({ HandleClick }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const HandleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 300 });
  };

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="/" onClick={scrollToTop}>
          <ImgLogo src="/images/Logo.png" alt="atom" />
        </NavLogo>
        {!userName ? (
          <>
            <MobileIcon onClick={HandleClick}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={300}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={300}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={300}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink onClick={HandleAuth}>Sign In</NavBtnLink>
            </NavBtn>
          </>
        ) : (
          <>
            <NavbarMenu>
              <LinkR to="/home">
                <img src="/images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
              </LinkR>
              <LinkR to="/search">
                <img src="/images/search-icon.svg" alt="SEARCH" />
                <span>SEARCH</span>
              </LinkR>
              <LinkR to="/home">
                <img src="/images/white-book.svg" alt="LIBRARY" />
                <span>LIBRARY</span>
              </LinkR>
            </NavbarMenu>
            <SignOut>
              <UserImg src={userPhoto} alt={userName} />
              <DropDown>
                <span onClick={HandleAuth}>Sign out</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
