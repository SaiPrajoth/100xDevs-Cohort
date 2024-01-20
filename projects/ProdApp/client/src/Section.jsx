// import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

export default function Section() {
  return (
    <main>
        <div className="platform-container">
            <FaSquareXTwitter className="icons" />
            <FaReddit className="icons" id="reddit-icon"/>
            <FaHashnode className="icons" id="hashnode-icon"/>
            <FaLinkedin className="icons" id="linkedin-icon" />
            <FaMedium className="icons" id="medium-icon"/>
        </div>

        <div className="platform-displayer">
            This is the content displayer
        </div>

        <button type="submit" className="submit-blog">Publish</button>
    </main>
  )
}
