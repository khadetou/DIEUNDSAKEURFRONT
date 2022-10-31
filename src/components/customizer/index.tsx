import { useState, ChangeEvent } from "react";
import { Settings, X } from "react-feather";
import ColorPicker from "./ColorPicker";
import LayoutSetting from "./LayoutSetting";

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
        <LayoutSetting />
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
        <ColorPicker />
      </div>
    </div>
  );
};

export default Customizer;
