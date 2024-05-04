import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from 'react';

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#home" className="flex items-center hover:text-blue-500 transition-colors">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#home" className="flex items-center hover:text-blue-500 transition-colors">
                    About Us
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#home" className="flex items-center hover:text-blue-500 transition-colors">
                    Our Teachers
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <a href="#home" className="flex items-center hover:text-blue-500 transition-colors">
                    Notices
                </a>
            </Typography>
        </ul>
    );
}

const NavbarLanding = ({Logo}) => {
    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3 text-black mb-10 shadow-none border-none">
            <div className="flex items-center justify-between text-blue-gray-900">
                <div>
                    <img src={Logo} alt="DOC" className="h-20"/>
                </div>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <FaTimes className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <FaBars className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
};

export default NavbarLanding;
