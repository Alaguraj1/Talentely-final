import Image from "next/image";
import React from "react";

import aboutImg from "../../public/images/solution/solution-intro.jpg";

const AcademyGalleryFour = () => {
  return (
    <>
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <div className="content">
            <Image
              className="w-100 radius-10"
              src={aboutImg}
              width={526}
              height={645}
              alt="About Images"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="inner pl--50 pl_sm--0 pl_md--0 pl_lg--0">
            <div className="section-title text-start">
              <h2 className="title sectionHeading">About Talentely Online Service</h2>
              <p className="description mt--10">
              <b>Introducing Talentely Online Platform - Education without Barriers</b><br/>TALENTELY a sister concern of Six Phrase is aimed at Democratizing Talent Discovery by aggregating Institutions, Corporates & Students. .
              </p>
              {/* <div className="plan-offer-list-wrapper">
                <div>
                  <h5 className="mb--20" style={{fontWeight:"normal"}}>
                    Access to Largest Pre-Trained Talent with Zero Cost
                  </h5>
                  <div className="plan-offer-list-wrapper">
                    <ul className="plan-offer-list ">
                      <li>
                        <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Employability Skills
                        Trained
                      </li>
                      <li>
                        <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}} ></i> Future Skills Trained
                      </li>
                      <li>
                        <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Custom &amp; Niche
                        Skill Trained
                      </li>
                      <li>
                        <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> AI Driven Training
                        &amp; Assessment Platform
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="why-talentely-list-section">
                  <h5 className="mb--20" style={{fontWeight:"normal"}}>360° Profiled Candidates</h5>
                  <div className="plan-offer-list-wrapper">
                    <ul className="plan-offer-list">
                      <li>
                        <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Learner’s DNA Pattern
                        Captured
                      </li>
                      <li>
                        <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Student Skill
                        credibility verified with EIS Authentication Framework
                      </li>
                      <li>
                        <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Certifications,
                        Projects &amp; Competitive Programing Scores Captured
                      </li>
                      <li>
                        <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Student Job Preference
                        Captured
                      </li>
                      <li>
                        <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Personal &amp;
                        Academic Information
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt--20 why-talentely-list-section" >
                <h5 className="mb--15" style={{fontWeight:"normal"}}>Pan India Recruitment Support</h5>
                <div className="plan-offer-list-wrapper">
                  <ul className="plan-offer-list">
                    <li>
                      <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Access to Largest Pool
                      of Pre-Trained Talent across Tier 1, 2 &amp; 3
                      Institutions
                    </li>
                    <li>
                      <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Precise Recruitment
                      based on EIS, Student Preference &amp; Performance
                    </li>

                    <li>
                      <i className="feather-arrow-right" style={{color:"#3EB75E",fontSize:"20px"}}></i> Spot Hidden Gems in Tier
                      2 &amp; 3 Institutions
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="mt--20 why-talentely-list-section">
                <h5 className="mb--15" style={{ fontWeight: "normal" }}>
                TALENTELY has 3 components
                </h5>
                <div className="mt--30">
                  <ul
                    className="rbt-list-style-2 rbt-generic-list-control-section"
                    style={{ display: "block", marginBottom:"0px" }}
                  >
                    <li
                      className="rbt-generic-list-control"
                      style={{  marginTop:"10px" }}
                    >
                      <i className="feather-check"></i>{" "}
                      <span style={{ fontSize: "16px" }}>
                      LMS – Learning Management System
                      </span>
                    </li>
                    <li  style={{  marginTop:"15px" }}>
                      <i className="feather-check"></i>
                      <span style={{ fontSize: "16px" }}>
                      PMS – Profile Management System
                      </span>
                    </li>

                    <li  style={{  marginTop:"15px" }}>
                      <i className="feather-check"></i>
                      <span style={{ fontSize: "16px" }}>
                      TMS – Talent Management System
                      </span>
                    </li>

                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyGalleryFour;
