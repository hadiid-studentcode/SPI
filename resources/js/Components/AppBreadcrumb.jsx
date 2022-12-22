import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

export default function AppBreadcrumb(props) {


    const title = props.get

    return (
        <>
            <CBreadcrumb className='m-0 ms-2'>
                <CBreadcrumbItem  >Home</CBreadcrumbItem>
                <CBreadcrumbItem active>{title}</CBreadcrumbItem>
            </CBreadcrumb>
        </>
    )

}
