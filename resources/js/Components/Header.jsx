import { useState } from "react";

import {

    CContainer, CHeaderBrand,
    CHeaderToggler, CCollapse, CHeaderNav, CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider
    , CForm, CFormInput, CButton, CHeader, CNavbarBrand, CNav

} from '@coreui/react'

export default function Header() {
    const [visible, setVisible] = useState(false)

    return (

        <>
            <CHeader className="container col-8 col-7" position="sticky" >
                <CContainer fluid>
                    <CHeaderBrand className="col-3"  href="#">Header</CHeaderBrand>





                    <CForm className="d-flex justify-content-end float-end">
                        <CNav className="justify-content-end">
                            <CNavItem>
                                <CNavLink href="#" active>
                                    Active
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink href="#" disabled>
                                    Disabled
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                        </CForm>


                </CContainer>
            </CHeader>
        </>
    )
}
