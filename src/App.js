import React, { useRef, useState } from 'react';
import './styles/App.css';
import logo from './icons/logo.png'
import frame from './icons/Frame3.png'
import sale from './icons/sale.png'
import human from './icons/human.png'
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import axios from 'axios';
import MyForm from './components/UI/form/MyForm';
import starICan from './icons/starICan.png'
import Ad1 from './icons/Ad1.png'
import Ad2 from './icons/Ad2.png'
import Ad3 from './icons/Ad3.png'
import Ad4 from './icons/Ad4.png'
import Ad5 from './icons/Ad5.png'
import Ad6 from './icons/Ad6.png'
import lowBack1 from './images/lowBack1.PNG'
import GroupFeedBack from './images/GroupFeedBack.png'
import Title from './images/Title.png'
import ava from './icons/ava.svg'
import arrowLink from './images/arrowLink.png'
import prepaymentImg from './images/prepaymentImg.png'
import Title2 from './images/Title2.png'
import groupLines from './images/GroupLines.png'
import exCourse1 from './images/exampleCourse1.png'
import exCourse2 from './images/exampleCourse2.png'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { MyModalFeedback } from './components/UI/myModalFeedback/MyModalFeedback';

function App() {

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const destinationSection = useRef(null)

  const scrollToSection = (elemRef) => {
    window.scrollTo({
      top: elemRef.current.offsetTop, 
      behavior: 'smooth'
    })
  
  const arrow = ">"

  }
  return (
    <div className="App">
      <main>

        
      <section className='application_section'>
        <img src={lowBack1} alt='Логотип' className='lowBack1 img-fluid'/>
          
          <div className='logo_container'>
            <img src={logo} alt='Логотип' className='logo'/>
          </div> 
          <div className='application_container'>
            <button className='applicationBtn' onClick={() => scrollToSection(destinationSection)}><p>Оставить заявку</p></button>
          </div>
         
      </section>
      
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
        <section className='section_advantages'>
          <div className='section_advantages_image_block'>
            <img src={starICan} className="starICan"  />
          </div>

          <div className='section_advantages_block'>
            <div className='section_advantages_subblock'>
              <div className='advantage_block'>
                <div className='advantage_block_image1'>
                  <img src={Ad1} className='Ad1_image'/>
                </div>
                <div className='advantage_block_text'>
                  <h2 className='advantage_text'>Повысим твою оригинальность</h2>
                </div>
              </div>
              <div className='advantage_block'>
                <div className='advantage_block_image'>
                  <img src={Ad2} className='Ad_image'/>
                </div>
                <div className='advantage_block_text'>
                  <h2 className='advantage_text'>Знаем все госты</h2>
                </div>
              </div>
              <div className='advantage_block'>
                <div className='advantage_block_image'>
                  <img src={Ad3} className='Ad_image'/>
                </div>
                <div className='advantage_block_text'>
                  <h2 className='advantage_text'>Многолетний опыт</h2>
                </div>
              </div>
            </div> 
            <div className='section_advantages_subblock'>
              <div className='advantage_block'>
                <div className='advantage_block_image1'>
                  <img src={Ad4} className='Ad2_image'/>
                </div>
                <div className='advantage_block_text'>
                  <h2 className='advantage_text'>Напишем работу в сжатые сроки</h2>
                </div>
              </div>
              <div className='advantage_block'>
                <div className='advantage_block_image'>
                  <img src={Ad5} className='Ad_image'/>
                </div>
                <div className='advantage_block_text'>
                  <h2 className='advantage_text'>Бесплатные исправления</h2>
                </div>
              </div>
              <div className='advantage_block'>
              <div className='advantage_block_image'>
                  <img src={Ad6} className='Ad_image'/>
                </div>
                <div className='advantage_block_text'>
                  <h2 className='advantage_text'>Постоянная обратная связь</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section_feedback'>
          <img src={GroupFeedBack} alt='Логотип' className='GroupFeedBack img-fluid'/>
          <div className='title_block'>
            <img src={Title} alt='Логотип' className='title img-fluid'/>
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
              <a className='link_feedback' onClick={() => setModal1(true)}>Смотреть Больше ></a>
              <MyModalFeedback visible={modal1} setVisible={setModal1}></MyModalFeedback>
            </div>
        </section>

        <section className='prepayment_section'>
          <div className='Title2_block' >
            <img src={Title2} alt='Логотип' className='Title2 img-fluid'/> 
          </div>
          <img src={prepaymentImg} alt='Логотип' className='prepaymentImg img-fluid'/>
          <div className='prepayment_block'>
            <div className='prepayment_block_text' >
              <p>25% предоплата, оставшаяся сумма переводится после завершения написания работы
                и отправки документа с Water mark на каждой из страниц документа. 
                 После перевода оставшейся суммы отправляется итоговый документ для полнопраного использования заказчика</p>
            </div>
            <div className='prepayment_block_img_block' >
              <img src={exCourse1} alt='Логотип' className='exCourse1 img-fluid'/>
              <img src={exCourse2} alt='Логотип' className='exCourse2 img-fluid'/> 
            </div>
          </div>
        </section>

        <section className='section_about'>
          <img src={groupLines} alt='Логотип' className='groupLines img-fluid'/>
          <div className='icons_about'>
            <img src={frame} alt='icon2' className='frame'/>
            <img src={sale} alt='icon3' className='sale'/>
          </div>
          <div className='block_about'> 
            <h1 className="section_about_title">Кто я?</h1>
            <div className='block_about_text'>
              <p className="section_about_text">Привет, меня зовут Даниил. 
                На протяжении трех лет я работал в сфере написания статей, научных работ и текстов различной направленности. 
                Курсовые, научные и исследовательские работы всех уровней сложностей были исследованы нашей командой и лично мной невероятно пристально и глубоко. 
                Я точно знаю что нужно сделать, чтобы твою работу приняли на высший балл. Если возникнут вопросы напиши мне в <a className='tg' href="https://t.me/DannyShaposhniov">telegram</a>
              </p>
            </div>  
         </div> 
          <img src={human} alt='' className='human'/>

         </section> 
          
        <section className='input_section' ref={destinationSection}>
          <MyForm/>
        </section>  

          <footer>
          <nav>
            
          </nav>
        </footer>
      </main>

          
    </div>
  );
}

export default App;
