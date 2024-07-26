import "./home.css"
import Header from "../header/header"
import Footer from "../footer/footer"
import { useEffect } from "react"
import { HashLink as NavLink } from 'react-router-hash-link'

const Home = () => {
    useEffect(()=>{
        window.scrollTo(2,0);
    },[])
    return (
        <>
            <Header />
            <main class="home_bg" id="home_bg">
                <section class="mt-5">
                    <div class="row pt-10">
                        <div class="col-lg-6 col-12">
                            <div class="position-relative home_space1 ">
                                <img src={require("./images/2022.png")} style={{ width: "40%" }} alt=""></img>
                                <div style={{ top: "45%" }} class="position-absolute">
                                    <div class=" fw-bold w-100 fs-xl-6">One stop solutions for your IT needs</div>
                                    <div class="fw-bold fs-2 lh-1 ">Breakthrough technologies at your fingertips</div>
                                    <div class="mt-3 para_content">Welcome to AMICO Software Solutions, a new age consulting firm
                                        where technology and business concepts work hand in hand.</div>
                                    <NavLink to="/contact-us"><div><button class="border-0 rounded-2 p-1 px-3 mt-3 "
                                        style={{ backgroundColor: "rgba(199, 233, 249, 1)", color: "rgba(26, 120, 161, 1)" }}><span
                                            class="fw-bold">CONTACT US</span></button></div></NavLink>
                                </div>
                            </div>
                        </div>
                        <div id="home_img1" class="col-lg-6 col-12 pt-lg-0">
                            <img class="m-auto d-block d-lg-inline-block" src={require('./images/home-img1.png')} alt=""></img>
                        </div>
                    </div>
                </section>
                <section id="services">
                    <div class="pt-5 w-75 m-auto text-center">
                        <p style={{ fontSize: "13px" }} class="fw-bold mb-3">TECHNOLOGY DESIGNED FOR YOU<br></br><span
                            style={{ fontWeight: "900" }} class=" fs-2 lh-1">SERVICES</span></p>
                        <p class=" text-center para_content">We help you identify the X factor in your business and help you address
                            your complex
                            business problems with the help of technology and our business solutions.Our range of services include but
                            not
                            limited to Consulting, Development and Q&A services.</p>
                    </div>
                    <div class="row justify-content-around service_content">
                        <div class="col-md-3 col-12 text-center">
                            <img src={require("./images/development.png")} class=" py-3" alt=""></img>
                            <a href="#development"><p class="fs-5 fw-bold">DEVELOPMENT</p></a>
                            <p class="para_content">From App development to your website and plugins which makes your customer's life
                                easy to use your
                                product,
                                we have got your needs covered</p>
                        </div>
                        <div class="col-md-3 col-12 text-center">
                            <img src={require('./images/consultation.png')} class=" py-3" alt=""></img>
                            <a href="#consultation"><p class="fs-5 fw-bold">CONSULTATION</p></a>
                            <p class="para_content">We help you find what to fix and where to fix and how to fix and when you wake up to
                                this new
                                possibility,
                                you will wonder why haven't we done this earlier.</p>
                        </div>
                        <div class="col-md-3 col-12 text-center">
                            <img src={require('./images/qa_service.png')} class=" py-3" alt=""></img>
                            <a href="#qa"><p class="fs-5 fw-bold">QA SERVICES</p></a>
                            <p class="pt-2 para_content">Doing the right thing, every time even when no one is looking. We fine tune
                                your process and
                                product to make sure your customers get the best version of your product.</p>
                        </div>
                    </div>
                    <img src={require('./images/Vector-hm.png')} width="100%" alt=""></img>
                </section>
                <section id="development">
                    <div class="text-center w-75 m-auto mt-3">
                        <p class=" fs-5" style={{ fontWeight: "750" }}>DEVELOPMENT IS NOT JUST WRITING THE CODE.<br></br>THE MAIN OBJECTIVE IS
                            TO SOLVE A PROBLEM</p>
                        <p class="para_content">It can be overwhelming. You know that there is a solution to it but can't put your
                            finger on what it is. We
                            are here to help.
                            When it comes to IT development, we got you covered. Some of our offerings are</p>
                    </div>
                    <div class="row justify-content-around mt-5 dev_section">
                        <div class="col-md-3 col-sm-5 col-7 text-center">
                            <NavLink to="/mob-app">
                                <div class="bg-white p-3 rounded-5 ">
                                    <img src={require('./images/dev_1.png')} style={{ width: "100%" }} alt=""></img><br></br>
                                    <p class="fw-bold mb-0 mt-3">MOBILE APPLICATION DEVELOPMENT</p>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-md-3 col-sm-5 col-7 mt-sm-0 mt-5 text-center">
                            <NavLink to="/web-app">
                                <div class="bg-white p-3 rounded-5">
                                    <img src={require('./images/dev_2.png')} style={{ width: "100%" }} alt=""></img>
                                    <p class="fw-bold mb-0 mt-2">WEB APPLICATION<br></br>DEVELOPMENT</p>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-md-3 col-sm-5 col-7 mt-md-0 mt-5 text-center">
                            <NavLink to="/e-commerce">
                                <div class="bg-white p-3 rounded-5">
                                    <img src={require('./images/dev_3.png')} style={{ width: "100%" }} alt=""></img>
                                    <p class="fw-bold mb-0 mt-3">E COMMERCE APPLICATION DEVELOPMENT</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div class="row justify-content-evenly mt-5 dev_section">
                        <div class="col-md-3 col-sm-5 col-7 text-center">
                            <NavLink to="/erp-app">
                                <div class="bg-white p-3 rounded-5">
                                    <img src={require('./images/dev_4.png')} style={{ width: "100%" }} alt=""></img>
                                    <p class="fw-bold mb-0 mt-3">ENTERPRISE APPLICATION DEVELOPMENT</p>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-md-3 col-sm-5 col-7 mt-sm-0 mt-5 text-center">
                            <NavLink to="/desktop-app">
                                <div class="bg-white p-3 rounded-5">
                                    <img src={require('./images/dev_5.png')} style={{ width: "100%" }} alt=""></img>
                                    <p class="fw-bold mb-0 mt-3">DESKTOP APPLICATION DEVELOPMENT</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <img src={require('./images/vector-2.png')} width="100%" alt=""></img>
                </section>
                <section id="consultation">
                    <div class="text-center w-75 m-auto mt-3">
                        <p class="fs-5" style={{ fontWeight: "750" }}>THE DOORS OF CONSULTATION IS ALWAYS AND FULLY OPEN</p>
                        <p class="para_content">Business always comes with complex problems to solve and sometimes such problems team
                            up to become one
                            gigantic
                            problem which can be hard to handle. In such cases, Amico can help you with</p>
                    </div>
                    <div class="row justify-content-around mt-5  dev_section">
                        <div class="col-md-3 col-sm-5 col-7 text-center">
                            <NavLink to="/agile">
                                <div class="bg-white p-3 rounded-5 ">
                                    <img src={require('./images/consul_1.png')} style={{ width: "100%" }} alt=""></img><br></br>
                                    <p class="fw-bold mb-0 mt-3">AGILE<br></br>TRANSFORMATION</p>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-md-3 col-sm-5 col-7 mt-sm-0 mt-5 text-center">
                            <NavLink to="/consulting">
                                <div class="bg-white p-3 rounded-5">
                                    <img src={require('./images/consul_2.png')} style={{ width: "86%" }} alt=""></img>
                                    <p class="fw-bold mb-0 mt-2">PERFORMANCE<br></br>CONSULTING</p>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-md-3 col-sm-5 col-7 mt-md-0 mt-5 text-center">
                            <NavLink to="/digital">
                                <div class="bg-white p-3 rounded-5">
                                    <img src={require('./images/consul_3.png')} style={{ width: "100%" }} alt=""></img>
                                    <p class="fw-bold mb-0 mt-3">DIGITAL<br></br> TRANSFORMATION</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </section>
                <section id="qa">
                    <div class="position-relative mt-5">
                        <img src={require("./images/vector_3.png")} style={{ width: "50%", position: "absolute", left: "50%" }} alt=""></img>
                        <img class="decorate_img" style={{ width: "50%", position: "absolute", bottom: "0%" }} src={require("./images/vector_4.png")} alt=""></img>
                        <div style={{ position: "relative", zIndex: "1", paddingTop: "8%", paddingBottom: "10%" }}>
                            <div class="text-center w-75 m-auto mt-5">
                                <p class=" fs-5" style={{ fontWeight: "750" }}>BEST QUALITY IS OUR FIRST PRIORITY</p>
                                <p class="para_content">Any Digital Transformation is not complete without a Testing Environment. Amico
                                    Solutions provides our
                                    customers with excellent
                                    testing services with the aid of years of experience in executing testing services</p>
                            </div>
                            <div class="row justify-content-around mt-5  dev_section">
                                <div class="col-md-3 col-sm-5 col-7 mt-sm-0 mt-5 text-center">
                                    <NavLink to="/manual-testing" >
                                        <div class="bg-white p-3 rounded-5">
                                            <img src={require("./images/test_1.png")} style={{ width: "86%" }} alt=""></img>
                                            <p class="fw-bold mb-0 mt-2">MANUAL<br></br>TESTING</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div class="col-md-3 col-sm-5 col-7 mt-sm-0 mt-5 text-center">
                                    <NavLink to="/auto-testing">
                                        <div class="bg-white p-3 rounded-5">
                                            <img src={require("./images/test_2.png")} style={{ width: "100%" }} alt=""></img>
                                            <p class="fw-bold mb-0 mt-3">AUTOMATED<br></br>TESTING</p>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home