import React, { ChangeEvent } from "react";

const LayoutSetting = () => {
  const onChnageLayout = (e: ChangeEvent<HTMLInputElement>) => {
    let layout = document.body;
    if (e.target.checked) {
      layout.classList.add("dark-layout");
    } else {
      layout.classList.remove("dark-layout");
    }
  };
  return (
    <div className="layouts-settings">
      <div className="customizer-title">
        <h6 className="color-4">Layout type</h6>
      </div>
      <div className="option-setting">
        <span>Light</span>
        <label className="switch">
          <input
            type="checkbox"
            name="chk1"
            value="option"
            className="setting-check"
            onChange={onChnageLayout}
          />
          <span className="switch-state"></span>
        </label>
        <span>Dark</span>
      </div>
    </div>
  );
};

export default LayoutSetting;
