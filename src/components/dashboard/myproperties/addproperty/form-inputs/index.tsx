import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { useAppSelector } from "hooks/index";
import CurrencyInput from "react-currency-input-field";

interface FormInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: any;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  rooms: string;
  setRooms: Dispatch<SetStateAction<string>>;
  beds: string;
  setBeds: Dispatch<SetStateAction<string>>;
  baths: string;
  setBaths: Dispatch<SetStateAction<string>>;
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
}
const FormInput: FC<FormInputProps> = ({
  onChange,
  values,
  status,
  setStatus,
  rooms,
  setRooms,
  baths,
  beds,
  setBaths,
  setBeds,
  location,
  region,
  setLocation,
  setRegion,
  setPrice,
  price,
}) => {
  return (
    <form className="row gx-3">
      <div className="form-group col-sm-4">
        <label>Type de propriété</label>
        <input
          type="text"
          name="type"
          onChange={onChange}
          value={values.type}
          className="form-control"
          placeholder="Bureau, Terrain, Villa, Apartement, Maison"
          required
        />
      </div>
      <div className="form-group col-sm-4">
        <label>Titre</label>
        <input
          type="text"
          value={values.name}
          onChange={onChange}
          name="name"
          className="form-control"
          placeholder="Maison A vendre à almadie"
        />
      </div>
      <div className="form-group col-sm-4">
        <label>Statut de la propriété</label>
        <div className="dropdown">
          <span
            className="dropdown-toggle font-rubik"
            data-bs-toggle="dropdown"
          >
            <span>{status === "RENT" ? "A Louer" : "A Vendre"}</span>{" "}
            <i className="fas fa-angle-down"></i>
          </span>
          <div className="dropdown-menu text-start">
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setStatus("RENT")}
            >
              A Louer
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setStatus("SELL")}
            >
              A Vendre
            </a>
          </div>
        </div>
      </div>
      <div className="form-group col-sm-4 ">
        <label>Prix de l’immobilier</label>
        <CurrencyInput
          type="text"
          className="form-control"
          name="price"
          onValueChange={(value) => setPrice(value!)}
          value={price}
          // intlConfig={{ locale: "fr-FR", currency: "XOF" }}
          placeholder="1, 800 000 F CFA"
          required
        />
      </div>
      <div className="form-group col-sm-4">
        <label>Max Chambres</label>
        <div className="dropdown">
          <span
            className="dropdown-toggle font-rubik"
            data-bs-toggle="dropdown"
          >
            <input
              type="number"
              value={rooms}
              onBlur={() => {
                rooms === "" && setRooms("1");
              }}
              className="input-number-arrow tw-w-[97%]"
              onChange={(e) => setRooms(e.target.value)}
            />{" "}
            <i className="fas fa-angle-down"></i>
          </span>
          <div className="dropdown-menu text-start">
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRooms("1")}
            >
              1
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRooms("2")}
            >
              2
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRooms("3")}
            >
              3
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRooms("4")}
            >
              4
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRooms("5")}
            >
              5
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRooms("6")}
            >
              6
            </a>
          </div>
        </div>
      </div>
      <div className="form-group col-sm-4">
        <label>Lits</label>
        <div className="dropdown">
          <span
            className="dropdown-toggle font-rubik"
            data-bs-toggle="dropdown"
          >
            <input
              type="number"
              value={beds}
              onBlur={() => {
                beds === "" && setBeds("1");
              }}
              className="input-number-arrow tw-w-[97%]"
              onChange={(e) => setBeds(e.target.value)}
            />{" "}
            <i className="fas fa-angle-down"></i>
          </span>
          <div className="dropdown-menu text-start">
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBeds("1")}
            >
              1
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBeds("2")}
            >
              2
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBeds("3")}
            >
              3
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBeds("4")}
            >
              4
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBeds("5")}
            >
              5
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBeds("6")}
            >
              6
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBeds("7")}
            >
              7
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBeds("8")}
            >
              8
            </a>
          </div>
        </div>
      </div>
      <div className="form-group col-sm-4">
        <label>Salle de Bain</label>
        <div className="dropdown">
          <span
            className="dropdown-toggle font-rubik"
            data-bs-toggle="dropdown"
          >
            <input
              type="number"
              value={baths}
              onBlur={() => {
                baths === "" && setBaths("1");
              }}
              className="input-number-arrow tw-w-[97%]"
              onChange={(e) => setBaths(e.target.value)}
            />
            <i className="fas fa-angle-down"></i>
          </span>
          <div className="dropdown-menu text-start">
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBaths("1")}
            >
              1
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBaths("2")}
            >
              2
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBaths("3")}
            >
              3
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBaths("4")}
            >
              4
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBaths("5")}
            >
              5
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setBaths("6")}
            >
              6
            </a>
          </div>
        </div>
      </div>
      <div className="form-group col-sm-4">
        <label>Surfaçe</label>
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          value={values.area}
          name="area"
          placeholder="8500 m²"
        />
      </div>

      {/* <div className="form-group col-sm-4">
        <label>Agencies</label>
        <div className="dropdown">
          <span
            className="dropdown-toggle font-rubik"
            data-bs-toggle="dropdown"
          >
            <span>Premiere</span> <i className="fas fa-angle-down"></i>
          </span>
          <div className="dropdown-menu text-start">
            <a className="dropdown-item tw-cursor-pointer">Blue Sky</a>
            <a className="dropdown-item tw-cursor-pointer">Zephyr</a>
            <a className="dropdown-item tw-cursor-pointer">Premiere</a>
          </div>
        </div>
      </div> */}
      <div className="form-group col-sm-12">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value={values.description}
          onChange={(e: any) => onChange(e)}
          rows={4}
        ></textarea>
      </div>
      <div className="form-group col-sm-6">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          onChange={onChange}
          placeholder="Address of your property"
        />
      </div>
      {/* <div className="form-group col-sm-6">
        <label>Zip code</label>
        <input type="text" className="form-control" placeholder="39702" />
      </div> */}
      <div className="form-group col-sm-4">
        <label>Region</label>
        <div className="dropdown">
          <span
            className="dropdown-toggle font-rubik"
            data-bs-toggle="dropdown"
          >
            <span>{region}</span> <i className="fas fa-angle-down"></i>
          </span>
          <div className="dropdown-menu text-start">
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRegion("Dakar")}
            >
              Dakar
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRegion("Ziguinchor")}
            >
              Ziguinchor
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRegion("Kaolack")}
            >
              Kaolack
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setRegion("Thiès")}
            >
              Thiès
            </a>
          </div>
        </div>
      </div>
      <div className="form-group col-sm-4">
        <label>Localité</label>
        <div className="dropdown">
          <span
            className="dropdown-toggle font-rubik"
            data-bs-toggle="dropdown"
          >
            <span>{location}</span> <i className="fas fa-angle-down"></i>
          </span>
          <div className="dropdown-menu text-start">
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setLocation("Almadie")}
            >
              Almadie
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setLocation("HLM 5")}
            >
              HLM 5
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setLocation("Grand Dakar")}
            >
              Grand Dakar
            </a>
            <a
              className="dropdown-item tw-cursor-pointer"
              onClick={() => setLocation("Yoff")}
            >
              Yoff
            </a>
          </div>
        </div>
      </div>
      {/* <div className="form-group col-sm-4">
        <label>Landmark</label>
        <input
          type="text"
          className="form-control"
          placeholder="landmark place name"
        />
      </div> */}
    </form>
  );
};

export default FormInput;
