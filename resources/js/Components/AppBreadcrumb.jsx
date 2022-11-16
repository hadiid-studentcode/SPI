import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

export default function AppBreadcrumb(props) {

console.log(props);
    const title = props.get

    return (
        <>
            <CBreadcrumb className=' className="m-0 ms-2"'>
                <CBreadcrumbItem  >Home</CBreadcrumbItem>
                <CBreadcrumbItem active>{title}</CBreadcrumbItem>
            </CBreadcrumb>
        </>
    )

}
