import "./consult.css"
import { useEffect } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"

const Consult = () => {
    useEffect(()=>{
        window.scrollTo(2,0);
    },[])
    return (
        <>
            <Header />
            <section>
            <div class="row position-relative">
                <div class="col-lg-6 col-12 m-auto text-lg-start text-center d-flex justify-content-center m-auto">
                    <div style={{ width: "70%" }}>
                        <h3 class="fw-medium mb-4 mt-5">PERFORMANCE<br></br><span style={{ fontWeight: "700" }}>CONSULTING</span></h3>
                        <p class="para_content">
                            In the past decade technology has grown leaps and bounds. What is new and path breaking yesterday
                            had turned obsolete today. The same is true for the new today as well. In this ever changing
                            environment it is important to be on top of the changes and adapt to the marketplace requirements.
                            It is essential to create business processes that stand the test of the time which can be evolved seamlessly
                            to meet the demands of tomorrow. At Amico Solutions our engineers closely monitor these changes and take a
                            look at your IT infrastructure and business process to advice you regarding the new technologies, methodologies
                            and how you can adapt and stay relevant in your market place.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-9 m-auto d-flex justify-content-center mt-md-5">
                    <img alt="" class="consult_img1 " src={require('./images/consult_img1.png')}></img>
                </div>
                <div class="z-n1 consult_vector1"><img alt="" width="100%" src={require("./images/consult_vector1.png")}></img>
                </div>
            </div>
            </section>
            <section>
            <div style={{ marginTop: "10%" }} class="row flex-column-reverse flex-lg-row position-relative">
                <div class="m-auto col-lg-6 col-9">
                    <div class=" d-flex justify-content-center"><img alt="" width="90%" class="consult_img1" src={require("./images/consult_img2.png")}></img></div>
                </div>
                <div class="col-lg-6 col-12 m-auto text-lg-start text-center    m-auto ">
                    <div class="position-relative m-auto consult_num mb-3 text-start ">
                        <img src={require('./images/01.png')} ></img>
                        <span class=" fw-bold ">PERFORMANCE ENGINEERING</span>
                    </div>
                    <div class="w-75 m-auto">
                        <p class="para_content">Every successful business is built on strong business plan in all areas including IT support.
                            The IT infrastructure particularly need to be monitored and made future proof to ensure
                            scalability and reliability in every situation. We dabble with various technologies and
                            platforms to make sure to solve your IT infrastructure’s problems which are existing and also
                            solve the problems that may arise in future through our thoughtful business process and
                            innovation which are designed to meet your business needs.</p>
                    </div>
                </div>
                <div class="z-n1 consult_vector2">
                    <img alt=" " width="100%" src={require("./images/consult_vector2.png")}></img>
                </div>
            </div>
            </section>
            <section>
            <div style={{ marginTop: "10%" }} class="row  flex-lg-row position-relative">
                <div class="col-lg-6 col-12 m-auto text-lg-start text-center    m-auto ">
                    <div class="position-relative m-auto consult_num mb-3 text-start ">
                        <img src={require('./images/02.png')} ></img>
                        <span class=" fw-bold ">PERFORMANCE REVIEW</span>
                    </div>
                    <div class="w-75 m-auto">
                        <p class="para_content">Our Performance engineers, with their deep domain knowledge and technology expertise 
                            understand your requirement and identify your bottlenecks which hinder your performance
                             and growth. Our robust and reliable technology products will help you be on top of your game..</p>
                    </div>
                </div>
                <div class="m-auto col-lg-6 col-9">
                    <div class=" d-flex justify-content-center"><img alt="" width="90%" class="consult_img1" src={require("./images/consult_img3.png")}></img></div>
                </div>
            </div>
            <img width="80%" src={require("./images/consult_vector3.png")}></img>
            </section>

            <Footer content="CONTACT US TO KNOW MORE."/>
        </>
    )
}

export default Consult