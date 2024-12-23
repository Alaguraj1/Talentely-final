import React from "react";
import Image from "next/image";
import Link from "next/link";

import TeamHead from "./TeamHead";

import TeamData from "../../data/elements/team.json";

const TeamThree = () => {
  return (
    <>
      <div className="container">
  
        {/* <TeamHead title="Team (Modern)." desc="Modern Circle Style." /> */}
        <h3 className="title text-center mb--20" style={{fontWeight:"normal"}} >
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
        </div>
      </div>
    </>
  );
};

export default TeamThree;
