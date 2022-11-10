import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "hooks/index";
import ButtonLoading from "components/ButtonLoading";

interface CheckboxProps {
  values: any;
  checkboxVals: any;
  onChange: (e: any) => void;
  onChangeCheckbox: (e: any) => void;
  onSubmit: (e: any) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  values,
  onChange,
  onChangeCheckbox,
  onSubmit,
  checkboxVals,
}) => {
  const [disabled, setDisabled] = useState(false);
  const { isSuccess, isLoading } = useAppSelector((store) => store.property);
  useEffect(() => {
    if (isSuccess) {
      setDisabled(true);
    }
  }, [isSuccess]);
  return (
    <form className="row gx-3" onSubmit={onSubmit}>
      <div className="form-group col-sm-12">
        <label>video (mp4)</label>
        <input
          type="text"
          className="form-control"
          name="video"
          onChange={onChange}
          value={values.video}
          placeholder="mp4 video link"
        />
      </div>
      <div className="form-group col-sm-12 mb-0">
        <label>Caractéristiques supplémentaires</label>
        <div className="additional-checkbox">
          <label htmlFor="chk-ani">
            <input
              className="checkbox_animated color-4"
              id="chk-ani"
              type="checkbox"
              name="emergencyexit"
              checked={checkboxVals.emergencyexit}
              onChange={onChangeCheckbox}
            />{" "}
            Sortie de secours
          </label>
          <label htmlFor="chk-ani1">
            <input
              className="checkbox_animated color-4"
              id="chk-ani1"
              name="cctv"
              checked={checkboxVals.cctv}
              onChange={onChangeCheckbox}
              type="checkbox"
            />{" "}
            Caméra de Surveillance
          </label>
          <label htmlFor="chk-ani2">
            <input
              className="checkbox_animated color-4"
              id="chk-ani2"
              type="checkbox"
              name="internet"
              onChange={onChangeCheckbox}
              checked={checkboxVals.internet}
            />{" "}
            Internet
          </label>
          <label htmlFor="chk-ani3">
            <input
              className="checkbox_animated color-4"
              id="chk-ani3"
              name="parking"
              checked={checkboxVals.parking}
              onChange={onChangeCheckbox}
              type="checkbox"
            />{" "}
            Parking
          </label>
          <label htmlFor="chk-ani4">
            <input
              className="checkbox_animated color-4"
              id="chk-ani4"
              type="checkbox"
              name="airconditioning"
              checked={checkboxVals.airconditioning}
              onChange={onChangeCheckbox}
            />{" "}
            Climatisation
          </label>
          <label htmlFor="chk-ani5">
            <input
              className="checkbox_animated color-4"
              id="chk-ani5"
              type="checkbox"
              name="securityguard"
              checked={checkboxVals.securityguard}
              onChange={onChangeCheckbox}
            />{" "}
            Guarde de Sécurité
          </label>
          <label htmlFor="chk-ani6">
            <input
              className="checkbox_animated color-4"
              id="chk-ani6"
              type="checkbox"
              name="terrace"
              onChange={onChangeCheckbox}
              checked={checkboxVals.terrace}
            />{" "}
            Terrace
          </label>
          <label htmlFor="chk-ani7">
            <input
              className="checkbox_animated color-4"
              id="chk-ani7"
              type="checkbox"
              name="laundry"
              onChange={onChangeCheckbox}
              checked={checkboxVals.laundry}
            />{" "}
            Services de lavage (pressing)
          </label>
          <label htmlFor="chk-ani8">
            <input
              className="checkbox_animated color-4"
              id="chk-ani8"
              type="checkbox"
              name="elevator"
              checked={checkboxVals.elevator}
              onChange={onChangeCheckbox}
            />{" "}
            Elevator Lift
          </label>
          <label htmlFor="chk-ani9">
            <input
              className="checkbox_animated color-4"
              id="chk-ani9"
              type="checkbox"
              name="balcony"
              checked={checkboxVals.balcony}
              onChange={onChangeCheckbox}
            />{" "}
            balcon
          </label>
          <label htmlFor="pool">
            <input
              className="checkbox_animated color-4"
              id="pool"
              type="checkbox"
              name="pool"
              checked={checkboxVals.pool}
              onChange={onChangeCheckbox}
            />{" "}
            Piscine
          </label>
        </div>
      </div>
      <div className="form-btn col-sm-12">
        <button
          type="submit"
          disabled={disabled || isLoading}
          className={`btn btn-pill btn-gradient color-4 ${
            isLoading ? "!tw-px-3 !tw-cursor-not-allowed" : ""
          } ${disabled ? "!tw-cursor-not-allowed" : ""}`}
        >
          {isLoading ? <ButtonLoading /> : "Submit"}
        </button>
        <button type="button" className="btn btn-pill btn-dashed color-4">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkbox;
