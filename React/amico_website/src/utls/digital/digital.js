import { useEffect } from "react"
import "./digital.css"
import Header from "../header/header"
import Footer from "../footer/footer"

const Digital=()=>{
    useEffect(()=>{
        window.scrollTo(1,0)
    },[])
    return(
        <>
        <Header />
        <section>
                <div class="row position-relative">
                    <div class="col-md-6  col-12 m-auto text-md-start text-center d-flex justify-content-center m-auto">
                        <div style={{ width: "70%" }}>
                            <h2 class=" mb-4 mt-5" style={{ fontWeight: "700" }}>DIGITAL<br></br><span class="fw-medium">TRANSFORMATION</span></h2>
                            <p class="para_content">
                            The world has become digital. Your end user spends more time on devices than interacting 
                            with the real world. Hence it becomes imperative to be available in the platforms where your
                             customers frequent. It can be overwhelming to overhaul existing business practices to total 
                             Digital business. Amico Solutions helps you make the transition with their expertise in 
                             technology. Our Digital Consulting Services will be there for you right from strategy making 
                             to execution, leveraging modern technology and improve the customer experience.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-9 m-auto d-flex justify-content-center mt-md-5">
                        <img alt="" width="100%" class="digital_img1 " src={require('./images/digital_img1.png')}></img>
                    </div>
                    <div class="z-n1 digital_vector1"><img alt="" width="100%" src={require("./images/digital_vector1.png")}></img></div>
                </div>
            </section>
            <section>
            <div class="text-center w-75 m-auto mt-md-5 mt-3 position-relative"> 
                    <p class="fw-bold digital_dev_heading">AMICO SOLUTIONS PRIDES ITSELF IN HAVING</p>
                    <p class="para_content">The biggest advantage of getting your business digital is it is easy and cost effective to create customer
                        centric experiences in a relatively low cost. We help our clients to decide what they want to do
                        and why they want to do it helping the focus on bringing the best product to the customer.<br></br><br></br>

                        We have a systemic approach for every business and the challenges to think for the customer perspective
                        and make it easy for them to make decisions to avail your services or products.</p>
                </div>
                <div class="row digit_dev justify-content-around">
                    <div class="col-md-3 col-5 text-center">
                        <img src={require("./images/digit_dev1.png")}></img>
                        <p class=" fw-bold ">DIGITAL STRATEGY</p>
                        <p class="para_content" style={{textAlign:"justify"}}>Going digital means that we are venturing into a new realm altogether. What worked in 
                            previous business models can be and should be improved and improvised when it comes to 
                            digital. We help you devise a strategy which will help you collect more data, gather more 
                            insights and make your product customer centric and personalized for your users. With a. good
                             digital strategy in place, it will be easy to figure out the technology and platforms that
                              we will be using.</p>
                    </div>
                    <div class="col-md-3 col-5 text-center">
                        <img src={require("./images/digit_dev3.png")}></img>
                        <p class="fw-bold ">DIGITAL DESIGN </p>
                        <p class="para_content" style={{textAlign:"justify"}}> With the technology available today, we will be able to help you with the way customers 
                            interact with your brand. With modern applications and utilities it is now easy to serve 
                            customers 24/7 if we have the correct technology and process in place. We help you design
                             modern digital interactions that maximizes the use of technology and bring down the 
                             dependence on physical resources all the while making your customer happy.</p>
                    </div>
                    <div class="col-md-3 col-5 order-1   text-center">
                        <img src={require("./images/digit_dev2.png")}></img>
                        <p class=" fw-bold">DIGITAL MODERNIZATION</p>
                        <p class="para_content" style={{textAlign:"justify"}}> The existing working business model can be modernized as per the needs of the modern 
                            market place. We help you use modern, digital channels to reach your customers to accelerate
                             your lead conversion process</p>
                    </div>

                </div>
                <div class="z-n1 digital_vector2">
                        <img alt=" " width="100%" src={require("./images/digital_vector2.png")}></img>
                    </div>

            </section>
        <Footer />
        </>
    )
}

export default Digital