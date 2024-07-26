import './e_commerce.css'
import { useEffect } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

const Ecommerce = () => {
        useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Header />
            <div class="row position-relative">
                <div class="col-md-6 col-12 m-auto text-md-start text-center d-flex justify-content-center m-auto">
                    <div style={{ width: "70%" }}>
                        <h3 class="fw-medium mb-4 mt-lg-0 mt-5">E-COMMERCE APPLICATION<br></br><span style={{ fontWeight: "700" }}>DEVELOPMENT</span></h3>
                        <p class="para_content">
                            Amico Solutions as an Ecommerce Application development company, powers business with cutting-edge
                            technology to help them serve their existing customers better and also acquire new customers. With
                            our in-depth industry knowledge and solid technical skills we deliver market ready software/application
                            in a quick turn-around.</p>
                    </div>
                </div>
                <div class="col-md-6 col-9 m-auto d-flex justify-content-center mt-md-5">
                    <img alt="" width="90%" class="ecom_img1 " src={require('./images/e_com_img1.png')}></img>
                </div>
                <div class="z-n1 ecom_vector1"><img alt="" width="100%" src={require("./images/e_com_vector1.png")}></img></div>
            </div>
            <div class="row mt-5 flex-column-reverse flex-md-row">
                <div class="m-auto col-md-6 col-9">
                    <div class=" d-flex justify-content-center"><img alt="" width="90%" class="ecom_img1" src={require("./images/ecom_img2.png")}></img></div>
                </div>
                <div class="col-md-6 col-12 m-auto text-md-start text-center  d-flex justify-content-center  m-auto ">
                    <div class="w-75">
                        <p > Amico Solutions provides web development services to help design, implement and evolve web-based
                            application. Having a track record of consistently delivering web solutions, Amico will be your perfect
                            partner to develop a scalable, impactful, and sustainable web applications. We help you accelerate user
                            acquisition, unlock new digital possibilities, and reach other business milestones.</p>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <div class="row mt-5 justify-content-around text-center ecom_dev_img ">
                    <div class="col-sm-2 col-5">
                        <img alt="" src={require("./images/ecom_dev_img1.png")}></img><p>We have a track record of creating awesome ecommerce apps.</p>
                    </div>
                    <div class="col-sm-2 col-5">
                        <img alt="" src={require("./images/ecom_dev_img2.png")}></img><p>Instant online digital market place</p>
                    </div>
                    <div class="col-sm-2 col-5">
                        <img alt=""  src={require("./images/ecom_dev_img3.png")}></img><p>High customer retention rate</p>
                    </div>
                    <div class="col-sm-2 col-5">
                        <img alt=""  src={require("./images/ecom_dev_img4.png")}></img><p>Dedicated team of e-commerce application developers</p>
                    </div>

                </div>
                <div class="z-n1 vector2">
                    <img alt=" " width="100%" src={require("./images/ecom_vector2.png")}></img>
                </div>
            </div>
            <div class="row mt-5 justify-content-center ecom_shop">
                <div class="col-3 text-end d-grid gap-3">
                    <p>ECOMMERCE TECHNOLOGY CONSULTING</p>
                    <p>ORDERING / DELIVERY MANAGEMENT</p>
                    <p>ECOMMERCE WEBSITE DEVELOPMENT</p>
                    <p>INVENTORY MANAGEMENT</p>
                </div>
                <div class="col-5 position-relative text-center">
                    <img style={{width:"100%"}} class="mt-lg-0 pb-sm-4 pb-0" src={require('./images/ecom_shop.png')}></img>
                </div>
                <div class="col-3  d-grid gap-3">
                    <p>SUPPLY CHAIN MANAGEMENT</p>
                    <p>DIGITAL MARKETING</p>
                    <p>CONTENT MANAGEMENT</p>
                    <p>MARKETING TECHNOLOGY</p>
                </div>
            </div>
            <Footer content="CALL US TO DISCUSS YOUR ECOMMERCE NEEDS TODAY"/>
        </>
    )
}

export default Ecommerce

