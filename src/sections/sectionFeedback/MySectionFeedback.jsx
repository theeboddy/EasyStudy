import React from "react";
import { useState } from "react";
import './MySectionFeedback.css'
import GroupFeedBack from '../../images/GroupFeedBack.png'
import Title from '../../images/Title.png'
import ava from '../../icons/ava.svg'
import { MyModalFeedback } from "../../components/UI/myModalFeedback/MyModalFeedback";

const MySectionFeedback = () => {

    const [modal, setModal] = useState(false);

    return (
        <section className='section_feedback'>
            <img src={GroupFeedBack} alt='Логотип' className='GroupFeedBack img-fluid' />
            <div className='title_block'>
                <img src={Title} alt='Логотип' className='title img-fluid' />
            </div>
            <div className='feedbacks2_block'>
                <div className='feedback_block'>
                    <div className='title_feedback_block' >
                        <img src={ava} className='avaImg' />
                        <h3 className='anonim'>Галиева Р.</h3>
                    </div>
                    <div className='feedback_block_content' >
                        <p>Скоростью выполнения работы довольна,
                            написал в сжатые сроки, помогал и в корректировке,
                            сделал все, что потребовалось, поддерживал связь
                            и отвечал на вопросы. Даже когда работа была
                            уже сделана. Уровень оригинальности подходит, хороший, самая середина.
                            С содержанием все супер! Цена-качество того стоят</p>
                    </div>
                </div>
                <div className='feedback_block'>
                    <div className='title_feedback_block' >
                        <img src={ava} className='avaImg' />
                        <h3 className='anonim'>Сайарова В.</h3>

                    </div>
                    <div className='feedback_block_content' >
                        <p>Все круто, спасибо
                            Содержанием работы довольна, со скоростью работы тоже все хорошо.
                            В плане коммуникации все тоже хорошо, круто, что держишь связь и если что-то идет не по плану (быстрее сделал или наоборот чуть задерживаешься) тоже сразу сообщаешь.
                            Относительно вопроса «цена-качество», мне кажется, все адекватно соответствует.</p>
                    </div>
                </div>
            </div>

            <div className='link_block'>
                <a className='link_feedback' onClick={() => setModal(true)}>Смотреть Больше ></a>
                <MyModalFeedback visible={modal} setVisible={setModal}></MyModalFeedback>
            </div>
        </section>
    );
}

export default MySectionFeedback;