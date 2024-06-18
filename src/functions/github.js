// import the projects list so we can get a good GitHub activity report.

import projectDB from "../components/project/projects.json";
import axios from 'axios';


export async function gitGetUserEvents() {
    // In this function, we will make the GitHub api requests in order to grab the event details of all of the projects.

    const searchMethod = "users";

    const apiRoot = 'https://api.github.com/' + searchMethod + '/omgthegreenranger'
    
    try {
     const response = await axios.get(apiRoot + '/events/public')
            console.log("Loading", response);
            return response
        }
    catch(error) {
            // handle error
            console.log(error);
        };

}


function gitGetRepoEvents() {

}