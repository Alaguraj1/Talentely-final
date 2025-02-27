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
import Gallery from "@/components/Gallery/Gallery";

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

         <Gallery/>

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
