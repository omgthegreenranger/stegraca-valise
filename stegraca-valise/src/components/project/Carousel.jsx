import React from 'react';
import {Carousel} from 'react-bootstrap';

export function Works(props) {

    let works = props.works;
return(
    //   {works.map((work) => {
    //     console.log(work);
    //      return (
    //     <>
    //     <Carousel.Item>
    //       <img className="d-block w-100"
    //       src="holder.js/300x200"
    //       alt="Slide Card Wazoo"
    //       />
    //       <Carousel.Caption>
    //           <h3>{work.name}</h3>
    //           <p>{work.description}</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     </>
    //      )})})
    <div>
    {works.map((work) => {
      const image = work.image.split("/");
      const picture = './images/' + image[2];
      console.log(picture);
      return(
      <>
      <div>{work.name}</div>
      <div>{work.description}</div>
      <div>{work.appLink}</div>
      <div>{work.gitLink}</div>
      <div><img src={work.image} className="img" /></div>
      <div>{work.techTags}</div>
      </>
    )})}
</div>
)
         }