import "./career.css"
import { useEffect } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"

export const Career = () => {
    useEffect(() => {
        window.scrollTo(3, 0)
    }, [])
    return (
        <>
            <Header />
            <section id="career">
                <div class="row position-relative mb-5">
                    <div class="col-lg-6 col-12 m-auto text-lg-start text-center d-flex justify-content-center m-auto">
                        <div style={{ width: "70%" }}>
                            <h3 class=" mb-4 mt-5 fs-2 fw-bold">CAREER</h3>
                            <p class="career_heading fw-semibold">Start your career at AMICO SOFTWARE SOLUTUIONS.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-9 m-auto d-flex justify-content-center mt-md-5">
                        <img alt="" class=" w-100 " src={require('./images/career_img1.png')}></img>
                    </div>
                    <div class="career_vector1"><img alt="" width="100%" src={require("./images/career_vector1.png")}></img>
                    </div>
                </div>
            </section>
            <section >
                <div class="row justify-content-around" >
                    <div class="col-lg-3 col-md-5 col-7 mt-5 mt-lg-0 card" style={{  color: "#006997" }}>
                        <img src={require('./images/career_dev1.png')} class="card-img-top" alt="..."></img>
                        <div class="card-body" style={{ backgroundColor: '#BEEBFF' }}>
                            <a><p class="career_heading text-center">Internship</p></a>
                            <p class="card-text">We are looking for a dynamic, energetic intern who is eager to learn about our company by assisting various departments. You will be wo ....</p>
                        <div class="row mt-2">
                            <div class="col-6">Position</div>
                            <div class="col-6">Intern</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">Required Exp</div>
                            <div class="col-6">No Experience</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">Location</div>
                            <div class="col-6">Kanyakumari</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">Type</div>
                            <div class="col-6">Full Time</div>
                        </div>

                        </div>

                    </div>
                    <div class="col-lg-3 col-md-5 col-7 mt-5 mt-lg-0 card" style={{ color: "#006997" }}>
                        <img src={require('./images/career_dev2.png')} class="card-img-top" alt="..."></img>
                        <div class="card-body" style={{ backgroundColor: '#BEEBFF' }}>
                            <a><p class="career_heading text-center">Flutter Developer </p></a>
                            <p class="card-text">We are looking for Flutter Developer who can create multi-platform apps for iOS and Android using Flutter development framework. .... </p>
                            <div class="row mt-2">
                            <div class="col-6">Position</div>
                            <div class="col-6">Junior Developer </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">Required Exp</div>
                            <div class="col-6">1 - 3 yrs </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">Location</div>
                            <div class="col-6">Kanyakumari</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">Type</div>
                            <div class="col-6">Full Time</div>
                        </div>

                        </div>
                    </div>
                    <div class="col-lg-3 col-md-5 col-7 mt-5 mt-lg-0 card" style={{ color: "#006997" }}>
                        <img src={require('./images/career_dev3.png')} class="card-img-top" alt="..."></img>
                        <div class="card-body" style={{ backgroundColor: '#BEEBFF' }}>
                            <a><p class="career_heading text-center">Angular Developer </p></a>
                            <p class="card-text">We are looking to hire an experienced Angular Developer to join our dynamic team. As a developer, you will be responsible for creating .... </p>
                            <div class="row mt-2">
                            <div class="col-6">Position</div>
                            <div class="col-6">Junior Developer </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">Required Exp</div>
                            <div class="col-6">1 - 4 yrs </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">Location</div>
                            <div class="col-6">Kanyakumari</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">Type</div>
                            <div class="col-6">Full Time</div>
                        </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}