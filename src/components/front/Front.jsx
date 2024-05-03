import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./front.css";
import { SlArrowLeft } from "react-icons/sl";
import { FaUserSecret } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import { MainPage } from '../index'

export default function Front({ frontNav, setFrontNav }) {

    return (
        <div className="front-layout">
            <div className="front-splash">
                {/* <div className="front-welcome">Welcome to</div> */}
                <div className="front-title">
                    <div className="front-craft craft">Cardie</div><div className="front-craft craft">Craft</div>
                </div>
                <div className="front-tag">Imagining a tomorrow of today, yesterday!</div>
            </div>
            <div className="front-business">
                {frontNav ? <div className="front-page">
                    <div className="front-cards">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ullamcorper arcu, vel lobortis nisl. Etiam sed est nulla. Etiam interdum leo ut rutrum tincidunt. Fusce ut odio diam. Nulla blandit, orci nec fermentum tincidunt, eros lorem efficitur nulla, eget ultricies ipsum quam a nunc. Nulla ac consectetur justo. Mauris in mi sit amet mi ultrices sodales in at ligula.</p>

                        <p>Maecenas eget eros nec nisi scelerisque vestibulum nec quis est. Mauris ante nibh, dignissim nec diam aliquam, porta volutpat massa. Ut molestie tortor vel eros tempor commodo. Fusce in tellus placerat, interdum turpis dignissim, interdum urna. Suspendisse feugiat sollicitudin egestas. Ut odio orci, iaculis id felis ut, blandit varius tortor. Morbi aliquam suscipit erat quis tristique. Maecenas fringilla elit vel egestas suscipit. Sed finibus sed nunc sed convallis. Quisque vel lectus dapibus, efficitur sem ut, dapibus enim.</p>
                    </div>
                    <div className="front-cards">
                        <Button onClick={() => setFrontNav(!frontNav)}>Open Portfolio</Button>
                    </div>
                </div> : <MainPage />}
            </div>
        </div>
    )
}