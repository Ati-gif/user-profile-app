import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { AccountContext } from '../providers/AccountProvider'

// with useContext hook

const Navbar = () => {
    const { username } = useContext(AccountContext)
    const { pathname } = useLocation()
    return (
        <Menu>
            <NavLink to="/">
                <Menu.Item active={pathname === '/'}>
                    Home
                </Menu.Item>
            </NavLink>
            <NavLink to="/account/profile">
                <Menu.Item active={pathname === '/account/profile'}>
                    {username}
                </Menu.Item>
            </NavLink>
            <NavLink to="/users/new">
                <Menu.Item active={pathname === '/users/new'}>
                    new
                </Menu.Item>
            </NavLink>
        </Menu>
    )
}

export default Navbar;




