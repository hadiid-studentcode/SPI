import React, { useEffect } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox
} from "mdb-react-ui-kit";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";



import Logo from "/public/Assets/img/Logo.png";
import Ipm from "/public/Assets/img/ipm.png";


function Login({ status, canResetPassword }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        nba: "",
        password: "",
        remember: "",
    });



    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };


    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };


    return (

        <MDBContainer className="my-5">
            <Head title="Login" />
            <MDBCard>
                <MDBRow className="g-0">
                    <MDBCol md="6" style={{ backgroundColor: "#FFB200" }}>
                        <MDBCardImage
                            src={Logo}
                            alt="login form"
                            className="rounded-start w-100"
                        />
                    </MDBCol>



                    <MDBCol md="6">

                        <form onSubmit={submit}>
                            <MDBCardBody className="d-flex flex-column ">
                                <div className="d-flex flex-row mt-2">
                                    <MDBCardImage
                                        src={Ipm}
                                        alt="login form"
                                        className="rounded-start w-20"
                                      />
                                    <span className="h1 fw-bold mb-0">
                                        Ikatan Pelajar Muhammadiyah
                                    </span>
                                </div>

                                <h5
                                    className="fw-normal my-4 pb-3"
                                    style={{ letterSpacing: "1px" }}
                                >
                                    Sign into your account
                                </h5>

                                <InputError message={errors.nba} className="mt-2" />
                                <MDBInput
                                    wrapperClass="mb-4"
                                    label="NBA"
                                    id="nba"
                                    name="nba"
                                    type="number"
                                    size="lg"
                                    value={data.nba}
                                    autoFocus={true}
                                    onChange={onHandleChange}

                                />

                                <MDBInput
                                    wrapperClass="mb-4"
                                    label="PASSWORD"
                                    id="password"
                                    name="password"
                                    type="password"
                                    size="lg"
                                    value={data.password}
                                    onChange={onHandleChange}
                                />
                                <InputError message={errors.password} className="mt-2" />

                                <MDBCheckbox name='flexCheck' value={data.remember} id='flexCheckDefault' label='Remember me'
                                onChange={onHandleChange}
                                 />


                                <MDBBtn
                                    className="mb-4 px-5 mt-3"
                                    color="dark"
                                    size="lg"
                                >
                                    Login
                                </MDBBtn>
                                <Link className="small text-muted" href={route("password.request")}>
                                    Forgot password?
                                </Link>
                                <p
                                    className="mb-5 pb-lg-2"
                                    style={{ color: "#393f81" }}
                                >
                                    Don't have an account?{" "}
                                    <Link href={route("register")} style={{ color: "#393f81" }}>
                                        Register here
                                    </Link>
                                </p>



                                <div className="d-flex flex-row justify-content-start">
                                    <Link href="#!" className="small text-muted me-1">
                                        Terms of use.
                                    </Link>
                                    <Link href="#!" className="small text-muted">
                                        Privacy policy
                                    </Link>
                                </div>
                            </MDBCardBody>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
}

export default Login;
