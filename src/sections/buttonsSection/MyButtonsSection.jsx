import React from "react";
import { useState } from "react";
import './MyButtonsSection.css'
import MyButton from "../../components/UI/button/MyButton";
import MyModal from "../../components/UI/MyModal/MyModal";

const MyButtonsSection = (props) => {

    const [modal, setModal] = useState(false);
    return ( 
        <section className='buttons_section'>
        <div className='service_container'>
          <MyModal visible={modal} setVisible={setModal}></MyModal>
            <div className='section_container_subblock'>
              <MyButton onClick={() => setModal(true)} className='practicalWorkBtn'><p>Практическая работа</p></MyButton>
              <MyButton onClick={() => setModal(true)} className='courseBtn'><p>Курсовая</p></MyButton>
              <MyButton onClick={() => setModal(true)} className='literatureBtn'><p>Список литературы</p></MyButton>
            </div>
            <div className='section_container_subblock'>
              <MyButton onClick={() => setModal(true)} className='diplomaBtn'><p>Диплом</p></MyButton>
              <MyButton onClick={() => setModal(true)} className='scientificWorkBtn'><p>Научная статья</p></MyButton>
              <MyButton onClick={() => setModal(true)} className='practiceReportBtn'><p>Отчет по практике</p></MyButton>
            </div>
          </div>
      </section>
     );
}
 
export default MyButtonsSection;