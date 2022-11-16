import React from 'react'
import {
    CAvatar,
    CBadge,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'

import avatar8 from '../../../public/Assets/images/avatars/8.jpg'


export default function AppHeaderDropdown() {
return (
    <>
        <CDropdown variant="nav-item">
            <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
                <CAvatar src={avatar8} size="md" />
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilBell} className="me-2" /> */} bell
                    Updates
                    <CBadge color="info" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilEnvelopeOpen} className="me-2" /> */} amplop
                    Messages
                    <CBadge color="success" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilTask} className="me-2" /> */} task
                    Tasks
                    <CBadge color="danger" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilCommentSquare} className="me-2" /> */} koment
                    Comments
                    <CBadge color="warning" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilUser} className="me-2" /> */} users
                    Profile
                </CDropdownItem>
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilSettings} className="me-2" /> */} settings
                    Settings
                </CDropdownItem>
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilCreditCard} className="me-2" /> */} paym
                    Payments
                    <CBadge color="secondary" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilFile} className="me-2" /> */} pro
                    Projects
                    <CBadge color="primary" className="ms-2">
                        42
                    </CBadge>
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">
                    {/* <CIcon icon={cilLockLocked} className="me-2" /> */}
                    Lock Account
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>

    </>
)
}
