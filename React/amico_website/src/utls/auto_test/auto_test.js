import "./auto_test.css"
import { useEffect } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"

const AutoTest = () => {
    useEffect(() => {
        window.scrollTo(3, 0)
    }, [])
    return (
        <>
            <Header />
            <section>
                <div class="row position-relative">
                    <div class="col-md-6  col-12 m-auto text-md-start text-center d-flex justify-content-center m-auto">
                        <div style={{ width: "70%" }}>
                            <h2 class=" mb-4 mt-4" style={{ fontWeight: "700" }}>AUTOMATED<br></br><span class="fw-medium">TESTING</span></h2>
                            <p class="para_content">
                                Any Digital Transformation is not complete without a Automated Testing Environment.
                                Amico Solutions provides our customers with excellent Automated testing services with
                                the aid of years of experience in executing testing services. Our strategies comprise
                                pre-built scripts and frameworks perfectly suited for efficient testing environment for
                                organizations of any size. The goal is to get the end product to market as soon as
                                possible with minimal bugs as possible.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-9 m-auto d-flex justify-content-center mt-md-5">
                        <img alt="" width="100%" class="auto_test_img1 " src={require('./images/auto_test_img1.png')}></img>
                    </div>
                    <div class="z-n1 auto_test_vector1"><img alt="" width="100%" src={require("./images/auto_test_vector1.png")}></img></div>
                </div>
            </section>
            <section>
                <h3 class="fw-bold auto_test_dev_heading text-center mt-5 mt-5rem">WE PROVIDE SERVICES LIKE</h3>
                <div class="row  justify-content-around auto_test_dev text-center position-relative">
                    <div class="col-md-4 col-sm-6" >
                        <img alt="" src={require('./images/auto_test_dev1.png')}></img>
                        <p class="fw-bold">PERFORMANCE TESTING</p>
                        <p class="para_content px-5" style={{textAlign:"justify"}}>Our performance testing services include web, distributed and cloud 
                        databases with high volume systems and complex applications.</p>
                    </div>
                    <div class="col-md-4 col-sm-6">
                    <img alt="" src={require('./images/auto_test_dev2.png')}></img>
                        <p class="fw-bold">TEST AUTOMATION</p>
                        <p class="para_content px-5" style={{textAlign:"justify"}}>Improve your ROI and reduce overall testing efforts with our automated testing 
                        frameworks that can be customized according to your needs.</p>
                    </div>
                    <div class="col-md-4 col-sm-6">
                    <img alt="" src={require('./images/auto_test_dev3.png')}></img>
                        <p class="fw-bold">MOBILE AUTOMATION</p>
                        <p class="para_content px-5 " style={{textAlign:"justify"}}> Ensure best mobile experience to your customers with our mobile automation services
                         which leverages the expertise of best mobile testing tool providers.</p>
                    </div>
                    <div class="col-md-4 col-sm-6">
                    <img alt="" src={require('./images/auto_test_dev5.png')}></img>
                        <p class="fw-bold">FUNCTIONAL TESTING</p>
                        <p class="para_content px-5" style={{textAlign:"justify"}}>Test your business processes and systems against defined business parameters 
                        to meet the expectation of your users to ensure high functionality.</p>
                    </div>
                    <div class="col-md-4 col-sm-6">
                    <img alt="" src={require('./images/auto_test_dev4.png')}></img>
                        <p class="fw-bold">REGRESSION TESTING</p>
                        <p class="para_content px-5" style={{textAlign:"justify"}}>To take advantage of the latest developments and features we help our customers with Regression testing. By availing this service you will be able to stay ahead of
                         the curve than your competitors by testing your codes against outdated systems.</p>
                    </div>
                    <div class="col-md-4 col-sm-6">
                    <img alt="" src={require('./images/auto_test_dev6.png')}></img>
                        <p class="fw-bold">SECURITY TESTING</p>
                        <p class="para_content px-5" style={{textAlign:"justify"}}>Security testing is of the paramount importance in this era of cyber attacks and cyber securities. Imbibing security testing makes your IT infrastructure safe from the hackers. 
                        Our abilities are poised to uncover and fix the security issues that may occur for your business.</p>
                    </div>
                    <div>
                    <div class="z-n1 auto_test_vector2">
                    <img alt=" " width="100%" src={require("./images/auto_test_vector2.png")}></img>
                </div>
                    </div>
                </div>
            </section>
            <Footer content="SPEAK TO US TO KNOW MORE ABOUT AUTOMATED TESTING SERVICES"/>
        </>
    )
}

export default AutoTest