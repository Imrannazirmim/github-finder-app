import React, { useContext } from "react";
import AlertContext from "../../context/alertContext/AlertContext.jsx";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div>{alert.type === "error" && <strong>{alert.msg}</strong>}</div>
    )
  );
};
export default Alert;
