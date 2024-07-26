import "./web_app.css"
import { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const WebApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Header />
            <section>
                <div class="row position-relative">
                    <div class="col-md-6 col-12 m-auto text-md-start text-center d-flex justify-content-center m-auto">
                        <div style={{ width: "70%" }}>
                            <h3 class="fw-medium mb-4 mt-5">WEB APPLICATION<br></br><span class="fw-bold">DEVELOPMENT</span></h3>
                            <p class="para_content">
                                No Installation or maintenance of software is required anymore. In such a fast moving environment
                                it would be unwise to miss on the advantages web applications presents for the Business Owners.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-9 m-auto d-flex justify-content-center mt-md-5">
                        <img alt="" width="80%" class="web_app_img1 " src={require('./images/web_app_img1.png')}></img>
                    </div>
                    <div class="z-n1 vector1"><img alt="" width="100%" src={require("./images/web_app_vector1.png")}></img></div>
                </div>
                <div class="row mt-5 flex-column-reverse flex-md-row">
                    <div class="m-auto col-md-6 col-9">
                        <div class=" d-flex justify-content-center"><img alt="" width="90%" class="web_app_img1" src={require("./images/web_app_img3.png")}></img></div>
                    </div>
                    <div class="col-md-6 col-12 m-auto text-md-start text-center  d-flex justify-content-center  m-auto ">
                        <div class="w-75">
                            <h4 class="fw-bold text-center">SOLUTIONS</h4>
                            <p > Amico Solutions provides web development services to help design, implement and evolve web-based
                                application. Having a track record of consistently delivering web solutions, Amico will be your perfect
                                partner to develop a scalable, impactful, and sustainable web applications. We help you accelerate user
                                acquisition, unlock new digital possibilities, and reach other business milestones.</p>
                        </div>
                    </div>
                </div>
                <div class="mb-0 text-center fw-semibold mt-5 position-relative content_vector2 px-5">
                    <p class="mb-0">• Highly creative UX and UI designers to provide eye catching graphics</p>
                    <p class="mb-0">• Project management team experienced in handling any kind of complexity</p>
                    <p class="mb-0">• QA Engineers with complete compliance with web app quality and security requirements</p>
                    <p class="mb-0">• Quick project start and turnaround time.</p>
                    <div class="z-n1 vector2">
                        <img alt="" width="100%" src={require("./images/web_app_vector2.png")}></img>
                    </div>
                </div>
                <div class="row justify-content-around web_app_dev mt-5">
                    <div class="col-md-3 col-8">
                        <div class="text-center" >
                            <img alt="" style={{ width: "45%" }} src={require("./images/web_app_dev6.png")}></img>
                            <h5 class="fw-bold">WEB DEVELOPMENT<br></br>PROJECT PLANNING</h5>
                            <p class="para_content" style={{ textAlign: "justify" }}>Our business Analysts define your project requirements and outline the scope of the app.
                                Our project management team then give a long term high level project plan, define time and
                                budget forecasts and compile a team for your web project implementation</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-8">
                        <div class="text-center" >
                            <img alt="" style={{ width: "50%" }} src={require("./images/web_app_dev5.png")}></img>
                            <h5 class="fw-bold">UX AND UI DESIGN</h5>
                            <p class="para_content" style={{ textAlign: "justify" }}>With the project plan defined our UX and UI developers design intuitive navigation and
                                interfaces for the web application. Our designs are responsive and look great on any
                                devices you want to access it on right from mobile, desktop, laptop, TVs to Watch faces
                                based on the requirements thus leading to higher conversion rates.</p>
                        </div>

                    </div>
                    <div class="col-md-3 col-8">
                        <div class="text-center " >
                            <img alt="" style={{ width: "50%" }} src={require("./images/web_app_dev4.png")}></img>
                            <h5 class="fw-bold">WEB APP DEVELOPMENT</h5>
                            <p class="para_content" style={{ textAlign: "justify" }} >Our web architects are experienced in designing latest architecture patterns, while our
                                developers are skilled in taking care of the wide variety of web development tools,
                                ensure we comply with the SLA points such as Lead time, Code Churn, Escaped defects etc.</p>
                        </div>

                    </div>
                    <div class="row justify-content-around web_app_dev mt-5">
                        <div class="col-md-3 col-8">
                            <div class="text-center mt-3" >
                                <img alt="" style={{ width: "50%" }} src={require("./images/web_app_dev3.png")}></img>
                                <h5 class="fw-bold">QUALITY ASSURANCE</h5>
                                <p class="para_content  mb-0" style={{ textAlign: "justify" }}>Our Quality Management System approach confirms 
                                that the web apps performance will be secure, sustainable and fast.</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-8">
                            <div class="text-center" >
                                <img alt="" style={{ width: "50%" }} src={require("./images/web_app_dev2.png")}></img>
                                <h5 class="fw-bold">INTEGRATION</h5>
                                <p class="para_content  mb-0" style={{ textAlign: "justify" }}>Web app works better when it gets integrated to other application such as 
                                CMS or any other software infrastructure. Amico Solutions experts ensure smooth deployment without impending 
                                the work of your web application</p>
                            </div>

                        </div>
                        <div class="col-md-3 col-8">
                            <div class="text-center " >
                                <img alt="" style={{ width: "50%" }} src={require("./images/web_app_dev1.png")}></img>
                                <h5 class="fw-bold">SUPPORT</h5>
                                <p class="para_content mb-0" style={{ textAlign: "justify" }} >Apart from this, you can be assured of the continuous support 
                                during the deployment or development stage and during evolution stage as well.</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <img alt="" width="80%" src={require("./images/web_app_vector3.png")}></img>
            </section>
            <Footer />
        </>
    )
}

export default WebApp