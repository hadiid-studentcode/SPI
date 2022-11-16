import {
    CSidebar,
    CSidebarNav,
    CNavTitle,
    CNavItem,
    CBadge,
    CNavGroup,
    CSidebarToggler,
    CSidebarBrand


} from '@coreui/react'

import { Link } from '@inertiajs/inertia-react';




import { HiAcademicCap } from "react-icons/hi";
export default function Sidebar() {
    return (

        <>

            <CSidebar position='sticky'  >
                <CSidebarBrand>Sidebar Brand</CSidebarBrand>
                <CSidebarNav>
                    <CNavTitle>Nav Title</CNavTitle>
                    <CNavItem component={Link} href="/dashboard">

                        <HiAcademicCap size={20} /> Dashboard
                    </CNavItem>
                    <CNavItem component={Link} href="/dashboard">

                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>
                    <CNavGroup toggler="Nav dropdown">
                        <CNavItem href="#">
                            <HiAcademicCap/>  Tambah Barang
                        </CNavItem>
                        <CNavItem href="#">
                            siip

                        </CNavItem>
                    </CNavGroup>
                </CSidebarNav>
                <CSidebarToggler />
            </CSidebar>
        </>
    )
}
