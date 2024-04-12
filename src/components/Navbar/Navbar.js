import React, { useState } from 'react';
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
//import { Link } from 'react-router-dom';
import { data } from '../../data/NavbarData';

const Navbar = () => {
    // State to control mobile menu visibility
	const [show, setShow] = useState(false);
 
    // FUnction to toggle mobile 
	const handleClick = () => {
		setShow(!show);
	};

	 // Function to scroll to a specific element on the page
	const scrollTo = (id) => {
        const element = document.getElementById(id);
    
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };
    

	 // Function to handle navigation when a menu item is clicked
	const closeMobileMenu = (to, id) => {
		// Check if an id is provided and if the current path is the homepage
		if (id && window.location.pathname === '/') {
		// Scroll to the specified element
			scrollTo(id);
		}

		  // Navigate to the specified route
		window.location.href = to;
		  // Close the mobile menu
		setShow(false);
	};

	return (
		// Context provider to set icon color
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="./assets/logo.png" alt="logo" />
						Delta
					</NavLogo>
					{/* Mobile menu icon */}
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{/* Map over data array to create menu items */}
						{data.map((el, index) => (
							<NavItem key={index}>
								{/* Menu item with onClick event to handle navigation */}
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
