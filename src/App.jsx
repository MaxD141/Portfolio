import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import backgroundImg from "./assets/placeholder.png";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contacts from "./components/Contacts";
import { WEB_PROJECTS } from "./data/webProjects";
import { OTHER_PROJECTS } from "./data/otherProjects";

const NAV_LINKS = [
  { label: "Home",    href: "#" },
  { label: "Web Projects",   href: "#" },
  { label: "Other Projects", href: "#" }
];

const CONTACT_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/max-donnelly"},
  { label: "max.donnelly321@gmail.com" },
  { label: "Github", href: "https://github.com/MaxD141" }
];

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="page">
      <Navbar links={NAV_LINKS} onNavigate={setActivePage} />
      <img class="background" src={backgroundImg} alt="Placeholder backgorund image" />
      <img class="spacer" src={backgroundImg} />
      <div class="contents">
      <hr class="contentDivider" />

        {activePage == "Home" && (
          <div class="homePage">
            <AboutMe/>
            <Skills/>
            <Achievements/>
            <Contacts links = {CONTACT_LINKS}/>
          </div>
        )}

        {activePage == "Web Projects" && 
          WEB_PROJECTS.map((project) => (
            <Card proj={project} />
          ))
        }
        <p class="bottomBreak" />

        {activePage == "Other Projects" && 
          OTHER_PROJECTS.map((project) => (
            <Card proj={project} />
          ))
        }
        <p class="bottomBreak" />
      </div>
    </div>
  );
}