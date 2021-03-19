import React, { useState, useRef } from 'react'
import './style.css'
import Button from '../Custom/Button'

const add = (setList, text, type, setInfo) => {
    const date = new Date();
    const findDate = `${date.getUTCDate()}/0${date.getMonth()}/${date.getFullYear()}`
    if (text === undefined || text === "" || type === undefined) {
        setInfo({
            "Message": "Can not be empty",
            "Show": true,
            "Status": false
        });
    }
    else {
        setList(list => [...list, {
            ID: Math.floor(Math.random() * 100),
            Text: text,
            Date: findDate,
            Type: type,
            Status: false
        }]);
        setInfo({
            "Message": "Added Todo",
            "Status": true,
            "Show": true
        });
    }
    setTimeout(() => {
        setInfo({
            "Message": "",
            "Status": false,
            "Show": false
        })
    }, 3000);
}

function AddTodo(props) {
    let textInput = useRef();
    const { showControl, setList } = props;
    const [text, setText] = useState();
    const [type, setType] = useState();
    const [info, setInfo] = useState("");
    return (
        <div className="addTodo animate__animated animate__bounceInUp">
            <div className="title">
                <i className="fab fa-angellist"></i>
                <Button onClick={() => { showControl(false) }} className="" IconClassName="fas fa-times" />
            </div>

            <div className="inputArea">
                <div className="inputStyle" >
                    <label>Add Todo</label>
                    <input type="text" maxLength="28" onChange={(e) => setText(e.target.value)} ref={textInput} placeholder="Max Characters 28" />

                </div>
                <div className="inputStyle">
                    <label>Select Type</label>
                    <select onChange={(e) => { setType(e.target.value) }} >
                        <option value="#">Please Select Type</option>
                        <option value="Food">Food</option>
                        <option value="Work">Work</option>
                        <option value="Hobby">Hobby</option>
                    </select>
                </div>
                <Button IconClassName="fas fa-location-arrow" onClick={() => {
                    add(setList, text, type, setInfo);
                    textInput.current.value = "";
                    setText("");
                }} />

                {
                    info.Show ?
                        <div className="successOrFail animate__animated  animate__zoomInDown" style={info.Status ? { background: "#16c79a" } : { background: "#e40017" }}>
                            <p>{info.Message}</p>
                        </div> : null
                }
            </div>
        </div>
    )
}

export default AddTodo;
