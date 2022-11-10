import { useState, useEffect, ChangeEvent } from "react";
import FormInput from "./form-inputs";
import Media from "./media";
import Checkbox from "./checkbox";
import TopBody from "./top-body";
import { useAppSelector } from "hooks/index";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { reset, updateProperty } from "redux/property/propertySlice";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const BodyAddProperty = () => {
  const dispatch = useDispatch();
  const { isError, isSuccess, message, property } = useAppSelector(
    (store) => store.property
  );

  const { push } = useRouter();
  const [values, setValues] = useState({
    name: "",
    address: "",
    area: "",
    type: "",
    description: "",
    video: "",
  });
  const { address, area, description, name, type, video } = values;
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
  const [price, setPrice] = useState("");
  const [imagesPrev, setImagesPrev] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const [oldImages, setOldImages] = useState<any>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
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
      id: property._id,
      data: {
        address,
        type,
        area: area,
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
      },
    };

    dispatch(updateProperty(propertyData));
  };

  useEffect(() => {
    if (property) {
      setStatus(property.status);
      setRooms(property.rooms);
      setBaths(property.baths);
      setBeds(property.beds);
      setRegion(property.region);
      setLocation(property.location);
      setOldImages(property.images);
      setPrice(property.price);
      setCheckboxVals({
        balcony: property.balcony,
        airconditioning: property.airconditioning,
        cctv: property.cctv,
        elevator: property.elevator,
        emergencyexit: property.emergenceyexit,
        internet: property.internet,
        laundry: property.laundry,
        parking: property.parking,
        pool: property.pool,
        securityguard: property.securityguard,
        terrace: property.terrace,
      });
      setValues({
        name: property && property.name,
        address: property && property.address,
        area: property && property.area,
        type: property && property.type,
        description: property && property.description,
        video: property && property.video,
      });
    }
    if (isError) {
      if (message.message !== "undefined" && Array.isArray(message.message)) {
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
    // dispatch(reset());
  }, [isError, dispatch, message, isSuccess, property]);

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
                  price={price}
                  setPrice={setPrice}
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
                  address={address}
                />
                <Media
                  onChangeImage={onChangeImage}
                  oldImages={oldImages}
                  images={images}
                  imagesPrev={imagesPrev}
                />
                <Checkbox
                  values={values}
                  onChange={onChange}
                  onChangeCheckbox={onChangeCheckbox}
                  checkboxVals={checkboxVals}
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
