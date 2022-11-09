import Image from "next/image";
import { FC } from "react";

interface MediaProps {
  images: any;
  imagesPrev: any;
  oldImages: any;
  onChangeImage: (e: any) => void;
}
const Media: FC<MediaProps> = ({
  images,
  imagesPrev,
  onChangeImage,
  oldImages,
}) => {
  return (
    <div className="dropzone-admin">
      <label>Media</label>
      <form
        className="dropzone"
        id="multiFileUpload"
        action="https://themes.pixelstrap.com/upload.php"
      >
        <div className="dz-message needsclick">
          <label htmlFor="images">
            <input
              type="file"
              multiple
              id="images"
              className="!tw-hidden"
              onChange={onChangeImage}
            />
            {imagesPrev.length === 0 && (
              <div className="tw-flex tw-flex-wrap tw-w-full tw-h-full">
                {imagesPrev.length === 0 &&
                  oldImages.length > 0 &&
                  oldImages.map((img: any, idx: any) => (
                    <Image
                      key={idx}
                      src={img.url}
                      alt=""
                      className="tw-rounded-md tw-mr-1"
                      width={200}
                      height={200}
                    />
                  ))}
              </div>
            )}
            {imagesPrev.length !== 0 ? (
              <div className="tw-flex tw-flex-wrap tw-w-full tw-h-full">
                {imagesPrev.map((img: any, idx: any) => (
                  <Image
                    key={idx}
                    src={img}
                    alt=""
                    className="tw-rounded-md tw-mr-1"
                    width={200}
                    height={200}
                  />
                ))}
              </div>
            ) : (
              oldImages === 0 && (
                <>
                  <i className="fas fa-cloud-upload-alt"></i>
                  <h6>Drop files here or click to upload.</h6>
                </>
              )
            )}
          </label>
        </div>
      </form>
    </div>
  );
};

export default Media;
