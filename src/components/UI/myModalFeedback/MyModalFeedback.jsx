import React from "react";
import { useEffect } from "react";
import cl from './MyModalFeedback.module.css'
import ava from '../../../icons/ava.svg'

export const MyModalFeedback = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModalFeedback]

    useEffect(() => {
        if (visible) {
          document.body.style.overflow = "hidden"; // Заблокировать прокрутку тела
        } else {
          document.body.style.overflow = "auto"; // Разблокировать прокрутку тела
        }
    
        return () => {
          document.body.style.overflow = "auto"; // Восстановить прокрутку при размонтировании компонента
        };
      }, [visible]);

    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalFeedbackContent} onClick={(e) => e.stopPropagation()}>
                <div className={cl.myModalFeedbackTitle}>
                    <p>Отзывы</p>
                </div>
                <div className={cl.feedbackContainer}>
                    <div className={cl.feedback}>
                        <div className={cl.titleFeedback}>
                            <img src={ava} className={cl.avaImg} />
                            <h5 className={cl.anonim}>Алексеева К.</h5>
                        </div>
                        <div className={cl.textfeeedback}>
                            <p>Курсовая работа была выполнена точно в указанные рамки, причем очень качественно!!
                                 антиплагиат прошла с первого раза и текст не состоит полностью из воды))
                                 на все мои вопросы были даны подробные ответы, всегда держали связь, в общем нет никаких претензий!
                                обязательно посоветую вас своим знакомым и друзьям :)</p>
                        </div>
                    </div>
                    <div className={cl.feedback}>
                        <div className={cl.titleFeedback}>
                            <img src={ava} className={cl.avaImg} />
                            <h5 className={cl.anonim}>Рамалев А.</h5>
                        </div>
                        <div className={cl.textfeeedback}>
                            <p>Несмотря на высокую стоимость курсовой по рынку, оно того стоило.
                                Оригинальность на отличном уровне, скорость выполнения тоже.
                                Постоянная обратная связь и поддержка со сдачей работы.
                                К самому тексту тоже нет никаких претензий.
                                При проверке работы научным руководителем не было никаких недочетов.
                                Спасибо большое, обязательно еще раз обращусь к тебе и порекомендую тебя своим знакомым и друзьям.</p>
                        </div>
                    </div>
                    <div className={cl.feedback}>
                        <div className={cl.titleFeedback}>
                            <img src={ava} className={cl.avaImg} />
                            <h5 className={cl.anonim}>Абдурахманова В.</h5>
                        </div>
                        <div className={cl.textfeeedback}>
                            <p>Данил, качеством выполнения работы очень довольна.
                                За столь короткий срок ты выполнил достаточно большой объём проделанной работы.
                                Очень удивило на сколько ты серьезно относишься к работе, отвечаешь за качество и сроки.
                                Моя работа, скажем так, была «так себе» на оригинальность, ты за короткий промежуток времени поднял ее достаточно высоко.
                                Безумно понравилось, что ты очень ответственно подходишь к делу. Цена-качество полностью себя оправдывают.
                                Буду рекомендовать тебя как грамотного специалиста. Ещё раз спасибо за проделанную работу! Желаю успехов и много-много благодарных клиентов.</p>
                        </div>
                    </div>
                    <div className={cl.feedback}>
                        <div className={cl.titleFeedback}>
                            <img src={ava} className={cl.avaImg} />
                            <h5 className={cl.anonim}>Галиева Р.</h5>
                        </div>
                        <div className={cl.textfeeedback}>
                            <p>Скоростью выполнения работы довольна, 
                                написал в сжатые сроки, помогал и в корректировке,
                                сделал все, что потребовалось, поддерживал связь 
                                и отвечал на вопросы. Даже когда работа была 
                                уже сделана. Уровень оригинальности подходит, хороший, самая середина. С содержанием все супер! Цена-качество того стоят)</p>
                        </div>
                    </div>
                    <div className={cl.feedback}>
                        <div className={cl.titleFeedback}>
                            <img src={ava} className={cl.avaImg} />
                            <h5 className={cl.anonim}>Сайарова В.</h5>
                        </div>
                        <div className={cl.textfeeedback}>
                            <p>Все круто, спасибо
                                Содержанием работы довольна, со скоростью работы тоже все хорошо.
                                В плане коммуникации все тоже хорошо, круто, что держишь связь и если что-то идет не по плану (быстрее сделал или наоборот чуть задерживаешься) тоже сразу сообщаешь.
                                Относительно вопроса «цена-качество», мне кажется, все адекватно соответствует.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}