import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { CCol, CRow } from "@coreui/react";
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';


export default function Dashboard() {

    return (
        <>
            <Head title='Dashboard' />
            <CRow className='container-fluid' >
                <Sidebar />
                <CCol  xs={'auto'} >

                </CCol>
                <CCol >
                    <Header get="Dashboad"/>
                    <div >
                        <h1>Halaman Dashboard</h1>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button" active="true">
                            Log Out
                        </ResponsiveNavLink>

                    </div>
                </CCol>
            </CRow>

        </>
    )

}
