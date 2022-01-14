import React from "react";
import classnames from "classnames";

const headerButton = (
  onClickButton,
  icon,
  text,
  disabledCheck = true,
  children = null
) => (
  <React.Fragment>
    <button
      title={text}
      className={classnames("app-header__button", `${text}`, {
        disabled: !disabledCheck
      })}
      onClick={onClickButton}
    >
      <div className="app-header__button-icon">
        <img src={icon} width="20" height="auto" aria-hidden="true" />
      </div>
      <span>{text}</span>
    </button>
    {children}
  </React.Fragment>
);

export default headerButton;
