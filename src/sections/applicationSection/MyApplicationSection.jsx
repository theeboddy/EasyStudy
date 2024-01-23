import React from "react";
import './MyApplicationSection.css'
import lowBack1 from '../../images/lowBack1.PNG'
import logo from '../../icons/logo.png'

const MyApplicationSection = ({ scrollToSection, destinationSection, ...props }) => {

    return (
        <section className='application_section'>
            <img src={lowBack1} alt='Логотип' className='lowBack1 img-fluid' />

            <div className='logo_container'>
                <img src={logo} alt='Логотип' className='logo' />
            </div>
            <div className='application_container'>
                <button className='applicationBtn' onClick={() => scrollToSection(destinationSection)}><p>Оставить заявку</p></button>
            </div>
        </section>
    );
}

export default MyApplicationSection