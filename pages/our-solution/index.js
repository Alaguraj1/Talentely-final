import React from "react";
import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleThree from "@/components/Header/HeaderStyle-Three";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterThree from "@/components/Footer/Footer-Three";
import CounterThree from "@/components/Counters/Counter-Three";
import AccordionThree from "@/components/Accordions/Accordion-Three";
import TeamThree from "@/components/Team/TeamThree";
import ContactForm from "@/components/Contacts/Contact-Form";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "@/components/Abouts/About";

import TeamNine from "@/components/Team/TeamNine";
import AboutCallToAction from "@/components/Call-To-Action/AboutCallToAction";
import WhyTalentelyCallToAction from "@/components/Call-To-Action/WhyTalentelyCallToAction";
import CallToActionSix from "@/components/Call-To-Action/CallToAction-Six";
import ServiceEleven from "@/components/Services/Service-Eleven";
import CategoryThree from "@/components/Category/CategoryThree";
import EventCarouse from "@/components/Events/EventCarouse";
import AcademyGalleryFour from "@/components/Academy-Gallery/AcademyGallery-Four";
import ServiceSolution from "@/components/Services/Service-Solution";
import TeamSolution from "@/components/Team/TeamSolution";


const OurSolution = () => {
  return (
    <>
      <PageHead title="Our Solution" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleThree
            headerType="rbt-transparent-header"
            
            headerSticky="rbt-sticky"
          />
          <MobileMenu />
          <Cart />

          <div className="rbt-about-area about-style-1  bg-theme-lightblue rbt-section-gap">
            <div className="container">
              <AcademyGalleryFour />
            </div>
          </div>

          <div className="service-wrapper  bg-color-white ptb--60">
            <div className="container">
              <div className="row mb--40">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    {/* <span className="subtitle bg-secondary-opacity">
                    We Provide 
                    </span> */}
                    <h2 className="title sectionHeading">We Provide </h2>
                    {/* <p className="description has-medium-font-size mt--20">
                      There are many variations of passages of the Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ServiceSolution isTitle={false} />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="rbt-team-area bg-color-white ptb--60 ">
            <TeamNine />
          </div> */}

          <div className="rbt-event-area bg-theme-lightblue ptb--60">
            <div className="container">
              <div className="row mb--40">
                <div className="section-title text-center">
                  <h4 className="title sectionHeading">“A journey of a thousand miles begins with a single step”, we at TALENTELY help students to begin (kickstart), proceed (prepare) and achieve their first destination towards a successful career.</h4>
                </div>
              </div>
            
            </div>
          </div>

          <div className="rbt-team-area rbt-section-gap">
            <TeamSolution />
          </div>

          <div
            className="rbt-call-to-action-area  bg-gradient-18 rbt-section-gap-own"
            style={{ padding: "60px" }}
          >
            <CallToActionSix />
          </div>
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default OurSolution;
