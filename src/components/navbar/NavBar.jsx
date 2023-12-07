import React from "react";
import { MdMail, MdSimCardDownload } from "react-icons/md";
import { SiMastodon, SiLinkedin, SiGithub } from "react-icons/si";
import "./navbar.css";
import { IconContext } from "react-icons";
import { animated, useSprings } from "@react-spring/web";

export default function NavBar(props) {
  const contacts = [
    {
      id: "github",
      link: "http://www.github.com/omgthegreenranger",
      title: "GitHub",
      icon: <SiGithub />,
    },
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/stephencardie/",
      title: "LinkedIN",
      icon: <SiLinkedin />,
    },
    {
      id: "mastodon",
      link: "https://mastodon.social/@gogreenranger",
      title: "Mastodon",
      icon: <SiMastodon />,
    },
    {
      id: "email",
      link: "mailto:stephen.cardie@gmail.com",
      title: "Email",
      icon: <MdMail />,
    },
    { id: "resume", link: "#", title: "Resume", icon: <MdSimCardDownload /> },
  ];

  const [springs, api] = useSprings(
    contacts.length,
    () => ({
      from: { opacity: 0, y: 15 },
      to: { opacity: 1, y: 0 },
    }),
    []
  );

  return (
    <>
      <ul className="nav-bar">
        <IconContext.Provider value={{ size: "2em" }}>
          {springs.map((props, key) => (
            <animated.li id={contacts[key].id} style={props} key={key}>
              <a className="nav-btn" href={contacts[key].link}>
                <div>{contacts[key].icon}</div>
              </a>
            </animated.li>
          ))}
        </IconContext.Provider>
      </ul>
      {/* </div> */}
    </>
  );
}
