import React from 'react';
import './Playvideo.css';
import Video1 from '../../assets/vid1.mp4'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { GiSaveArrow } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const Playvideo = ({ videoId }) => {
  return (
    <div className='play-video'>
      <video src={Video1} controls autoPlay muted></video>
      {/* <iframe 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe> */}
      <h3>motivation song || whatsapp status || Tamil #suriya whatsapp status </h3>
      <div className="play-video-info">
        <p> 3.1M &bull; 8 years ago</p>
        <div>
          <span><AiOutlineLike className='icons' /> 33k</span>
          <span><AiOutlineDislike className='icons' /> </span>
          <span><IoIosShareAlt className='icons' /> Share</span>
          <span><GiSaveArrow className='icons' /> Save</span>
        </div>
      </div>
      <div className="publisher">
        <FaUserCircle className='icon' />
        <div>
          <p>SonyMusicSouthVEVO</p>
          <span>20M subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes Entertaiment</p>
        <p>Copyright Disclaimer : -
   
   Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use
        </p>
        <hr />
        <h4>130 comments</h4>
        {Array(5).fill().map((_, index) => (
          <div className="comment" key={index}>
            <FaUserCircle className='user' />
            <div>
              <h3>Jack Nicholson <span>1 day ago</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias esse tempore perspiciatis qui quam asperiores. Quos, voluptas esse? Doloribus maiores repudiandae maxime tempora placeat sequi ducimus vel obcaecati iusto!</p>
              <div className="comment-action">
                <AiOutlineLike className='icons' />
                <span>244</span>
                <AiOutlineDislike className='icons' />
                <span>12</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playvideo;
