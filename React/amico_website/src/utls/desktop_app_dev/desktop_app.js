import "./desktop_app.css"
import { useEffect } from "react"
import Header from "../header/header"
import Footer from "../footer/footer"

const DesktopApp = () => {
    useEffect(() => {
        window.scrollTo(1, 0);
    }, [])
    return (
        <>
            <Header />
            <div class="row position-relative">
                <div class="col-md-6 col-12 m-auto text-md-start text-center d-flex justify-content-center m-auto">
                    <div style={{ width: "70%" }}>
                        <h3 class="fw-medium mb-4 mt-lg-0 mt-5">DESKTOP APPLICATION<br></br><span style={{ fontWeight: "700" }}>DEVELOPMENT</span></h3>
                        <p class="para_content">
                            Businesses still need downloadable Software and Amico’s Desktop Application Development team
                            can help you.We offer desktop application development for a particular platform or cross platform
                            capabilities. Whether you need help with your existing application or decide to create an application
                            from the scratch, Amico is your best bet.</p>
                    </div>
                </div>
                <div class="col-md-6 col-9 m-auto d-flex justify-content-center mt-md-5">
                    <img alt="" width="90%" class="desktop_img1 " src={require('./images/desktop_img1.png')}></img>
                </div>
                <div class="z-n1 desktop_vector1"><img alt="" width="100%" src={require("./images/desktop_vector1.png")}></img>
                </div>
            </div>
            <div style={{ marginTop: "10%" }} class="row flex-column-reverse flex-md-row position-relative">
                <div class="m-auto col-md-6 col-9">
                    <div class=" d-flex justify-content-center"><img alt="" width="90%" class="desktop_img1" src={require("./images/desktop_img2.png")}></img></div>
                </div>
                <div class="col-md-6 col-12 m-auto text-md-start text-center  d-flex justify-content-center  m-auto ">
                    <div class="w-75">
                        <p > Amico Solutions provides web development services to help design, implement and evolve web-based
                            application. Having a track record of consistently delivering web solutions, Amico will be your perfect
                            partner to develop a scalable, impactful, and sustainable web applications. We help you accelerate user
                            acquisition, unlock new digital possibilities, and reach other business milestones.</p>
                    </div>
                </div>
                <div class="z-n1 desktop_vector2">
                    <img alt=" " width="100%" src={require("./images/desktop_vector2.png")}></img>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DesktopApp