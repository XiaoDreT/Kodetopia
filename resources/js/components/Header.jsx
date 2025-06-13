import React from "react";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


const Header = () => {

    return (
        <Navbar fluid>
            <NavbarBrand href="/">
                <img src="/images/icon.png" className="mr-3 h-6 sm:h-9" alt="Kodetopia" />
                <span className="self-center whitespace-nowrap text-xl font-semibold ">Kodetopia</span>
            </NavbarBrand>
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink href="#">Tentang Kami</NavbarLink>
                <NavbarLink href="#">Layanan</NavbarLink>
                <NavbarLink href="#">Portofolio</NavbarLink>
            </NavbarCollapse>
            <div className="flex md:order-2">
                <Button className="bg-green-400 hover:bg-green-500 cursor-pointer rounded-lg">Hubungi Kami</Button>
                <NavbarToggle />
            </div>
        </Navbar>
    );
}

export default Header;
