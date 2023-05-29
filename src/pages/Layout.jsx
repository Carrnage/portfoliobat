import { Outlet, NavLink } from "react-router-dom";
import { Button, Navbar, Spacer } from "@nextui-org/react";
import { User, Send, Home, Folder } from "react-iconly";

const Layout = () => {
  return (
    <>
        <Navbar isBordered variant={"sticky"} >
            <Navbar.Content>
                <Navbar.Link href='/'>
                    <Button color={'neutral'}>
                        <Home set="bold"/>
                        <NavLink to="/" style={({ isActive }) => (isActive ? {color: 'purple'} : {color: 'blue'})}>Home</NavLink>
                    </Button>
                </Navbar.Link>
                <Navbar.Link href='/Contact' >
                    <Button color={'neutral'}>
                        <Send set="bold" />
                        <NavLink to='/Contact' style={({ isActive }) => (isActive ? {color: 'purple'} : {color: 'blue'})}>Contact Us</NavLink>
                    </Button>
                </Navbar.Link>
                <Navbar.Link href='/About'>
                    <Button color={'neutral'} href="/About">
                        <User set="bold" />
                        <NavLink to='/About' style={({ isActive }) => (isActive ? {color: 'purple'} : {color: 'blue'})} >About</NavLink>
                    </Button>
                </Navbar.Link>
                <Navbar.Link href='/Work'>
                    <Button color={'neutral'}>
                        <Folder set="bold" />
                        <NavLink to='/Work' style={({ isActive }) => (isActive ? {color: 'purple'} : {color: 'blue'})} >My Work</NavLink>
                    </Button>
                </Navbar.Link>
            </Navbar.Content>
        </Navbar>
        <Spacer gap={2}/>

      <Outlet />
    </>
  )
};

export default Layout;