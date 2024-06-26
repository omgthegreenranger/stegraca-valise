import React, { useState } from "react";
import "./menu.css";
import axios from 'axios';
import { IoArrowRedoCircleOutline, IoGitBranchOutline, IoGitPullRequestOutline, IoTicketOutline } from "react-icons/io5";
import { format } from "date-fns";
import { IconContext } from "react-icons";

// Consider making this a full component on its own.
export default function Menu() {
    return (
        <div className="home-panel">
            <div className="home-left-panel">
            </div>
            <div className="home-center-panel">
                <h3>NEWS</h3>
            </div>
            <div className="home-right-panel">
                <h5>Latest GitHub Activity</h5>
                <GitData /></div>
        </div>
    )
}

// Grabbing GitHub general data

function GitData() {
    const [gitData, setGitData] = useState([]);
    const [gitGot, setGitGot] = useState(false);
    // useEffect(() => {
    async function gitsen() {
        try {
            const searchMethod = "users";
            const apiRoot = 'https://api.github.com/' + searchMethod + '/omgthegreenranger'
            const gitGet = await axios.get(apiRoot + '/events/public')
            const data = await gitGet.data;
            console.log(data);
            setGitData(data);
            setGitGot(true);
        } catch (error) {
            console.log(error)
        }
    }
    if (!gitGot) {
        gitsen();
    }
    // }, [gitGot])

    console.log("GitData!", gitData)

    return (
        <div className="feed">
            {gitData.map((git, i) => {
                if (i < 5) {
                    let gitDeets = []
                    if (git.type === "CreateEvent") {
                        if (git.payload.ref_type === "branch") {
                            gitDeets[0] = "New branch";
                            gitDeets[1] = git.payload.ref;
                            gitDeets[2] = <IoGitBranchOutline />
                            gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                            gitDeets[4] = ''
                        }
                    }
                    if (git.type === "PushEvent") {
                        gitDeets[0] = "Pushed to branch";
                        gitDeets[1] = git.payload.ref.split("/")[2];
                        gitDeets[2] = <IoArrowRedoCircleOutline />
                        gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                        gitDeets[4] = git.payload.commits[0].message
                    }
                    if (git.type === "PullRequestEvent") {
                        gitDeets[0] = "Pull request";
                        gitDeets[1] = git.payload.ref;
                        gitDeets[2] = <IoGitPullRequestOutline />
                        gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                        gitDeets[4] = ''
                    }
                    if (git.type === "IssuesEvent") {
                        gitDeets[0] = "Created issue";
                        gitDeets[1] = git.payload.action + ": " + git.payload.issue.title;
                        gitDeets[2] = <IoTicketOutline />
                        gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                        gitDeets[4] = git.payload.issue.title;
                    }
                    console.log(gitDeets);
                    return (
                        <div className="feed-block">
                            <div className="feed-date">{gitDeets[3]}</div>
                            <div className="feed-type">
                                <IconContext.Provider value={{ className: "feed-icon" }}>
                                    {gitDeets[2]}
                                </IconContext.Provider>
                                <span className="feed-tooltiptext">
                                    <div>{gitDeets[0]}</div>
                                    <div>{gitDeets[4]}</div>
                                </span>
                            </div>
                            <div className="feed-repo">
                                <a href={'https://www.github.com/' + git.repo.name}>
                                    {git.repo.name.split("/")[1]}
                                </a>
                            </div>
                            <div className="feed-title"><span>{gitDeets[1]}</span></div>
                            {/* <div className="feed-details">{gitDeets[4]}</div> */}
                        </div>
                    )
                }
            })}
        </div>

    )
}