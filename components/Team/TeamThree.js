import React from "react";
import Image from "next/image";
import Link from "next/link";

import TeamHead from "./TeamHead";

import TeamData from "../../data/elements/team.json";

const TeamThree = () => {
  return (
    <>
      <div className="container">
      <h3 className="title text-center mb--20" style={{fontWeight:"normal"}} >
          Recruit for a Wide Range of Skillsets
        </h3>
        <div className="row row--15">
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center  card-bg-1 highlights">
              <h4>1 Lakh+</h4>
              2023 Passed Out Students
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center  card-bg-2 highlights">
              <h4>1 Lakh+</h4>
              2022 Passed Out
              Students
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center  card-bg-3 highlights">
              <h4>1 Lakh+</h4>
              2021 Passed Out
              Students
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center  card-bg-4 highlights">
              <h4>2 Lakhs+</h4>
              2-5 Years
              Experienced Candidates
           </div>
           
           
        </div>
        <div className="row row--15">
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-4 highlights">
              <h4>3 Lakhs+</h4>
              5+ Years
              Experienced Candidates
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-3 highlights">
              <h4>10k+</h4>
              Future Skills Experts
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-2 highlights">
              <h4>10k+</h4>
              Full Stack
              Experts
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-1 highlights">
              <h4>30k+</h4>
              C Programmers
           </div>
          
           
        </div>
 
        <div className="row row--15">
        <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-1 highlights">
              <h4>30k+</h4>
              C++ Programmers
           </div>
        <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-2 highlights">
              <h4>25k+</h4>
              Python Programmers 
           </div>
        <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-3 highlights">
              <h4>25k+</h4>
              Java Programmers
           </div>
           <div className="col-lg-3 col-md-6 col-12 mt--30 text-center card-bg-4 highlights">
              <h4>18k+</h4>
              Data Structure Experts
           </div>
          

        </div>
        <div className="row row--15">
        <div className="col-lg-4 col-md-6 col-12 mt--30 text-center"><img src={'/images/contact/softskills.jpg'} alt="Talentely" style={{height:"120px", width:"100%"}}/>
         </div>
         <div className="col-lg-4 col-md-6 col-12 mt--30 text-center card-bg-7 highlights">
              <h4>18k+</h4>
              Algorthim Experts
           </div>
           <div className="col-lg-4 col-md-6 col-12 mt--30 text-center">
           <img src={'/images/why-talentely/access-diverse-talent.jpg'} alt="Talentely" style={{height:"120px", width:"100%"}}/>
           </div>
         </div>


        {/* <TeamHead title="Team (Modern)." desc="Modern Circle Style." /> */}
        {/* <h3 className="title text-center mb--20" style={{fontWeight:"normal"}} >
          Recruit for a Wide Range of Skillsets
        </h3>
        <div className="row row--15">
          {TeamData &&
            TeamData.teamTwo.map((data, index) => (
              <div className="col-lg-3 col-md-6 col-12 mt--30" key={index}>
                {data.details.map((item, innerIndex) => (
                  <div
                    className="rbt-team team-style-default rbt-hover-02"
                    key={innerIndex}
                  >
                    <div className="inner">
                      <div className="thumbnail">
                        <Image
                          src={item.img}
                          width={415}
                          height={555}
                          priority
                          alt="Corporate Template"
                        />
                      </div>
                      <div className="content">
                        <h4
                          style={{ textAlign: "center", fontSize: "18px",fontWeight:"normal", marginBottom: "0px" }}
                          dangerouslySetInnerHTML={{ __html: item.name }}
                        ></h4>
                    
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div> */}
      </div>
    </>
  );
};

export default TeamThree;
