import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function AboutUs() {
  return (
    <div className="about-us__main">
      <div className="main__breadcrumb--container">
        <ul className="breadcrumb--list">
          <li className="list--home">
            <Link to="/">
              Home
              <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
            </Link>
          </li>
          <li className="list--path last">
            About
          </li>
        </ul>
      </div>
      <div className="main__title">
        <h1>About</h1>
      </div>
      <div className="main__body">
        <p>
          Hi.  My name is Brian.  I was smoking a pack-a-day (more when I was drinking) for over 15 years.  I have tried to quit on numerous occasions and in numerous ways, without success.  I quit one time for over 1 year.  However, I still had the urge to smoke once in a while.  I realized that it obviously wasn’t the nicotine that was making me want to smoke, but it was the act of smoking.  That’s when someone mentioned vaping.  I had tried those style of electronic cigarettes back in 2009 that you can now get at just about any gas station, but I was not impressed and just wanted a cigarette even more.  So, when I heard about vaping, I fluffed it off.  That was until I started doing research and seeing what a HUGE market there is out there for vapers!  I was seeing all of these awesome devices, mods, tanks, unlimited amounts of flavors and flavor combinations, and the large array of different types of vaping experiences.  I decided to try one and started with a Volcano Inferno, I was hooked.  I knew this was it.  Over time, I started trying all different kinds of mods and tanks and juices… and all along the way people were asking me questions. ” Wow, that’s awesome, where did you get it??”  “How much for a setup like yours?”  “Where can I get one?”  “What kind of coil did you build?” “Can you teach me?” The list goes on and on.  Since I am here in Japan, and the vape community here is virtually non-existent when it comes to vaporizers and vaping supplies, and because there seems to be such a huge demand for it, I decided to start this company.  I made the switch from smoking to vaping and haven’t looked back.  I hope with my store being here, you will have a chance to Make the VapeSwitch as well.
        </p>
      </div>
    </div>
  );
}
