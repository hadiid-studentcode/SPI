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
            <CRow>
                <CCol xs={'auto'} >
                    <Sidebar />
                </CCol>
                <CCol xs >
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
