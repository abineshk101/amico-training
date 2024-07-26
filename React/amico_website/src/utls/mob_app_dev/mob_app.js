import "./mob_app.css"
import { useEffect } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"

const MobApp = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <>
            <Header />
            <section>
                <div class="row m-5">
                    <div class="col-md-6 col-12 m-auto text-md-start text-center">
                        <h3 class="fw-medium mb-4 ">MOBILE APPLICATION<br></br><span class="fw-bold">DEVELOPMENT</span></h3>
                        <p><span class="fs-5 fw-bold">IS THERE AN APP FOR THAT?</span><br></br>
                            <span class="para_content">This is the first question people ask when they think of a service or a product. In such a fast moving environment
                                it would be unwise to miss on the advantages mobile applications presents for the Business Owners.</span></p>
                    </div>
                    <div class="col-md-6 col-9 m-auto">
                        <img alt="" width="100%" class="mob_app-mobile" src={require('./images/mobile_img.png')}></img>
                    </div>
                </div>
                <img alt="" src={require("./images/vector_1.png")} width="100%"></img>
                <div class="row mt-5 flex-column-reverse flex-md-row">
                    <div class="col-lg-7 col-md-6 col-7 m-auto">
                        <img alt="" width="100%" src={require('./images/solution_mob.png')}></img>
                    </div>
                    <div class="col-lg-5 col-md-6 col-12 m-auto d-flex justify-content-center">
                        <div class="w-75 text-center">
                            <h3 class="fw-bold">SOLUTIONS</h3>
                            <p style={{ textAlign: "justify" }} class="para_content">  We in Amico Solutions provide mobile application development right from the strategy to user experience,
                                getting your idea to life as soon as possible. As experts in HTML 5 development, Amico can build cross platform applications that will work on any device on any platform.
                                We make sure that the final deliverable will be secure, scalable and sustainable in whatever platform it is hosted on.</p>
                        </div>
                    </div>
                </div>
                <div class="position-relative">
                    <div class="mob_app_vector2 " >
                        <img alt="" width="100%" src={require('./images/vector_2.png')}></img>
                    </div>
                    <div class="row mt-5 justify-content-evenly mob_app-devrow">
                        <div class="col-lg-2 col-md-6">
                            <div class="text-center"  >
                                <img alt="" src={require('./images/p_consult.png')}></img>
                                <h5 class="fw-bold mt-1">PERFORMANCE CONSULTING</h5>
                                <p class="para_content m-auto mb-3" style={{ textAlign: "justify" }}>We analyze how the company or project is performing currently and see where we can improve.</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="text-center" >
                                <img alt="" src={require('./images/development.png')}></img>
                                <h5 class="fw-bold mt-3">DEVELOPMENT</h5>
                                <p class="para_content m-auto mb-3" style={{ textAlign: "justify" }}>We help you develop IT solutions in form of applications, website, landing page or even plugins to improve performance.</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="text-center"  >
                                <img alt="" src={require('./images/p_consult.png')}></img>
                                <h5 class="fw-bold mt-2">DIGITAL  TRANSFORMATION</h5>
                                <p class="para_content m-auto mb-3" style={{ textAlign: "justify" }}>We will help you take advantage of latest technology trends. Our team will help you smoothly transition your services and products to another level with our seamless process.</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <div class="text-center"  >
                                <img alt="" src={require('./images/qa_serv.png')}></img>
                                <h5 class="fw-bold mt-3">QA  SERVICES</h5>
                                <p class="para_content m-auto mb-3" style={{ textAlign: "justify" }}>Our QA Services enable you to deliver high performing products in low turn around time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="position-relative pt-5">
                    <div class="d-flex justify-content-center" >
                        <img alt="" class="spec_img" src={require("./images/mob_app_end.png")}></img>
                    </div>
                    <div class="row justify-content-between spec_position z-2 fw-bold" >
                        <div class="col-3 text-end para_content">
                            <p class="my-md-5 my-3">BUSINESS NEED ANALYSIS</p>
                            <p class="my-md-5 my-3">CUSTOM DESIGN ARCHITECTURE</p>
                            <p class="my-md-5 my-3">PROJECT MANAGEMENT </p>
                            <p class="my-md-5 my-3">PROFESSIONAL DEVELOPMENT</p>
                        </div>
                        <div class="col-3 para_content text-start">
                            <p class="my-md-5 my-3">INTEGRATION</p>
                            <p class="my-md-5 my-3">QA TESTING</p>
                            <p class="my-md-5 my-3">UX TESTING</p>
                            <p class="my-md-5 my-3">CROSS PLATFORM MOBILE APP DEVELOPMENT</p>
                        </div>
                    </div>
                    <div><img alt="" width="80%" src={require('./images/vector_3.png')}></img></div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MobApp