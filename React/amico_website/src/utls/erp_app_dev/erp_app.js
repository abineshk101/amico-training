import "./erp_app.css"
import { useEffect } from "react"
import Header from "../header/header"
import Footer from "../footer/footer"

const ErpApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Header />
            <div class="row position-relative">
                <div class="col-md-6 col-12 m-auto text-md-start text-center d-flex justify-content-center m-auto">
                    <div style={{ width: "70%" }}>
                        <h3 class="fw-medium mb-4 mt-5">ENTERPRISE APPLICATION<br></br><span style={{ fontWeight: "700" }}>DEVELOPMENT</span></h3>
                        <p class="para_content">
                            At AMICO Software Solutions you get several benefits by availing our Enterprise Resource Platform Application Development services.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-9 m-auto d-flex justify-content-center mt-md-5">
                    <img alt="" width="80%" class="web_app_img1 " src={require('./images/erp_img1.png')}></img>
                </div>
                <div class="z-n1 vector1"><img alt="" width="100%" src={require("./images/erp_vector1.png")}></img></div>
            </div>
            <p class="text-center fw-semibold pt-5 px-4 mb-0 para_content">Enterprise Application Development helps businesses to address multiple business challenges of
                different business processes into a unified enterprise application. The idea is to create an agile
                and collaborative application that benefits the company by saving time, money and ensuring security
                and scalability.</p>
            <p class="text-center fw-semibold px-4 mb-0 para_content"> Such Enterprise software applications helps increase the productivity
                and encourages advanced performance. Amico Solutions understands the
                complex nature of such enterprise software application and has developed expertise in handling any complex process. We help businesses improve
                efficiency, streamline business processes and increase customer
                satisfaction.</p>
            <div class="mt-5">
                <h4 class="fw-bold m-auto text-center w-75"> OUR ENTERPRISE APPLICATION DEVELOPMENT INCLUDE BUT NOT LIMITED TO</h4>
                <div class="row mt-5 erp_img2 text-center">
                    <div class="col-md-4 col-12 m-auto">
                        <img width="100%" alt="" src={require('./images/erp_img2.png')}></img>
                    </div>
                    <div class="col-md-4 col-sm-6 col-8 m-auto mt-4 mt-md-0">
                        <ul class="d-grid gap-md-4 gap-3 ">
                            <li style={{listStyle:"disc"}} class=" fw-semibold">Enterprise Software Development</li>
                            <li style={{listStyle:"disc"}} class=" fw-semibold">Enterprise Application Integration</li>
                            <li style={{listStyle:"disc"}} class=" fw-semibold">Digital Transformation Services</li>
                            <li style={{listStyle:"disc"}} class="fw-semibold">Legacy Application Migration</li>
                            <li style={{listStyle:"disc"}} class=" fw-semibold">Business Intelligence</li>
                            <li style={{listStyle:"disc"}} class=" fw-semibold">Enterprise Mobility</li>
                        </ul>
                    </div>
                </div>
                <div class="z-n1 vector2">
                    <img alt="" width="100%" src={require("./images/erp_vector2.png")}></img>
                </div>
            </div>
            <div class="row justify-content-around erp_app_dev mt-5">
                <div class="col-md-3 col-8">
                    <div class="text-center" >
                        <img alt=""  src={require("./images/erp_img3.png")}></img>
                        <p class="para_content" style={{ textAlign: "justify" }}>   We offer services promising the right fit for the 
                        business model which means you don’t need to totally
                         reboot your business plan to include Enterprise solutions.</p>
                    </div>
                </div>
                <div class="col-md-3 col-8">
                    <div class="text-center" >
                        <img alt=""  src={require("./images/erp_img4.png")}></img>
                        <p class="para_content" style={{ textAlign: "justify" }}>   Our collaborative approach ensures that our clients 
                        are always kept in loop about every stage of the development, designing, testing and deployment.</p>
                    </div>

                </div>
                <div class="col-md-3 col-8">
                    <div class="text-center " >
                        <img alt="" src={require("./images/erp_img5.png")}></img>
                        <p class="para_content" style={{ textAlign: "justify" }} >   We can scale our resources on demand. 
                        Usually we will have multiple resources taking care multiple business processes for our clients. 
                        Hence it will be easy for us to increase resource allocation for any urgent need.</p>
                    </div>
                </div>
            </div>

            <Footer content="TALK TO US ABOUT YOUR ENTERPRISE APPLICATION DEVELOPMENT NEED NOW."/>
        </>
    )
}

export default ErpApp