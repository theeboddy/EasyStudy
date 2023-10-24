import React from "react";
import cl from './MyModal.module.css';
import starLeft from '../../../icons/StarFormLeft.png';
import starRight from '../../../icons/StarFormRight.png'
import { useEffect } from "react";

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]

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

    if(visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={cl.myModalTitleBlock}>
                    {/* <div className={cl.starFormLeft_block}>
                        <img src={starLeft} alt='' className={cl.starFormLeft}/>
                    </div> */}
                    <div className={cl.titleContainer}>
                        <h2 className={cl.myModalTitle}>Цены</h2>
                    </div>
                    {/* <div className={cl.starFormRight_block} >
                        <img src={starRight} alt="" className={cl.starFormRight}/>
                    </div> */}
                </div>
                <div className={cl.infoBlock}>
                    <div className={cl.course}>
                        <p className={cl.courseText}>Курсовая для 1 курса:</p>
                        <h3 className={cl.coursePrice}>6000 руб.</h3>
                    </div>
                    <div className={cl.course}>
                        <p className={cl.courseText}>Курсовая для 2-3 курса:</p>
                        <h3 className={cl.coursePrice}>8000 руб.</h3>
                    </div>
                    <div className={cl.course}>
                        <p className={cl.courseText}>Первая глава курсовой:</p>
                        <h3 className={cl.coursePrice}>4000 руб.</h3>
                    </div>
                    <div className={cl.course}>
                        <p className={cl.courseText}>Вторая глава курсовой:</p>
                        <h3 className={cl.coursePrice}>5000 руб.</h3>
                    </div>
                    <div className={cl.course}>
                        <p className={cl.courseText}>Курсовая для 4 курса:</p>
                        <h3 className={cl.coursePrice}>9000 руб.</h3>
                    </div>
                    <div className={cl.course}>
                        <p className={cl.courseText}>Дипломная работа:</p>
                        <h3 className={cl.coursePrice}>30000 руб.</h3>
                    </div>
                    <div className={cl.course}>
                        <p className={cl.courseText}>Повышение оригинальности:</p>
                        <h3 className={cl.coursePrice}>2500 руб.</h3>
                    </div>
                    <div className={cl.course}>
                        <p className={cl.courseText}>Научная работа:</p>
                        <h3 className={cl.coursePrice}>Договорная стоимость</h3>
                    </div>
                    <div className={cl.course}>
                        <p className={cl.courseText}>Практическая работа:</p>
                        <h3 className={cl.coursePrice}>3500 руб.</h3>
                    </div>
                </div>
                {children}
            </div>
        </div>

    );
}

export default MyModal;