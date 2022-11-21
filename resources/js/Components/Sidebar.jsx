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
import logo from '../../../public/Assets/img/Logo.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'




import { HiAcademicCap } from "react-icons/hi";
export default function Sidebar() {
    return (

        <>

            <CSidebar className='mb' position='sticky'  >
                <CSidebarBrand className='d-none d-md-flex'  >
                    <img src={logo} alt="" width={100} />
                </CSidebarBrand>
                <CSidebarNav>
                      <SimpleBar>
                 <CNavTitle>Nav Title</CNavTitle>
                    <CNavItem component={Link} href="/dashboard">

                        <HiAcademicCap size={20} /> Dashboard
                    </CNavItem>
                    <CNavItem component={Link} href="/dashboard">

                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>
                      <CNavItem component={Link} href="/dashboard">

                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>  <CNavItem component={Link} href="/dashboard">

                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>  <CNavItem component={Link} href="/dashboard">

                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>  <CNavItem component={Link} href="/dashboard">

                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>  <CNavItem component={Link} href="/dashboard">

                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>  <CNavItem component={Link} href="/dashboard">

                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>  <CNavItem component={Link} href="/dashboard">

                        With badge
                        <CBadge color="primary ms-auto">NEW</CBadge>
                    </CNavItem>  <CNavItem component={Link} href="/dashboard">

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
                 </SimpleBar>
                </CSidebarNav>

                <CSidebarToggler className='sidebar-toggler' />
            </CSidebar>
        </>
    )
}
