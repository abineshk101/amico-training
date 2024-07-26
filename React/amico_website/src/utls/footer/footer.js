import { HashLink as NavLink } from 'react-router-hash-link'

const Footer = (props) => {

    return (
        <>
            <footer >
                <section>
                    <div class="row mt-3">
                        <div class="col-md-5 col-12 m-auto">
                            <div class="text-center">
                                <img src={require('./images/mobile_img.png')} class="mobi-amico ms-1" alt=""></img>
                            </div>
                        </div>
                        <div class="col-md-7 m-auto col-12">
                            <div class="text-center ">
                                <img src={require('./images/Y-amico.png')} class="mobi-amico" alt=""></img>
                            </div>
                            <div class=" d-flex justify-content-around  rating">
                                <img src={require('./images/rating-1.png')} alt=""></img>
                                <img src={require('./images/rating-2.png')} alt=""></img>
                                <img src={require('./images/rating-3.png')} alt=""></img>
                                <img src={require('./images/rating-4.png')} alt=""></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="row mt-5 ms-5 y_amico_num">
                        <div class="col-md-4 col-sm-6">
                            <div class="position-relative">
                                <img src={require('./images/01.png')} alt=""></img>
                                <div class=" fs-sm-5 fs-6 position-absolute">EXPERIENCED TEAM</div>
                                <p class="mt-2 para_content ">Our team has a combined experience of over 35 years in the IT industry and
                                    have seen it
                                    grow and grown with the technology and innovation.
                                    With one firm foot on the new technology and another on our problem solving skills, we bring best of both
                                    worlds together.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="position-relative">
                                <img src={require('./images/02.png')} alt=""></img>
                                <div class=" fs-sm-5 fs-6 position-absolute">FLEXIBILITY</div>
                                <p class="mt-2 para_content">We work on different platforms and technologies to suit the customer's needs.
                                    New age
                                    problems need new age solutions and we need it now.
                                    We are flexible to accommodate your requests and demands for your application.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="position-relative">
                                <img src={require('./images/03.png')} alt=""></img>
                                <div class=" fs-sm-5 fs-6 position-absolute">CURIOUS</div>
                                <p class="mt-2 para_content"> No business is big or small for us. We understand that our solution and
                                    products impact
                                    people in the way we cannot imagine and hence we strive to deliver it to the person who may need it the
                                    most.
                                    This leads to innovation and customer satisfaction.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="position-relative">
                                <img src={require('./images/04.png')} alt=""></img>
                                <div class=" fs-sm-5 fs-6 position-absolute">ONE-STOP</div>
                                <p class="mt-2 para_content">Our job is not just help you solve your problems with your business but to make
                                    you aware
                                    of the other avenues which you can take advantage of.
                                    This saves time and money and provides a different level of customer experience to your end customer.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="position-relative">
                                <img src={require('./images/05.png')} alt=""></img>
                                <div class=" fs-sm-5 fs-6 position-absolute">COLLABORATIVE</div>
                                <p class="mt-2 para_content">We ask tough questions, have crucial conversations and try to come up with
                                    creative
                                    solutions.
                                    When you work with us, you don't work with a consultant, you work with a team member.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="position-relative">
                                <img src={require('./images/06.png')} alt=""></img>
                                <div class=" fs-sm-5 fs-6 position-absolute">COLLABORATIVE</div>
                                <p class="mt-2 para_content">We at Amico, get easily bored with the status quo and keep challenging it. This
                                    has led to
                                    many breakthrough products and projects for our clients. You can be assured that your business problems
                                    will be looked at from 360 degree angle.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="m-auto w-50">
                        <img src={require('./images/end_img.png')} style={{ width: "100%" }} alt=""></img>
                    </div>
                    {
                        props.content ? <div dangerouslySetInnerHTML={{ __html: `<p class="m-auto text-center mt-4 w-75 fw-bold ">${props.content}</p>` }} /> : <></>
                    }
                </section>

                <div style={{ backgroundColor: "rgba(190, 235, 255, 1)" }} class="mt-5">
                    <div class="row justify-content-evenly pt-4 footer_row text-center text-sm-start">
                        <div class="col-md-2 col-sm-5 col-12 mb-mb-0 mb-4">
                            <ul>
                                <h5 class="pb-2">MENU</h5>
                                <li><NavLink to="/#home_bg">
                                    <p class="fw-bolder mb-0 p-1" style={{ color: " rgba(0, 105, 151, 1)" }}>Home</p>
                                </NavLink></li>
                                <li><NavLink to="/about">
                                    <p class="fw-bolder mb-0 p-1" style={{ color: " rgba(0, 105, 151, 1)" }}>About</p>
                                </NavLink></li>
                                <li><NavLink to="/#services">
                                    <p class="fw-bolder mb-0 p-1" style={{ color: " rgba(0, 105, 151, 1)" }}>Services</p>
                                </NavLink></li>
                                <li><NavLink to="/career">
                                    <p class="fw-bolder mb-0 p-1" style={{ color: " rgba(0, 105, 151, 1)" }}>Career</p>
                                </NavLink></li>
                                <li><NavLink to="/contact-us">
                                    <p class="fw-bolder mb-0 p-1" style={{ color: " rgba(0, 105, 151, 1)" }}>Contact Us</p>
                                </NavLink></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-5 col-12 mb-mb-0 mb-4">
                            <ul>
                                <h5 class="pb-2 ">OUR SERVICES</h5>
                                <li><NavLink to="/#development">
                                    <p class="fw-bolder p-1 " style={{ color: " rgba(0, 105, 151, 1)" }}><img src={require('./images/arrow.png')}
                                        width="12px" alt=""></img>&nbsp; Development</p>
                                </NavLink></li>
                                <li><NavLink to="/#consultation">
                                    <p class="fw-bolder p-1 " style={{ color: " rgba(0, 105, 151, 1)" }}><img src={require('./images/arrow.png')}
                                        width="12px" alt=""></img>&nbsp;Consulting</p>
                                </NavLink></li>
                                <li><NavLink to="/#qa">
                                    <p class="fw-bolder p-1 " style={{ color: " rgba(0, 105, 151, 1)" }}><img src={require('./images/arrow.png')}
                                        width="12px" alt=""></img>&nbsp;Q.A.Services</p>
                                </NavLink></li>

                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-5 col-7 mb-mb-0 mb-4">
                            <ul>
                                <h5 class="pb-2">CONTACT INFO</h5>
                                <li class="d-flex">
                                    <div class="me-2"><img src={require('./images/location.png')} width="20px" alt=""></img></div>
                                    <p class="fw-semibold foot_data " style={{ color: " rgba(0, 105, 151, 1)" }}>151, Sagodharar Street,
                                        Chettikulam, Nagercoil 629001, India</p>
                                </li>
                                <li>
                                    <p class="fw-semibold foot_data" style={{ color: " rgba(0, 105, 151, 1)" }}><img
                                        src={require('./images/message.png')} class="me-2" width="20px" alt=""></img>contact@amicosolutions.com</p>
                                </li>
                                <li>
                                    <p class="fw-semibold foot_data" style={{ color: " rgba(0, 105, 151, 1)" }}><img src={require('./images/call.png')}
                                        class="me-2" width="20px" alt=""></img>+(91) 805-619-2643</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-5 col-12 mb-mb-0 mb-4">
                            <ul class="d-inline-block d-sm-block">
                                <h5 class="pb-2">CONTACT US</h5>
                                <li class="my-3 "><input type="text" class="form-control form-control-sm rounded-3 foot_input"
                                    placeholder="Name"></input></li>
                                <li class="my-3 "><input type="email" class="form-control form-control-sm rounded-3 foot_input"
                                    placeholder="E mail"></input></li>
                                <li class="my-3 "><textarea type="text" class="form-control form-control-sm rounded-3 foot_input"
                                    placeholder="Comments"></textarea></li>
                                <li><button class="border-0 rounded-3 px-2 py-1" style={{ backgroundColor: "rgba(0, 105, 151, 1)" }}><span
                                    class="text-white">submit</span></button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-75 m-auto text-center pb-3">
                        <div style={{ border: "rgba(0, 105, 151, 1) 2px solid" }}></div>
                        <div class="fw-semibold my-2 ">All Rights Reserved<br></br>AMICO Software Solutions © 2021 </div>
                        <div class="w-50 d-flex justify-content-evenly m-auto">
                            <img src={require('./images/fb.png')} style={{ width: "20px" }} alt=""></img>
                            <img src={require('./images/insta.png')} style={{ width: "20px" }} alt=""></img>
                            <img src={require('./images/twitter.png')} style={{ width: "20px" }} alt=""></img>
                            <img src={require('./images/linkedin.png')} style={{ width: "20px" }} alt=""></img>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer