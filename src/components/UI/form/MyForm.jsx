import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MyInput from "../MyInput/MyInput";
import cl from "./MyForm.module.css"
import Alert from 'react-bootstrap/Alert';
import MyModal from "../MyModal/MyModal";
import MyAlert from "../alert/MyAlert";

const MyForm = () => {
    const [inputValue, setInputValue] = useState('')
    const [name, setName] = useState('')
    const [telegram, setTelegram] = useState('')
    const [email, setEmail] = useState('')
    const [problem, setProblem] = useState('Выберите вид работы')
    const [comment, setComment] = useState('')
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    const TOKEN = "6521405979:AAG0tPgd6B1f81mj0CJ5r3hnHzfn4stqAQY";
    const CHAT_ID = "-1001812409445";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    
    const [requestCount, setRequestCount] = useState(1);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const handleSubmit = (e) => {
            e.preventDefault();
            
            if (!name || !telegram || !email) {
                alert("Пожалуйста, заполните все обязательные поля (Имя, Телеграм, Почта).");
                return;
              }


            let message = `<b>Заявка с сайта №${requestCount}</b>\n`;
            message += `<b>Имя: </b> ${name}\n`;
            message += `<b>Телеграм: </b> ${telegram}\n`;
            message += `<b>Почта: </b> ${email}\n`;
            message += `<b>Проблема: </b> ${problem}\n`;
            message += `<b>Комментарий: </b> ${comment}\n`;
            
            axios
            .post(URI_API, {
              chat_id: CHAT_ID,
              parse_mode: 'html',
              text: message,
            })
            .then((res) => {
                
              // Очистить поля формы после успешной отправки
                setName('');
                setTelegram('');
                setEmail('');
                setProblem('Выберите вид работы');
                setComment('');
                setRequestCount(requestCount + 1);
                setModal(true);
                setTimeout(() => {
                    setModal(false);
                  }, 5000);
            })
            .catch((err) => {
              // Обработка ошибки
            });
        };
    
        // Добавить обработчик события submit
        const form = document.getElementById('tg');
        form.addEventListener('submit', handleSubmit);
    
        // Убрать обработчик события submit при размонтировании компонента
        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
      }, [name, telegram, email, problem, comment, requestCount, isFormSubmitted, URI_API]);


    return (
        <form id="tg" className={cl.form}>
            {/* <div className={cl.form_block}>
                <div className={cl.TextPlaceholder_block}>
                    <h2 className={cl.TextPlaceholder} >Имя</h2>
                    <h2 className={cl.TextPlaceholder}>Телеграм</h2>
                    <h2 className={cl.TextPlaceholder}>Почта</h2>
                    <h2 className={cl.TextPlaceholder}>Проблема</h2>
                    <h2 className={cl.TextPlaceholder}>Комментарий</h2>
                </div>
                <div className={cl.inputs_block}>
                    <MyInput name="name" className={cl.settingInput} value={name} onChange={e => setName(e.target.value)}/>
                    <MyInput name="telegram" className={cl.settingInput} value={telegram} onChange={e => setTelegram(e.target.value)}/>
                    <MyInput name="email" className={cl.settingInput} value={email} onChange={e => setEmail(e.target.value)}/>
                    <select name="problem" className={cl.settingInput} value={problem} onChange={e => setProblem(e.target.value)}>
                        <option disabled>Выберите вид работы</option>
                        <option>Курсовая</option>
                        <option>Диплом</option>
                        <option>Отчет</option>
                    </select>
                    <textarea name="comment" className={cl.settingComInput} value={comment} onChange={e => setComment(e.target.value)} />
                </div>
            </div> */}

            <div className={cl.inputBlock}>
                <h2 className={cl.TextPlaceholder} >Имя</h2>
                <input name="name" className={cl.settingInput} value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className={cl.inputBlock}>
                <h2 className={cl.TextPlaceholder}>Телеграм</h2>
                <input name="telegram" className={cl.settingInput} value={telegram} onChange={e => setTelegram(e.target.value)}/>
            </div>
            <div className={cl.inputBlock}>
                <h2 className={cl.TextPlaceholder}>Почта</h2>
                <input name="email" className={cl.settingInput} value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className={cl.inputBlock}>
                <h2 className={cl.TextPlaceholder}>Проблема</h2>
                <select name="problem" className={cl.settingSelect} value={problem} onChange={e => setProblem(e.target.value)}>
                    <option disabled>Выберите вид работы</option>
                    <option>Курсовая</option>
                    <option>Диплом</option>
                    <option>Отчет</option>
                </select>
            </div>
            <div className={cl.inputBlock}>
                <h2 className={cl.TextPlaceholder}>Комментарий</h2>
                <textarea name="comment" className={cl.settingComInput} value={comment} onChange={e => setComment(e.target.value)} />
            </div> 
            <MyAlert visible={modal} setVisible={setModal} />
            <div className={cl.buttonBlock}>
                <button className={cl.sendBtn}><p>Отправить</p></button>
            </div> 
        </form>
    )
}

export default MyForm;