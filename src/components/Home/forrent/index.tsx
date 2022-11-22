import { useAppSelector } from "hooks/index";
import React from "react";
import Card from "../Card";

const ForRent = () => {
  const { properties } = useAppSelector((store) => store.property);

  const filteredData: any[] = properties.filter(
    (property: any) => property.status === "SELL"
  );

  const sortedDate = filteredData.sort((a: any, b: any) => {
    const dateB: any = new Date(b.createdAt);
    const dateA: any = new Date(a.createdAt);

    return dateB - dateA;
  });
 
  const rents = sortedDate.slice(0, 6)
  return (
    <section className="property-section property-color-6">
      <div className="container">
        <div className="row ratio_55">
          <div className="col">
            <div className="title-1 color-6">
              <span className="label label-gradient color-6">Rent</span>
              <h2 className="!tw-text-[30px] !tw-font-bold !tw-tracking-[0.001em] !tw-capitalize">
                Dernier en date à louer
              </h2>
              <hr />
            </div>
            <div className="property-2 row column-space color-6">
              {rents.map((property, idx)=>(
                <Card key={idx} {...property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRent;

//Mathew 26/39