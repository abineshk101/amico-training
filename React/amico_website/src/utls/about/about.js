import { useEffect } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"
import "./about.css"

const About=()=>{
    useEffect(()=>{
        window.scrollTo(3,0);
    },[])
    return(
        <>
        <Header />
        <section class="position-relative">
            <div class="row">
                <div class="col-md-4 col-7 m-auto ">
                    <p class="heading fw-bold mt-5 text-md-start text-center">ABOUT US. . .</p>
                    <p class="para_content " style={{textAlign:"justify"}}>Amico Solutions is a young team based out of Kanyakumari focused on delivering
                         top notch web and mobile technology based solutions. The name Amico mean friend
                          and that is what we aspire to be with our clients, A friend who is with you in 
                          your time of distress and help you overcome it with our capabilities. </p>
                </div>
                <div class="col-md-6 col-12 text-end d-none d-md-inline-block">
                    <div>
                    <img alt="" class="about_img1" src={require('./images/about_img1.png')}></img>
                    </div>
                </div>
            </div>
            <div class="row founder p-5" style={{backgroundColor:"#E0EDF3"}}>
                <p class="text-center fw-bold heading">FOUNDERS</p>
                <div class="col-md-6 col-12 p-5 text-center">
                    <div><img alt="" src={require('./images/about_dhanesh.png')}></img></div>
                    <p class="fw-semibold fs-5 mb-1 mt-2">Mr. Dhanesh Kumar J </p>
                    <p class="mb-1">+(91) 80561 92643</p>
                    <p xlass="mb-1">dhanesh@amicosolutions.com</p>
                </div>
                <div class="col-md-6 col-12 p-5 text-center">
                    <div><img alt="" src={require('./images/about_jerin.png')}></img></div>
                    <p class="fw-semibold fs-5 mb-1 mt-2">Mr. Jerin Raja R</p>
                    <p class="mb-1">+(91) 98940 69123</p>
                    <p xlass="mb-1">jerin@amicosolutions.com</p>

                </div>
           </div>
           <div class="z-n1 about_vector2">
                    <img alt=" " width="100%" src={require("./images/about_vector2.png")}></img>
                </div>
        </section>
        <Footer />
        </>
    )
}

export default About