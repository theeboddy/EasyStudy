import React from "react";
import './MyInputSection.css'
import MyForm from "../../components/UI/form/MyForm";

const MyInputSection = ({inputSectionRef}) => {
    return (
        <section className='input_section' ref={inputSectionRef}>
            <MyForm />
        </section>
    );
}

export default MyInputSection;