import { useState, ChangeEvent } from "react";
import { Settings, X } from "react-feather";

const onChnageLayout = (e: ChangeEvent<HTMLInputElement>) => {
  let layout = document.body;
  if (e.target.checked) {
    layout.classList.add("dark-layout");
  } else {
    layout.classList.remove("dark-layout");
  }
};
const Customizer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`customizer-wrap ${open ? "open" : ""}`}>
      <div className="customizer-links" onClick={() => setOpen(true)}>
        <Settings />
      </div>
      <div className="customizer-contain custom-scrollbar">
        <div className="setting-back" onClick={() => setOpen(false)}>
          <X />
        </div>
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
        {/* <div className="layouts-settings">
          <div className="customizer-title">
            <h6 className="color-4">Layout Direction</h6>
          </div>
          <div className="option-setting">
            <span>LTR</span>
            <label className="switch">
              <input
                type="checkbox"
                name="chk2"
                value="option"
                className="setting-check1"
                readOnly
              />
              <span className="switch-state"></span>
            </label>
            <span>RTL</span>
          </div>
        </div> */}
        <div className="layouts-settings ">
          <div className="customizer-title">
            <h6 className="color-4">Unlimited Color</h6>
          </div>
          <div className="option-setting unlimited-color-layout">
            <div className="form-group">
              <label htmlFor="ColorPicker6">color 6</label>
              <input
                id="ColorPicker6"
                type="color"
                value="#f35d43"
                name="Default"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="ColorPicker7 ">color 7</label>
              <input
                id="ColorPicker7"
                type="color"
                value="#f34451"
                name="Default"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customizer;
