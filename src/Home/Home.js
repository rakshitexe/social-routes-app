import React from "react"
import logo from '../assets/Social-logo.svg'
import './Home.css'
import geo from '../assets/social-geo.svg'
import destination from '../assets/Isolation_Mode.svg'
import back from '../assets/back.svg'
import abs from '../assets/abs.svg'
import social from '../assets/Social Media.svg'
import branding from '../assets/Branding.svg'
import web from '../assets/Web development.svg'

const Home=()=>{
    const scrollToBottom = () => {
        window.scrollTo({
        top: window.scrollY + window.innerHeight - window.scrollY % window.innerHeight,
        behavior: 'smooth'
        });
      };
    return (
        <>
        <div className="landing">
        <div className="row">
            <div className="col-md-3">
            <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="col-md-6">

            </div>
            <div className="col-md-3 d-flex">
                <div className="">
                <button className="contact">
                    Contact Us
                </button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="row" style={{paddingTop:70}}>
                    <span className="nav-text">Navigate your</span>
                </div>
                <div className="row d-flex">
                <div className="col-md-auto">
                    <span className="social-text">Social</span>
                    </div>
                    <div className="col-md-6">
                    <span className="success-text">Success</span>
                    </div>
                </div>
                <div className="row" style={{paddingTop:50}}>
                    <button className="Showcase">
                        Show Case
                    </button>
                </div>
            </div>
            <div className="col-md-2">

            </div>
            <div className="col-md-4">
                 <img src={geo} alt="logo" className="geo-logo"/>
            </div>
        </div>
        </div>

        <div className="home-scroll">
            <div className="justify-content-center d-flex">
            <button className="arrow with-transition" onClick={scrollToBottom}>Arrow</button>
            </div>
            <div className="home-fixed">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-3">
                                <img src={destination} className="dest" alt="Destination"/>
                            </div>

                            <div className="col-9">
                                <div className="row">
                                    <span className="des-text">Destination</span>
                                </div>
                                <div className="row">
                                    <span className="points-text">Points</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                           <span className="provide">What we provide?</span> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-end d-flex">
                        <div className="col-3">
                            <img src={back} alt="back" className="back"/>
                        </div>
                        <div className="col-8">
                            <img src={abs} alt="back" className="abs"/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 justify-content-start d-flex">
                        <img src={social} alt="social routes" className="section-img-1"/>
                    </div>
                    <div className="col-md-4 justify-content-center d-flex" >
                    <img src={branding} className="section-img"/>
                    </div>
                    <div className="col-md-4 justify-content-end d-flex" alt="social routes">
                    <img src={web} className="section-img"/>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default Home;