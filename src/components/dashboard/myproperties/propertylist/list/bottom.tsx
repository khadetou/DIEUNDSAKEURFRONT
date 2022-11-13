import React from "react";
import Card from "./card/Card";
import Pagination from "./pagination";
import { useAppDispatch, useAppSelector } from "hooks/index";

const Bottom = () => {
  const { isSuccess, isError, isLoading, properties } = useAppSelector(
    (store) => store.property
  );
  return (
    <div className="col-xl-12">
      <div className="property-2 row column-sm property-label property-grid">
        {properties.length !== 0 ? (
          properties.map(
            (
              {
                name,
                address,
                region,
                location,
                video,
                type,
                status,
                price,
                rooms,
                baths,
                beds,
                emergencyexit,
                cctv,
                internet,
                parking,
                airconditioning,
                securityguard,
                terrace,
                laundry,
                elavator,
                balcony,
                pool,
                area,
                description,
                images,
                createdAt,
                _id,
              }: any,
              idx: any
            ) => (
              <Card
                key={idx}
                _id={_id}
                name={name}
                address={address}
                region={region}
                location={location}
                video={video}
                type={type}
                status={status}
                price={price}
                rooms={rooms}
                baths={baths}
                beds={beds}
                images={images}
                emergencyexit={emergencyexit}
                cctv={cctv}
                internet={internet}
                parking={parking}
                airconditioning={airconditioning}
                securityguard={securityguard}
                terrace={terrace}
                laundry={laundry}
                elevator={elavator}
                balcony={balcony}
                pool={pool}
                area={area}
                description={description}
                createdAt={createdAt}
              />
            )
          )
        ) : (
          <div>You don't have any property yet!</div>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Bottom;
