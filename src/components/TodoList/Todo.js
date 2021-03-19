import React, { useState } from "react";
import Button from '../Custom/Button'
export default function Todo(props) {
  const { myTodo, setChange, onClick } = props;
  const [deleteButton, setDeleteButton] = useState(false);
  return (
    <li
      onClick={() => {
        deleteButton ? setDeleteButton(false) : setDeleteButton(true);
      }}
    >
      <div className="settings">
        {deleteButton ? (
          <Button className="animate__animated animate__fadeInDown" onClick={() => onClick()} IconClassName="far fa-trash-alt" />
        ) : null}
      </div>
      <input
        type="checkbox"
        checked={myTodo.Status ? "checked" : ""}
        onChange={() => {
          setChange();
        }}
      />
      <span style={{ color: "#ff7171" }}>{myTodo.Type} -</span>
      <p
        style={
          myTodo.Status
            ? { textDecoration: "line-through", color: "#d2d2d2" }
            : null
        }>
        {myTodo.Text}
      </p>
      <span>{myTodo.Date}</span>
    </li>
  );
}
