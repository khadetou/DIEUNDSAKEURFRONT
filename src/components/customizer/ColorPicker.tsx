import { ChangeEvent, useState } from "react";

const ColorPicker = () => {
  const [picker6, setPiker6] = useState("#f35d43");
  const [piker7, setPiker7] = useState("#f34451");
  const onChange6 = (e: ChangeEvent<HTMLInputElement>) => {
    setPiker6(e.target.value);
    document.documentElement.style.setProperty(
      "--theme-default6",
      e.target.value
    );
  };
  const onChange7 = (e: ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty(
      "--theme-default7",
      e.target.value
    );
    setPiker7(e.target.value);
  };

  return (
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
            value={picker6}
            name="Default"
            onChange={onChange6}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ColorPicker7 ">color 7</label>
          <input
            id="ColorPicker7"
            type="color"
            value={piker7}
            name="Default"
            onChange={onChange7}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
