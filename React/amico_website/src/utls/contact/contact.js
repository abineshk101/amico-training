import { useEffect } from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import './contact.css'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(2, 0)
    }, [])
    return (
        <>
            <Header />
            <section class="contact">
                <div class="row position-md-relative z-md-n1 justify-content-center justify-content-md-start " >
                    <div class="col-12 d-none d-md-inline ">
                        <img alt='' style={{ width: "100%" }} class="position-relative " src={require("./images/contact_img1.png")}></img>
                    </div>
                    <div class="col-md-5 col-9 text-center text-md-start" >
                        <div class="ms-md-5 ms-3 mt-5 contact_text" >
                            <p class="fs-md-1 fs-sm-2 fs-3 fw-bold">CONTACT  US...</p>
                            <p class="fw-semibold para_content" style={{ textAlign: "justify" }}>Reach out to us anytime and lets create a better future for all technology users together,
                                forever. We are open to all types of collab offers and tons more.</p>
                        </div>
                    </div>
                </div>
                <div class="row contact_img2 p-3 justify-content-around ">
                    <div class="col-md-6 col-7 m-auto m-md-0">
                        <img alt='' src={require('./images/contact_img2.png')}></img>
                    </div>
                    <div class=" col-md-6 col-10 d-flex justify-content-center mx-md-auto mt-5 mt-md-0">
                        <div class="w-75">
                            <p class="fw-bold para_head text-center">FEEL FREE TO GET IN TOUCH </p>
                            <div class="p-3 rounded-4" style={{ backgroundColor: "rgba(234, 247, 252, 1)" }}>
                                <input type="text" placeholder="First Name" class="bg-transparent"></input>
                                <input type="text" placeholder="Last Name" class="bg-transparent"></input>
                                <input type="text" placeholder="E Mail" class="bg-transparent"></input>
                                <input type="text" placeholder="Phone" class="bg-transparent"></input>
                                <textarea type="text" placeholder="Comments / Messages" class="bg-transparent"></textarea>
                                <div class="text-end">
                                <button type="button" class="rounded-2 border-0 p-1 px-2 " style={{backgroundColor:"rgba(0, 105, 151, 1)"}}>
                                    <span class="fw-bold text-white">SUBMIT <img style={{width:"20px"}} src={require('./images/contact_submit.png')}></img></span>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <p class="fw-bold fs-3 text-center">OUR LOCATIONS</p>
                <div class="row contact_detail align-items-center justify-content-center position-relative">
                    <div class="col-md-4 col-7">
                        <p class=" text-center fw-bold">KANYAKUMRI<br></br>OFFICE</p>
                        <ul class="d-grid row-gap-3 w-75 m-lg-auto">
                            <li class="para_content"><img alt='' src={require('./images/contact_location.png')}></img>151, Sagodharar street Chettikulam, Nagercoil, 629001, India</li>
                            <li class="para_content"><img alt='' src={require('./images/contact_phone.png')}></img>+(91) 805-619-2643</li>
                            <li class="para_content"><img alt='' src={require('./images/contact_message.png')}></img>info@amicosolutions.com</li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-7 py-3 text-center">
                        <img alt='' src={require("./images/contact_img3.png")}></img>
                    </div>
                    <div class="col-md-4 col-7">
                    <p class="text-center fw-bold">CHENNAI<br></br>OFFICE</p>
                        <ul class="d-grid row-gap-3 w-75 m-lg-auto ">
                            <li class="para_content"><img alt='' src={require('./images/contact_location.png')}></img>23, ABC Building, Medavakkam, Chennai, India - 600100</li>
                            <li class="para_content"><img alt='' src={require('./images/contact_phone.png')}></img>+(91) 805-619-2643</li>
                            <li class="para_content"><img alt='' src={require('./images/contact_message.png')}></img>info@amicosolutions.com</li>
                        </ul>
                    </div>
                    <div class="z-n1 contact_vector2">
                    <img alt=" " width="100%" src={require("./images/contact_vector2.png")}></img>
                </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Contact