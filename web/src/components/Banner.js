import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { Download } from "react-bootstrap-icons";
import headerImg from "../assets/img/Totoro.png";
import { CromerHourglass } from "./CromerHourglass";
import profilepic from "../assets/img/profile_pic.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500); 
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="personal-info">
                            <img src={profilepic} id="profile"/>
                            <span className="tagline">she/her | INFJ-A</span>
                        </div>
                        <h1>{"Hi I'm Joyce ! "}</h1>
                        <p>I am a 20 year old engineering student located in France. My interests are video games, volleyball, playing music, and learning about languages & cultures</p>
                        <a href="https://www.canva.com/design/DAFZcVFIdso/SujFrqK9LDfwA3yQlcS5NQ/view?utm_content=DAFZcVFIdso&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                        target="_blank">Get My Resume !<div class="download-btn"><Download size={25}/></div></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <CromerHourglass />
                        {/* <img src={headerImg} alt="Header Img" /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}