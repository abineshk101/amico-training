import "./manual_test.css"
import { useEffect } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"

const ManualTest = () => {
    useEffect(() => {
        window.scrollTo(1, 0)
    }, [])
    return (
        <>
            <Header />
            <section>
                <div class="row position-relative">
                    <div class="col-md-6  col-12 m-manual text-md-start text-center d-flex justify-content-center m-auto m-manual">
                        <div style={{ width: "70%" }}>
                            <h2 class=" mb-4 mt-4" style={{ fontWeight: "700" }}>MANUAL<br></br><span class="fw-medium">TESTING</span></h2>
                            <p class="para_content">
                            Our Manual Testing services has well defined Quality Assurance process built to minimize 
                            the number of errors, bugs, and defects in software development cycle. Our test engineers
                             are highly qualified and experience in testing IT projects of varying sizes and complexity. 
                             Manual Testing Services are usually part of Custom Application Development.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-9 m-manual d-flex justify-content-center mt-md-5 m-auto">
                        <img alt="" width="100%" class="manual_test_img1 " src={require('./images/manual_test_img1.png')}></img>
                    </div>
                    <div class="z-n1 manual_test_vector1"><img alt="" width="100%" src={require("./images/manual_test_vector1.png")}></img></div>
                </div>
            </section>
            <section>
                <h3 class="fw-bold manual_test_dev_heading text-center mt-5 mt-5rem mb-5">OUR TESTING PROCESS</h3>
                <div class="row position-relative justify-content-around manual_test_dev text-center">
                    <div class="col-md-4 col-sm-6 " >
                        <img  alt=" " src={require('./images/manu_dev1.png')}></img>
                        <p class="fw-bold mt-3">REQUIREMENT ANALYSIS</p>
                        <p class="para_content px-5" style={{textAlign:"justify"}}>  We get invoiced right from the business analysis stage and functional analysis. 
                        This helps us define the functional requirements and forecast the scope of manual testing services</p>
                    </div>
                    <div class="col-md-4 col-sm-6 ">
                    <img  alt=" " src={require('./images/manu_dev2.png')}></img>
                        <p class="fw-bold mt-3">TEST STRATEGY</p>
                        <p class="para_content px-5" style={{textAlign:"justify"}}>As the requirements are ready, test planning and strategy documents will be developed. They serve as a guideline for the testing processes, schedules,
                         coverage etc through out the development life cycle.</p>
                    </div>
                    <div class="col-md-4 col-sm-6 ">
                    <img  alt=" " src={require('./images/manu_dev3.png')}></img>
                        <p class="fw-bold mt-3">TEST CASES</p>
                        <p class="para_content px-5 " style={{textAlign:"justify"}}>Test cases are developed based on the SRS and non functional requirements, existing rules and logic of the application. 
                        This documentation helps us create a repeatable test cases..</p>
                    </div>
                    <div class="col-md-4 col-sm-6 mt-3">
                    <img  alt=" " src={require('./images/manu_dev4.png')}></img>
                        <p class="fw-bold mt-3">TEST EXECUTION</p>
                        <p class="para_content px-5" style={{textAlign:"justify"}}>Test your business processes and systems against defined business parameters 
                        to meet the expectation of your users to ensure high functionality.</p>
                    </div>
                    <div class="col-md-4 col-sm-6">
                    <img  alt=" " src={require('./images/manu_dev5.png')}></img>
                        <p class="fw-bold mt-3">REGRESSION TESTING</p>
                        <p class="para_content px-5" style={{textAlign:"justify"}}>Test execution is one of the most important part of the software development lifecycle. 
                        We identify and prioritize the crucial defects, along with less critical bugs and fixes..</p>
                    </div>
                    <div>
                    <div class="z-n1 manual_test_vector2">
                    <img alt=" " width="100%" src={require("./images/manual_test_vector2.png")}></img>
                    </div>
                    </div>
                </div>
            </section>
            <Footer content="IF YOU WANT TO TALK ABOUT MANUAL TESTING REQUIREMENTS FOR YOUR COMPANY, WE ARE ALL EARS."/>
        </>
    )
}

export default ManualTest