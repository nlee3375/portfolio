import c1 from "../assets/Composite_Momiji.png";
import c2 from "../assets/Composite_Kiyoshi.png";
import c3 from "../assets/Composite_Katsumi.png";
import c4 from "../assets/Composite_Tenshi.png";

import ill1 from "../assets/Illustrator_Missy.png";
import ill2 from "../assets/Illustrator_Sylveon Poster.png";
import ill3 from "../assets/Illustrator_Bloo.png";

import sr1 from "../assets/SR_Login Page.png";
import sr2 from "../assets/SR_Task Page 1.png";
import sr3 from "../assets/SR_Task Page 2.png";

import gp1 from "../assets/GP_Sketches.png";
import gp2 from "../assets/GP_Sketches2.png";
import gp3 from "../assets/GP_Center Stage.png";
import gp4 from "../assets/GP_Digital Darlings.png";
import gp5 from "../assets/GP_Star Struck.png";

import kk1 from "../assets/Kin&Kindle_Critters Sketches.png";
import kk2 from "../assets/Kin&Kindle_Critters Pages.png";
import kk3 from "../assets/Kin&Kindle_Logo.png";
import kk4 from "../assets/Kin&Kindle_Egg.png";

import '../App.css';

function Projects() {
  return (
    <div>
      <h1>Individual Projects</h1>
      <div className="image-row">
        <h2>Composite Images</h2>
        <p>These are some composite images I created during my summer 2025 semester at UCF. It was required for an assignment for my Digital Imaging Fundamentals class. I used Adobe Photoshop</p>
        <img src={c1} alt="Momiji Composite" />
        <img src={c2} alt="Kiyoshi Composite" />
        <img src={c3} alt="Katsumi Composite" />
        <img src={c4} alt="Tenshi Composite" />
      </div>
      <div className="image-row">
        <h2>Adobe Illustrator</h2>
        <p>These are all artworks created using Adobe Illustrator.</p>
        <img src={ill1} alt="Missy" />
        <img src={ill2} alt="Sylveon" />
        <img src={ill3} alt="Bloo" />
      </div>
      <div className="image-row">
        <h2>StudyRat</h2>
        <p>For my Mobile Development course, I had to create a design layout for a to do list app. I designed the logo of the mouse using Procreate, and created the design of the layout in Canva.</p>
        <img src={sr1} alt="StudyRat Page1" />
        <img src={sr2} alt="StudyRat Page2" />
        <img src={sr3} alt="StudyRat Page3" />
      </div>

      <h1>Group Projects</h1>
      <div className="image-row">
        <h2>The Girlypops</h2>
        <p>In my fall 2025 semester of UCF, I worked in a group project to create The Girlypops. I worked on designing and creating artwork for the popstars, all based off of moodboards created by my group members and I. Below are concept sketches, and posters to add to blind boxes. The first two were created by another group member, but the Star Struck one was entirely designed by me. You can view the completed website project <a href="https://anh-101.github.io/index.html">here</a></p>
        <img src={gp1} alt="Girlypops Sketches" />
        <img src={gp2} alt="Girlypops Sketches2" />
        <img src={gp3} alt="Center Stage" />
        <img src={gp4} alt="Digital Darlings" />
        <img src={gp5} alt="Star Struck" />
      </div>
      <div className="image-row">
        <h2>Kin & Kindle</h2>
        <p>In my spring 2026 semester of UCF, I worked in a group project to create Kin & Kindle. I worked on designing and creating artwork for the critters and mythical creatures featured in our idea of a study app. The animals were all drawn by me, the layout of the app was designed by my group members.</p>
        <img src={kk1} alt="Critters Sketches" />
        <img src={kk2} alt="Critters Pages" />
        <img src={kk3} alt="Logo" />
        <img src={kk4} alt="Egg" />
      </div>
    </div>
  );
}

export default Projects;