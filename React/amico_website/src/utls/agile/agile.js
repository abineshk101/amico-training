import { useEffect } from "react"
import Footer from "../footer/footer"
import Header from "../header/header"
import "./agile.css"

const Agile = () => {
    useEffect(() => {
        window.scrollTo(2, 0);
    }, [])
    return (
        <>
            <Header />
            <section id="agile">
                <div class="row position-relative">
                    <div class="col-md-6 col-12 m-auto text-md-start text-center d-flex justify-content-center m-auto">
                        <div style={{ width: "70%" }}>
                            <h2 class=" mb-4 mt-lg-0 mt-5" style={{ fontWeight: "700" }}>AGILE<br></br><span class="fw-medium">TRANSFORMATION</span></h2>
                            <p class="para_content">
                                Amico Solutions as an Ecommerce Application development company, powers business with cutting-edge
                                technology to help them serve their existing customers better and also acquire new customers. With
                                our in-depth industry knowledge and solid technical skills we deliver market ready software/application
                                in a quick turn-around.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-9 m-auto d-flex justify-content-center mt-md-5">
                        <img alt="" width="90%" class="agile_img1 " src={require('./images/agile_img1.png')}></img>
                    </div>
                    <div class="z-n1 agile_vector1"><img alt="" width="100%" src={require("./images/agile_vector1.png")}></img></div>
                </div>
            </section>
            <section>
                <div class="mt-5 mt-md-0 mt-5rem">
                    <div class="text-center"><span class="fw-bold  agile_dev_heading">CREATING AGILE TEAM OR TEAMS WILL HELP YOU</span></div>
                    <div class="row mt-5 justify-content-around text-center agile_dev_img fw-bold ">
                        <div class="col-sm-2 col-5">
                            <img alt="" src={require("./images/agile_dev1.png")}></img><p>UNLEASH INNOVATION</p>
                        </div>
                        <div class="col-sm-2 col-5">
                            <img alt="" src={require("./images/agile_dev2.png")}></img><p>BOOST MORALE</p>
                        </div>
                        <div class="col-sm-2 col-5">
                            <img alt="" src={require("./images/agile_dev3.png")}></img><p>SCALE ALMOST IMMEDIATELY</p>
                        </div>
                        <div class="col-sm-2 col-5">
                            <img alt="" src={require("./images/agile_dev4.png")}></img><p>SCALE ALMOST IMMEDIATELY</p>
                        </div>

                    </div>
                    <div class="z-n1 agile_vector2">
                        <img alt=" " width="100%" src={require("./images/agile_vector2.png")}></img>
                    </div>
                </div>
            </section>
            <section>
                <div class="w-75 mt-5 text-center m-auto mb-5">
                    <p class="agile_dev_heading fw-bold">IF YOU WANT YOUR ORGANIZATION TO BECOME AGILE, TALK TO US. <br></br>TO BE FRANK, WHO DOESN’T WANT TO BE AGILE?</p>
                    <p style={{ textAlign: "justify" }} class="para_content">Agile transformation at its core helps the employees a chance to fail and learn and then
                        succeed which unleashes their creativity and bring breakthrough ideas to table. With cross
                        functional teams, the team learns to leverage the expertise of each of the team member’s to the
                        team’s advantage which inturn brings a sense of belonging to the team and boost employee morale.
                        If we understand to which process the Agile methodology fits better, the company can scale almost
                        immediately to greater heights. When the focus of the team turns to breakthrough ideas and
                        innovation the focus remains of the customer satisfaction rather than self appraisal.
                        This helps the team to battle the hierarchy and who does what.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Agile