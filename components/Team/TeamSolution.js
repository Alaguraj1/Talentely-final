import React from "react";
import Image from "next/image";
import Link from "next/link";

import TeamHead from "./TeamHead";

import TeamData from "../../data/elements/team.json";

const TeamSolution = () => {
  return (
    <>
      <div className="container">
        {/* <TeamHead title="Team (Modern)." desc="Modern Circle Style." /> */}
        <h3 className="title text-center mb--20" style={{fontWeight:"normal"}} >
        Your AI-Powered Learning Companion
        </h3>
        <div className="row row--15">
        <div className="col-lg-6 col-md-6 col-12 mt--30">
        <img src={'/images/solution/talentely-AI.jpg'} alt="Talentely"/>
        </div>

        <div className="col-lg-6 col-md-6 col-12 mt--30">
        <div className="content">
            <p>Talentely, offered by Six Phrase, is a cutting-edge online platform that revolutionizes education. As an AI-enabled Learning Management System (LMS), it creates personalized learning plans for each student based on their Skill Competency. With Talentely’s End-to-End Placement preparation portal, undergraduate and postgraduate students receive comprehensive support.</p>
            <p>With Talentely’s Progressive Web App design, mobile accessibility is seamless. It empowers educators to manage student learning effectively, identifying gaps and providing tailored mentorship.</p>
            <h5>Join Talentely now for a unique learning journey, where AI-driven guidance propels you toward academic excellence.</h5>
        </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default TeamSolution;
