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
import AcademyGalleryOne from "@/components/Academy-Gallery/AcademyGallery-One";
import TeamNine from "@/components/Team/TeamNine";
import AboutCallToAction from "@/components/Call-To-Action/AboutCallToAction";
import WhyTalentelyCallToAction from "@/components/Call-To-Action/WhyTalentelyCallToAction";
import CallToActionSix from "@/components/Call-To-Action/CallToAction-Six";
import ServiceEleven from "@/components/Services/Service-Eleven";
import CategoryThree from "@/components/Category/CategoryThree";
import EventCarouse from "@/components/Events/EventCarouse";

const WhyTAlentely = () => {
  return (
    <>
      <PageHead title="Why Talentely" />

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
              <AcademyGalleryOne />
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
                  <ServiceEleven isTitle={false} />
                </div>
              </div>
              {/* Content for count */}
              <div className="row row--15">
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center  card-bg-4 highlights">
              <h4>1.5 Lakh+</h4>
              2025 Passed Out Students
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center  card-bg-4 highlights">
              <h4>6.2 Lakh+</h4>
              Laterals
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center  card-bg-4 highlights">
              <h4>650+</h4>
              Java Full stack
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center  card-bg-4 highlights">
              <h4>637+</h4>
              Data Science & Analytics
           </div>
           
           
        </div>
        <div className="row row--15">
           <div className="col-lg-4 col-md-6 col-12 mt--30 text-center card-bg-1 highlights">
              <h4>418+</h4>
              Power BI
           </div>
           <div className="col-lg-4 col-md-6 col-12 mt--30 text-center card-bg-1 highlights">
              <h4>482+</h4>
              Cyber Security & Network Security
           </div>
           <div className="col-lg-4 col-md-6 col-12 mt--30 text-center card-bg-1 highlights">
              <h4>381+</h4>
              Cloud AWS
           </div>
          
        </div>
 
        <div className="row row--15">
        <div className="col-lg-4 col-md-6 col-12 mt--30 text-center card-bg-1 highlights">
              <h4>286+</h4>
              DevOps
           </div>
          
           
        <div className="col-lg-4 col-md-6 col-12 mt--30 text-center card-bg-1 highlights">
              <h4>32k+</h4>
              C++ Programmers
           </div>
        <div className="col-lg-4 col-md-6 col-12 mt--30 text-center card-bg-1 highlights">
              <h4>25k+</h4>
              Python Programmers 
           </div>
       
 

        </div>

        <div className="row row--15">
        <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-4 highlights">
              <h4>28k+</h4>
              Java Programmers
           </div>
        <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-4 highlights">
              <h4>18k+</h4>
              Data Structure Experts
           </div>
         <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-4 highlights">
               <h4>18k+</h4>
               Algorithm Experts
            </div>
         <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-4 highlights">
               <h4>7.6k+</h4>
               Other Niche skills
            </div>
 
         </div>
         <div className="row row--15">
           <div className="col-lg-2 col-md-6 col-12 mt--30 text-center">
           </div>
          </div>
              {/* Content for count end*/}

            </div>
          </div>

          {/* <div className="rbt-team-area bg-color-white ptb--60 ">
            <TeamNine />
          </div> */}

          <div className="rbt-event-area bg-theme-lightblue ptb--60">
            <div className="container">
              <div className="row mb--40">
                <div className="section-title text-center">
                  <h2 className="title sectionHeading">Benefits</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <EventCarouse />
                </div>
              </div>
            </div>
          </div>

          <div className="rbt-team-area rbt-section-gap">
            <TeamThree />
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

export default WhyTAlentely;
