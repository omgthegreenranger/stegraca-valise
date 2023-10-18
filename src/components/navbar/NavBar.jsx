import React from "react";
import { MdMail, MdSimCardDownload } from "react-icons/md";
import { SiMastodon, SiLinkedin, SiGithub } from "react-icons/si";
import "./navbar.css";
import { IconContext } from "react-icons";
import { animated, useSprings} from "@react-spring/web";

export default function NavBar(props) {

 const contacts = [
    {id: "github",
      link: "http://www.github.com/omgthegreenranger",
      title: "GitHub",
      icon: <SiGithub />
  },
  {id: "linkedin",
      link: "https://www.linkedin.com/in/stephencardie/",
      title: "LinkedIN",
      icon: <SiLinkedin />
  },
  {id: "mastodon",
      link: "https://mastodon.social/@gogreenranger",
      title: "Mastodon",
      icon: <SiMastodon />
  },
  {id: "email",
      link: "mailto:stephen.cardie@gmail.com",
      title: "Email",
      icon: <MdMail />
  },
  {id: "resume",
      link: "#",
      title: "Resume",
      icon: <MdSimCardDownload />
  },
  ]

  const [ springs, api ] = useSprings(contacts.length,
    () => ({
      from: { opacity: 0, y: 15},
      to: {opacity: 1, y: 0 },
    }), []
  )

  return (
    <>
            <ul className="nav-bar">
            <IconContext.Provider value={{ size: "2em" }}>
            {springs.map((props, key) => (
              <animated.li
                id={contacts[key].id}
                style={props}
              >
                <a className="nav-btn" href={contacts[key].link}>
                <div>
                {contacts[key].icon}
                </div>
                {/* <span className="nav-title">GitHub</span> */}
                </a>
              </animated.li>
            ))}

              {/* <a href="https://www.linkedin.com/in/stephencardie/">
              <li
                className="nav-btn"
                id="linkedin"
              >
                <SiLinkedin />
                <span className="nav-title">LinkedIn</span>
              </li>
              </a>
              <a href="https://mastodon.social/@gogreenranger">
              <li
                className="nav-btn"
                id="mastodon"
              >
                <SiMastodon />
<span className="nav-title">Mastodon</span>
              </li>
              </a>
              <a href="mailto:stephen.cardie@gmail.com">
              <li
                className="nav-btn"
                id="email"
              >
                <MdMail />
               <span className="nav-title">Email</span> 
              </li>
              </a>
              <a href="#">
              <li
                className="nav-btn"
                id="resume"
              >
                <MdSimCardDownload />
<span className="nav-title">Download resume</span> 
              </li>

              </a> */}
            </IconContext.Provider>
            </ul>
      {/* </div> */}
    </>
  );
}