import { useState, useEffect, ChangeEvent } from "react";
import FormInput from "./form-inputs";
import Media from "./media";
import Checkbox from "./checkbox";
import TopBody from "./top-body";
import { useAppSelector } from "hooks/index";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { createProperty, reset } from "redux/property/propertySlice";

const BodyAddProperty = () => {
  const dispatch = useDispatch();
  const { isError, isSuccess, message } = useAppSelector(
    (store) => store.property
  );

  const { push } = useRouter();
  const [values, setValues] = useState({
    name: "",
    address: "",
    area: 0,
    type: "",
    description: "",
    price: "",
    video: "",
  });
  const { address, area, description, name, price, type, video } = values;
  const [checkboxVals, setCheckboxVals] = useState({
    balcony: false,
    airconditioning: false,
    cctv: false,
    elevator: false,
    emergencyexit: false,
    internet: false,
    laundry: false,
    parking: false,
    pool: false,
    securityguard: false,
    terrace: false,
  });
  const {
    airconditioning,
    balcony,
    cctv,
    elevator,
    emergencyexit,
    internet,
    laundry,
    parking,
    pool,
    securityguard,
    terrace,
  } = checkboxVals;
  const [status, setStatus] = useState("SELL");
  const [rooms, setRooms] = useState("1");
  const [beds, setBeds] = useState("1");
  const [baths, setBaths] = useState("1");
  const [region, setRegion] = useState("Dakar");
  const [location, setLocation] = useState("Castors");

  const [imagesPrev, setImagesPrev] = useState<any>([]);
  const [images, setImages] = useState<any>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onChangeImage = (e: any) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPrev([]);

    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((oldArray: any) => [...oldArray, reader.result]);
          setImagesPrev((oldArray: any) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckboxVals({ ...checkboxVals, [e.target.name]: e.target.checked });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const propertyData = {
      address,
      type,
      area: Number(area),
      price: Number(price),
      description,
      name,
      video,
      status,
      rooms: Number(rooms),
      beds: Number(beds),
      baths: Number(baths),
      region,
      location,
      airconditioning,
      balcony,
      cctv,
      elevator,
      emergencyexit,
      internet,
      laundry,
      parking,
      pool,
      securityguard,
      terrace,
      images,
    };

    if (images.length === 0) {
      return toast.error("Upload an image");
    }

    dispatch(createProperty(propertyData));
  };

  useEffect(() => {
    if (isError) {
      if (
        message.message !== "undefined" &&
        message.message.length > 0 &&
        Array.isArray(message.message)
      ) {
        let list: Array<string> = [...message.message];
        list.map((item: any) => toast.error(item));
      } else {
        toast.error(message.message);
      }
    }
    if (isSuccess) {
      toast.success("Propriété créé avec succées!");
      dispatch(reset());
      setTimeout(() => {
        push("/dashboard/list");
      }, 2000);
    }
    dispatch(reset());
  }, [isError, dispatch, message, isSuccess]);

  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Add property details</h5>
              </div>
              <div className="card-body admin-form">
                <FormInput
                  values={values}
                  onChange={onChange}
                  status={status}
                  setStatus={setStatus}
                  rooms={rooms}
                  setRooms={setRooms}
                  beds={beds}
                  baths={baths}
                  setBeds={setBeds}
                  setBaths={setBaths}
                  region={region}
                  setRegion={setRegion}
                  location={location}
                  setLocation={setLocation}
                />
                <Media
                  onChangeImage={onChangeImage}
                  images={images}
                  imagesPrev={imagesPrev}
                />
                <Checkbox
                  values={values}
                  onChange={onChange}
                  onChangeCheckbox={onChangeCheckbox}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAddProperty;
