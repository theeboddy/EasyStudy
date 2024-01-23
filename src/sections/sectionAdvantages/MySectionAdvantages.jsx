import React from "react";
import './MySectionAdvantages.css'
import starICan from '../../icons/starICan.png'
import Ad1 from '../../icons/Ad1.png'
import Ad2 from '../../icons/Ad2.png'
import Ad3 from '../../icons/Ad3.png'
import Ad4 from '../../icons/Ad4.png'
import Ad5 from '../../icons/Ad5.png'
import Ad6 from '../../icons/Ad6.png'

const MySectionAdvantages = (props) => {
    return (
        <section className='section_advantages'>
            <div className='section_advantages_image_block'>
                <img src={starICan} className="starICan" />
            </div>

            <div className='section_advantages_block'>
                <div className='section_advantages_subblock'>
                    <div className='advantage_block'>
                        <div className='advantage_block_image1'>
                            <img src={Ad1} className='Ad1_image' />
                        </div>
                        <div className='advantage_block_text'>
                            <h2 className='advantage_text'>Повысим твою оригинальность</h2>
                        </div>
                    </div>
                    <div className='advantage_block'>
                        <div className='advantage_block_image'>
                            <img src={Ad2} className='Ad_image' />
                        </div>
                        <div className='advantage_block_text'>
                            <h2 className='advantage_text'>Знаем все госты</h2>
                        </div>
                    </div>
                    <div className='advantage_block'>
                        <div className='advantage_block_image'>
                            <img src={Ad3} className='Ad_image' />
                        </div>
                        <div className='advantage_block_text'>
                            <h2 className='advantage_text'>Многолетний опыт</h2>
                        </div>
                    </div>
                </div>
                <div className='section_advantages_subblock'>
                    <div className='advantage_block'>
                        <div className='advantage_block_image1'>
                            <img src={Ad4} className='Ad2_image' />
                        </div>
                        <div className='advantage_block_text'>
                            <h2 className='advantage_text'>Напишем работу в сжатые сроки</h2>
                        </div>
                    </div>
                    <div className='advantage_block'>
                        <div className='advantage_block_image'>
                            <img src={Ad5} className='Ad_image' />
                        </div>
                        <div className='advantage_block_text'>
                            <h2 className='advantage_text'>Бесплатные исправления</h2>
                        </div>
                    </div>
                    <div className='advantage_block'>
                        <div className='advantage_block_image'>
                            <img src={Ad6} className='Ad_image' />
                        </div>
                        <div className='advantage_block_text'>
                            <h2 className='advantage_text'>Постоянная обратная связь</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default MySectionAdvantages;