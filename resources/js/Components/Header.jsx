import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux'

import {

    CContainer, CHeaderBrand,
    CHeaderToggler, CCollapse, CHeaderNav, CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider
    , CForm, CFormInput, CButton, CHeader, CNavbarBrand, CNav, CHeaderDivider

} from '@coreui/react'
import { HiViewList, HiMenu, HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";
import AppHeaderDropdown from './AppHeaderDropdown';



export default function Header() {
    const [visible, setVisible] = useState(false)

    // const dispatch = useDispatch()
    // const sidebarShow = useSelector((state) => state.sidebarShow)

    return (

        <>
            <CHeader position="sticky" className="mb-4">
                <CContainer fluid>
                    {/* <CHeaderToggler
                        className="ps-1"
                        onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                    >
                        <HiMenu />
                    </CHeaderToggler> */}
                    <CHeaderBrand className="mx-auto d-md-none" to="/">
                        {/* <CIcon icon={logo} height={48} alt="Logo" /> */} logo
                    </CHeaderBrand>
                    <CHeaderNav className="d-none d-md-flex me-auto">
                        <CNavItem>
                            <CNavLink href="/dashboard">
                                Dashboard
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Users</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Settings</CNavLink>
                        </CNavItem>
                    </CHeaderNav>
                    <CHeaderNav>
                        <CNavItem>
                            <CNavLink href="#">
                                <HiOutlineBell size={25}/>
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">
                                <HiViewList size={25} />
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">
                                <HiOutlineChatAlt size={25} />
                            </CNavLink>
                        </CNavItem>
                    </CHeaderNav>
                    <CHeaderNav className="ms-3">
                        <AppHeaderDropdown/>
                    </CHeaderNav>
                </CContainer>
                <CHeaderDivider />
                <CContainer fluid>
                    {/* <AppBreadcrumb /> */}  breadcump
                </CContainer>
            </CHeader>
        </>
    )
}
