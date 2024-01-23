import React from "react";
import './MyPrepaymentSection.css'
import prepaymentImg from '../../images/prepaymentImg.png'
import Title2 from '../../images/Title2.png'
import exCourse1 from '../../images/exampleCourse1.png'
import exCourse2 from '../../images/exampleCourse2.png'

const MyPrepaymentSection = () => {
    return (
        <section className='prepayment_section'>
            <div className='Title2_block' >
                <img src={Title2} alt='Логотип' className='Title2 img-fluid' />
            </div>
            <img src={prepaymentImg} alt='Логотип' className='prepaymentImg img-fluid' />
            <div className='prepayment_block'>
                <div className='prepayment_block_text' >
                    <p>25% предоплата, оставшаяся сумма переводится после завершения написания работы
                        и отправки документа с WaterMark на каждой из страниц документа.
                        После перевода оставшейся суммы отправляется итоговый документ для полнопраного использования заказчика</p>
                </div>
                <div className='prepayment_block_img_block' >
                    <img src={exCourse1} alt='Логотип' className='exCourse1 img-fluid' />
                    <img src={exCourse2} alt='Логотип' className='exCourse2 img-fluid' />
                </div>
            </div>
        </section>
    );
}

export default MyPrepaymentSection;