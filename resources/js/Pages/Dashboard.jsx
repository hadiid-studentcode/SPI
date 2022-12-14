import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Sidebar from '@/Components/Sidebar';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

import {

    CRow, CCol

} from '@coreui/react'



export default function Dashboard(props) {
    return (

        // dashboard milik laravel

        // <AuthenticatedLayout
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        //     <Head title="Dashboard" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>

        // dashboard punya laravel

        <>
            <Head title='Dashboard' />





            <CRow>

                <CCol xs={'auto'}>
                    <Sidebar />
                </CCol>
                <CCol xs>
                    <Header />
                    <div >
                        <ResponsiveNavLink method="post" href={route('logout')} as="button" active="true">
                            Log Out
                        </ResponsiveNavLink>

                    </div>
                </CCol>
            </CRow>


            {/* Akses backend */}


            {/* Akses backend */}






        </>

    );
}
