import React from "react";
import { MdMail, MdSimCardDownload } from "react-icons/md";
import { SiMastodon, SiLinkedin, SiGithub } from "react-icons/si";
import "./contact.css";
import { IconContext } from "react-icons";
import { animated, useSprings } from "@react-spring/web";

export default function Contact({ position }) {

  let contactProps = { 'position': position }

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
    {
      id: "resume",
      link: "#",
      title: "Resume",
      icon: <MdSimCardDownload />
    },
  ];

  if (position === "top") {
    contactProps['dimension'] = '1cqw';
    contactProps['barstyle'] = `padding: 0 0.5cqw 0 0.5cqw;`

    return <ContactBar contacts={contacts} contactProps={contactProps} />

  };
  if (position === "portfolio") {
    contactProps[0] = '2rem';

    return <ContactBar contacts={contacts} contactProps={contactProps} />
  }

  if (position === "panel") {
    contactProps['dimension'] = '5rem';

    return <ContactPanel contacts={contacts} contactProps={contactProps} />
  }

}


function ContactPanel({ contacts, contactProps }) {
  console.log(contactProps)
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
      <div className="nav-panel-screen">
        <IconContext.Provider value={{ size: contactProps['dimension'] }}>
          {springs.map((spring, key) => (
            <animated.div id={contacts[key].id} style={spring} key={key} className={`nav-panel-btn nav-panel-${contactProps['position']}`} onClick={(e) => {
              e.preventDefault();
              window.open(contacts[key].link, '_blank');
              }}>
                <div style={{gridColumn: "1/2"}}>{contacts[key].icon}</div>
                <div style={{gridColumn: "2/3"}}>
                <div>{contacts[key].title}</div>
                <div>{contacts[key].link}</div>
                </div>
            </animated.div>
          ))}
        </IconContext.Provider>
      </div>
      {/* </div> */}
    </>
  );
}


function ContactBar({ contacts, contactProps }) {

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
        <IconContext.Provider value={{ size: contactProps['dimension'] }}>
          {springs.map((spring, key) => (
            <animated.li id={contacts[key].id} style={spring} key={key}>
              <a className={`nav-btn nav-${contactProps['position']}`} href={contacts[key].link}>
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
