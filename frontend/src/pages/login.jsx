import React from 'react';
import Login from "../components/login";
import Header from "../components/header";
import Footer from "../components/footer";



const LoginPage = () => {
    return (
            <>
                <Header/>
                    <Login/>
                <Footer/>
            </>
    )
}

export default LoginPage