import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect } from "react";
import { useRef } from "react";
import Signin from "./signin";
import { Usercontext } from "./appnav";


function Herosection() {
    
    const {val, setval} = useContext(Usercontext); 
    
    const sign = useRef();
    
    useEffect(()=>{
        const handleevent = (e)=>{
            if(sign.current && !sign.current.contains(e.target)){
                setval(false);
            }
        };
        
        document.addEventListener('mousedown', handleevent);

        return()=>{
            document.removeEventListener('mousedown', handleevent);
        }
    }, [val]);
   

    return (
        
        <Container className="hero d-flex ">
            {val ? <Signin ref={sign}/> : null}
            <Row className="align-content-center position-relative">
                
                <Col className="d-flex align-items-center" lg={6}>
                    <div className="d-none d-lg-block position-absolute">
                        <div className="icons  d-flex flex-column gap-5 ">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-youtube"></i>
                        </div>
                    </div>
                    
                    <div className="hero-section text-light d-flex flex-column justify-content-lg-center ms-lg-5">
                        <div className="slogan primary">#Coffee for hot days</div>
                        <div className="hero-heading fw-bold">- Cold Brew</div>
                        <div className="hero-text mt-1">Boosts your productivity and build your mood with a glass of coffee in the morning Coffee has a stimulating effect</div>
                        <div className="order mt-sm-5">
                            <button className="btn btn-primary me-3">Order Now</button>
                            <br className="d-block d-sm-none"/>
                            <br className="d-block d-sm-none"/>
                            <span className="cost fs-5 fw-medium">$16.80 |</span> <a href="" className="text-decoration-none">Regular Price</a>
                        </div>
                    </div>
                    
                </Col>
                <Col className="d-flex justify-content-center" lg={6}>
                    <div className="hero-img">
                        <img src="/hero.png" className="hero-img img-fluid" alt="" />
                    </div>
                </Col>
                <div className="scroll position-absolute d-none d-md-block">
                    <a href="" className="text-decoration-none text-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill me-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                    </svg>
                    Scroll down
                    </a>
                </div>
            </Row>
        </Container>
    );
}

export default Herosection;