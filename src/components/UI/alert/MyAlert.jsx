import React from "react";
import cls from './MyAlert.module.css'
import starLeft from '../../../icons/StarFormLeft.png';
import starRight from '../../../icons/StarFormRight.png'

const MyAlert = ({visible, setVisible}) => {

    const MyAlertClasses = [cls.myAlert]

    if(visible) {
        MyAlertClasses.push(cls.active)
    }

    return (
        <div className={MyAlertClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cls.myAlertContent} onClick={(e) => e.stopPropagation()}>
                <div className={cls.myAlertTitleBlock}>
                    <img src={starLeft} alt='' className={cls.starFormLeft}/>
                    <div className={cls.titleContainer}>
                        <h2 className={cls.myAlertTitle}>Уведомление</h2>
                    </div>
                    <img src={starRight} alt="" className={cls.starFormRight}/>
                </div>
                <div className={cls.infoBlock}>
                    <div className={cls.myAlertBlock}>
                        <h3 className={cls.myAlertText}>Ваша заявка успешно отправлена!</h3>
                        <h3 className={cls.myAlertText}>С вами свяжутся в течение 24 часов.</h3>
                    </div>
                    <div className={cls.myAlertblockBtn}>
                        <button className={cls.myAlertCloseBtn} onClick={(e) => {
                            e.stopPropagation();
                            setVisible(false);}}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAlert;