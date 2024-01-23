import React, { useRef, useState } from 'react';
import './styles/App.css';
import MyApplicationSection from './sections/applicationSection/MyApplicationSection'
import MyButtonsSection from './sections/buttonsSection/MyButtonsSection';
import MySectionAdvantages from './sections/sectionAdvantages/MySectionAdvantages';
import MySectionFeedback from './sections/sectionFeedback/MySectionFeedback';
import MyPrepaymentSection from './sections/prepaymentSection/MyPrepaymentSection';
import MySectionAbout from './sections/sectionAbout/MySectionAbout';
import MyInputSection from './sections/inputSection/MyInputSection';

function App() {

  const destinationSection = useRef(null)

  const scrollToSection = (elemRef) => {
    window.scrollTo({
      top: elemRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div className="App">
      <main>

        <MyApplicationSection destinationSection={destinationSection} scrollToSection={scrollToSection} />
        <MyButtonsSection />
        <MySectionAdvantages />
        <MySectionFeedback />
        <MyPrepaymentSection />
        <MySectionAbout />
        <MyInputSection inputSectionRef={destinationSection} />

      </main>
    </div>
  );
}

export default App;
