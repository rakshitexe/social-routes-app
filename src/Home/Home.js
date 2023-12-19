import React from "react"
import logo from '../assets/Social-logo.svg'
import './Home.css'
import geo from '../assets/social-geo.svg'

const Home=()=>{
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
            <div className="home-fixed">

            </div>
            Hey there 
        </div>
        </>
    )
}

export default Home;