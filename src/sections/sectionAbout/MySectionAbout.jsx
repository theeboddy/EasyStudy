import React from "react";
import './MySectionAbout.css'
import groupLines from '../../images/GroupLines.png'
import frame from '../../icons/Frame3.png'
import sale from '../../icons/sale.png'
import human from '../../icons/human.png'

const MySectionAbout = () => {
    return (
        <section className='section_about'>
            <img src={groupLines} alt='Логотип' className='groupLines img-fluid' />
            <div className='icons_about'>
                <img src={frame} alt='icon2' className='frame' />
                <img src={sale} alt='icon3' className='sale' />
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
            <img src={human} alt='' className='human' />

        </section>
    );
}

export default MySectionAbout;