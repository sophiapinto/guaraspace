import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>Conheça a Guará Space</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">
               </div>
            </div>
         </div>
      </section>
    );
  }
}