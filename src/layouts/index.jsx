import FilterSidebar from "./leftbar/FilterSidebar.jsx";
import HomePage from "../pages/HomePage.jsx";
import {useEffect, useRef, useState} from 'react';
import {
    LayoutContainer,
    LayoutContent,
    MainContent,
    Navbar,
    StickySidebar, ToggleButton,
} from "./styles.js";
import {ToggleLeftButton} from "./leftbar/styles.js";
import {FaCartShopping} from "react-icons/fa6";
import {Link} from "react-router-dom";

export default function MainLayout() {
    const [isOpen, setIsOpen] = useState(false);
    const leftSidebarRef = useRef(null);
    const toggleLeftButtonRef = useRef(null);

    const toggleSidebar = () => setIsOpen(!isOpen);

    //Sidebar closes on external sidebar click
    const handleClickOutside = (e) => {
        if (
            isOpen &&
            leftSidebarRef.current &&
            toggleLeftButtonRef.current &&
            !leftSidebarRef.current.contains(e.target) &&
            !toggleLeftButtonRef.current.contains(e.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <LayoutContainer>

            <Navbar>
                <ToggleLeftButton ref={toggleLeftButtonRef} onClick={toggleSidebar}>
                    {isOpen ? 'Close' : 'Filters'}
                </ToggleLeftButton>
                <Link to='/cart' target="_blank">
                    <ToggleButton>
                        <FaCartShopping/>
                    </ToggleButton>
                </Link>
            </Navbar>

            <LayoutContent>
                <StickySidebar ref={leftSidebarRef} isOpen={isOpen}>
                    <FilterSidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
                </StickySidebar>

                <MainContent>
                    <HomePage/>
                </MainContent>

            </LayoutContent>


        </LayoutContainer>
    )
}