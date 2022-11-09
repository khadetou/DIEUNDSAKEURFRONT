import Slick, { Settings } from "react-slick";
import { Camera, Shuffle, Heart, Edit, Info, Trash2 } from "react-feather";
import { FC, useEffect } from "react";
import Image from "next/image";
import { useAppDispatch } from "hooks/index";
import { deleteProperty } from "redux/property/propertySlice";

interface CardProps {
  _id: string;
  name: string;
  address: string;
  region: string;
  location: string;
  images: any;
  video: string;
  type: string;
  status: string;
  price: string;
  rooms: string;
  baths: number;
  beds: number;
  emergencyexit: boolean;
  cctv: boolean;
  internet: boolean;
  parking: boolean;
  airconditioning: boolean;
  securityguard: boolean;
  terrace: boolean;
  laundry: boolean;
  elevator: boolean;
  balcony: boolean;
  pool: boolean;
  area: string;
  description: string;
  createdAt: string;
}
const Card: FC<CardProps> = ({
  address,
  airconditioning,
  balcony,
  baths,
  beds,
  cctv,
  description,
  elevator,
  emergencyexit,
  area,
  internet,
  laundry,
  location,
  name,
  parking,
  pool,
  price,
  region,
  rooms,
  securityguard,
  status,
  terrace,
  type,
  video,
  images,
  createdAt,
  _id,
}) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(createdAt).toLocaleDateString("fr-FR", options);
  useEffect(() => {
    document.querySelectorAll(".bg-img").forEach((img) => {
      const src = img.getAttribute("src");
      const parent = img.parentElement;
      parent?.setAttribute("style", `background-image: url(${src})`);
    });
  }, []);

  const dispatch = useAppDispatch();

  return (
    <div className="col-xl-4 col-md-6 xl-6">
      <div className="property-box">
        <div className="property-image">
          <Slick {...settings} className="property-slider">
            {images &&
              images.map(
                (
                  {
                    public_url,
                    url,
                    width,
                    height,
                  }: {
                    public_url: string;
                    url: string;
                    width: number;
                    height: number;
                  },
                  idx: number
                ) => (
                  <a
                    key={public_url}
                    className={`bg-size tw-relative !tw-bg-cover !tw-bg-center !tw-bg-no-repeat !tw-block`}
                  >
                    <Image
                      src={url}
                      width={width}
                      height={height}
                      className="bg-img !tw-hidden"
                      alt=""
                    />
                  </a>
                )
              )}
          </Slick>

          <div className="labels-left">
            <div>
              <span className="label label-shadow">
                {status === "SELL" ? "A Vendre" : "A Louer"}
              </span>
            </div>
          </div>
          <div className="seen-data">
            <Camera className="tw-inline" />
            <span>
              {images.length < 10 ? `0${images.length}` : images.length}
            </span>
          </div>
          <div className="overlay-property-box">
            <a
              className="effect-round"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Compare"
            >
              <Shuffle className="tw-inline" />
            </a>
            <a
              className="effect-round like"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="wishlist"
            >
              <Heart className="tw-inline" />
            </a>
          </div>
        </div>

        <div className="property-details">
          <span className="font-roboto">{region}</span>
          <a>
            <h3 className="!tw-text-[calc(18px+(22_-_18)*((100vw-320px)/(1920-320)))] !tw-font-bold !tw-mb-[10px]">{`${name} à ${location}`}</h3>
          </a>
          <h6 className="!tw-font-bold !tw-text-[17px]">
            {Number(price).toLocaleString("fr-FR", {
              style: "currency",
              currency: "XOF",
              currencyDisplay: "narrowSymbol",
            })}
          </h6>
          <p className="font-roboto light-font">{description}</p>
          <ul>
            <li>
              <Image
                src="/images/svg/icon/double-bed.svg"
                className="img-fluid"
                width={16}
                height={16}
                alt=""
              />
              Lits : {beds}
            </li>
            <li>
              <Image
                src="/images/svg/icon/bathroom.svg"
                className="img-fluid"
                width={16}
                height={16}
                alt=""
              />
              Salle De Bains : {baths}
            </li>
            <li>
              <img
                src="/images/svg/icon/square-ruler-tool.svg"
                className="img-fluid ruler-tool"
                width={16}
                height={16}
                alt=""
              />
              {area} M²
            </li>
          </ul>
          <div className="property-btn d-flex">
            <span className="tw-capitalize">{date}</span>
            <div className="tw-flex tw-items-center tw-mb-[10px] tw-justify-between tw-max-w-[105px] tw-w-[105px]">
              <button type="button">
                <Info size={20} />
              </button>
              <button>
                <Edit size={20} />
              </button>
              <button
                className="hover:tw-text-red-600"
                onClick={() => dispatch(deleteProperty(_id))}
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
