import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { homeSection } from "../data/HomeSection"
import { coursesSection } from "../data/CoursesSection"
import { tutorsSection, tutorsList } from "../data/TutorsSection"
import { patnersSection, patnersList } from "../data/PatnersSection"
import { contactSection } from "../data/ContactSection"


import Tutors from "../components/Tutors"
import Patners from "../components/Patners"
import Contact from "../components/Contact"

import parse from 'html-react-parser'
import '../styles/Home.css'
function Home() {
  return (
    
    <>
        <Navbar/>
        {/* home */}
        <div className='wrapper'><section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>
        {/* online Course */}
        <section id="courses">
            <div className="kolom">
                {parse(coursesSection.content)}
            </div>
            <img src={coursesSection.image}/>
        </section>
        {/* Tutors */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(tutorsSection.content)}
                </div>
                <Tutors tutorsList={tutorsList}/>
            </div>
        </section>
        {/* patners */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(patnersSection.content)}
                </div>
                <Patners patnersList={patnersList}/>
                </div>
        </section>
        </div>
        <Contact contactSection={contactSection}/>
        <Footer/>
    </>

  )
}

export default Home
