import { useAppSelector } from "hooks/index";
import moment from "moment";
import Link from "next/link";

const PropertySection = () => {
  const { properties } = useAppSelector((store) => store.property);
  const proper: any[] = properties.filter(
    (property: any) => property.status === "SELL"
  );

  const sortedDate = proper.sort((a: any, b: any) => {
    const dateB: any = new Date(b.createdAt);
    const dateA: any = new Date(a.createdAt);

    return dateB - dateA;
  });

  const Lastel = sortedDate.slice(0, 3);
  return (
    <section className="property-section slick-between slick-shadow property-color-6">
      <div className="container">
        <div className="row ratio_landscape">
          <div className="col">
            <div className="title-1 color-6">
              <span className="label label-gradient color-6">A Vendre</span>
              <h2 className="!tw-mb-[-9px] !tw-pt-[15px]  !tw-text-[30px] !tw-font-bold !tw-tracking-[0.001em] !tw-capitalize">
                Dernières En Date à Vendre
              </h2>
              <hr />
            </div>
            <div className="listing-hover-property row">
              {Lastel.map((property, idx) => (
                <div className="col-xl-4 col-md-6 wow fadeInUp" key={idx}>
                  <div className="property-box">
                    <div className="property-image">
                      <a
                        style={{
                          backgroundImage: `url(${property.images[0].url})`,
                        }}
                        className="tw-bg-cover tw-bg-[center_center] tw-block  tw-bg-no-repeat bg-size"
                      >
                        <div className="labels-left">
                          <span className="label label-shadow">
                            {property.status === "SELL"
                              ? "A Vendre"
                              : "A Louer"}
                          </span>
                        </div>
                      </a>
                      <div className="bottom-property">
                        <div className="d-flex">
                          <div>
                            <h5 className="!tw-font-semibold !tw-text-[20px] !tw-tracking-[0.03em] !tw-leading-[1.2]">
                              <a
                                href="single-property-6.html"
                                className="!tw-text-[20px]"
                              >
                                {property.region}
                              </a>
                            </h5>
                            <h6>
                              {Number(property.price).toLocaleString("fr-Fr", {
                                style: "currency",
                                currency: "XOF",
                              })}
                              <small>/ start from</small>
                            </h6>
                          </div>
                          <Link
                            type="button"
                            className="btn btn-gradient color-6 mt-3"
                            href={`/property/sales/${property._id}`}
                          >
                            Details
                          </Link>
                        </div>
                        <div className="overlay-option">
                          <ul>
                            <li className="!tw-flex !tw-flex-col">
                              <span>Lits</span>
                              <h6>{property.beds}</h6>
                            </li>
                            <li className="!tw-flex !tw-flex-col">
                              <span>Toilettes</span>
                              <h6>{property.baths}</h6>
                            </li>
                            <li className="!tw-flex !tw-flex-col">
                              <span>Chambres</span>
                              <h6>{property.rooms}</h6>
                            </li>
                            <li className="!tw-flex !tw-flex-col">
                              <span>Superficie</span>
                              <h6>
                                {property.area}m<sup>2</sup>
                              </h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
