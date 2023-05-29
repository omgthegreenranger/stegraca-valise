import React from "react";
import ProfilePic from "./images/profile-photo.jpg";
import "./biography.css";

export default function Bio() {
  return (
    <>
      <div>
        <div className="bio-block">
          <p>STEPHEN CARDIE is a fullstack web developer as a second career.</p>
          <p>
            Spending over a decade on the client-facing, sales-enabling side of
            tech, it became very apparent that his motivation was about creating
            tools to make the job easier than the sales job itself.
          </p>
          <p>Clearly, he should be doing that instead.</p>
          <p>
            He is available for support work, code refactoring, or to help you
            build that feature.
          </p>
        </div>
      </div>
    </>
  );
}
