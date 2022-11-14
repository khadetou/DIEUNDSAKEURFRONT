import ButtonLoading from "components/ButtonLoading";
import { useAppSelector, useAppDispatch } from "hooks/index";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateAgent } from "redux/agents/agentSlice";
import Image from "next/image";
import TopBody from "./top-body";
import { reset } from "redux/agents/agentSlice";

const BodyEditAgent = () => {
  const dispatch = useAppDispatch();
  const { isError, isSuccess, message, isLoading } = useAppSelector(
    (store) => store.agent
  );
  const { agent } = useAppSelector((store) => store.agent);

  const { isAuthenticated } = useAppSelector((store) => store.auth);

  const { push } = useRouter();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    description: "",
    address: "",
    phone: "",
    youtube: "",
    facebook: "",
    instagram: "",
    web: "",
    linkedin: "",
  });
  const [imagePrev, setImagePrev] = useState<any>("");
  const [image, setImage] = useState<any>("");
  const [oldImage, setOldImage] = useState<any>("");
  const {
    description,
    email,
    phone,
    firstname,
    lastname,
    address,
    facebook,
    instagram,
    web,
    linkedin,
    youtube,
  } = values;
  const [disabled, setDisabled] = useState(false);
  const [gender, setGender] = useState("MALE");

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    console.log(e.target.files![0].size);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
        setImagePrev(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files![0]);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    const data = {
      firstname,
      lastname,
      email,
      description,
      address,
      phone,
      youtube,
      facebook,
      image,
      instagram,
      web,
      linkedin,
      gender,
    };

    dispatch(updateAgent({ data, id: agent._id }));
  };
  useEffect(() => {
    if (agent) {
      setValues({
        firstname: agent.firstname,
        lastname: agent.lastname,
        email: agent.email,
        description: agent.description,
        address: agent.address,
        phone: agent.phone,
        youtube: agent.socials.youtube,
        facebook: agent.socials.facebook,
        instagram: agent.socials.instagram,
        web: agent.socials.web,
        linkedin: agent.socials.linkedin,
      });
      setGender(agent.gender);
      setOldImage(agent.image);
    }

    if (!isAuthenticated) {
      push("/login");
    }
    if (isSuccess) {
      toast.success("Les données de l'agent modifié  avec succés!");
      dispatch(reset());
      setTimeout(() => {
        push("/dashboard/all-agents");
      }, 5000);
    }
    if (isError) {
      setDisabled(false);
      if (typeof message === "string") {
        toast.error(message);
      } else if (
        message &&
        message.message !== "undefined" &&
        Array.isArray(message.message)
      ) {
        let list: Array<string> = [...message.message];
        list.map((item: any) => toast.error(item));
        dispatch(reset());
      } else {
        toast.error(message.message);
        dispatch(reset());
      }
    }
  }, [isAuthenticated, isSuccess, isError, agent]);

  return (
    <div className="page-body">
      <TopBody />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Modifier les détails de l’agent</h5>
              </div>
              <div className="card-body admin-form">
                <form className="row gx-3">
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Prénom <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="prénom de l'agent"
                      name="firstname"
                      value={firstname}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Nom <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nom de l'agent"
                      name="lastname"
                      value={lastname}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Genre <span className="font-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle font-rubik"
                        data-bs-toggle="dropdown"
                      >
                        <span>
                          {gender === "MALE" ? "Masculin" : "Féminin"}
                        </span>{" "}
                        <i className="fas fa-angle-down"></i>
                      </span>
                      <div className="dropdown-menu text-start">
                        <a
                          className="dropdown-item"
                          onClick={() => setGender("MALE")}
                        >
                          Masculin
                        </a>
                        <a
                          className="dropdown-item"
                          onClick={() => setGender("FEMALE")}
                        >
                          Féminin
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Numéro Téléphone <span className="font-danger">*</span>
                    </label>
                    <input
                      type="phone"
                      className="form-control"
                      placeholder="enter your mobile number"
                      name="phone"
                      value={phone}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Address Email <span className="font-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="L'adress email de l'agent"
                      value={email}
                      name="email"
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className="form-group col-sm-12">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={description}
                      onChange={(e: any) => onChange(e)}
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="L'address de l'agent"
                      name="address"
                      value={address}
                      onChange={onChange}
                    />
                  </div>
                </form>
                <div className="dropzone-admin mb-0">
                  <label>Media</label>
                  <form
                    className="dropzone"
                    id="multiFileUpload"
                    action="https://themes.pixelstrap.com/upload.php"
                  >
                    <div className="dz-message needsclick">
                      <label htmlFor="file">
                        <input
                          type="file"
                          id="file"
                          name="image"
                          className="!tw-hidden"
                          accept="images/*"
                          onChange={onImageChange}
                        />
                        {oldImage && !imagePrev && (
                          <div className="tw-flex tw-flex-wrap tw-w-full tw-h-full">
                            <Image
                              src={oldImage.url}
                              alt=""
                              className="tw-rounded-md tw-mr-1"
                              width={200}
                              height={200}
                            />
                          </div>
                        )}
                        {imagePrev ? (
                          <div className="tw-flex tw-flex-wrap tw-w-full tw-h-full">
                            <Image
                              src={imagePrev}
                              alt=""
                              className="tw-rounded-md tw-mr-1"
                              width={200}
                              height={200}
                            />
                          </div>
                        ) : (
                          !oldImage && (
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
                <form className="row gx-3 tw-mt-4" onSubmit={onSubmit}>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Youtube <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control placeholder:!tw-lowercase"
                      placeholder="www.youtube.com/agent"
                      name="youtube"
                      value={youtube}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Linkedin <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control placeholder:!tw-lowercase"
                      placeholder="www.linkedin.com/agent"
                      name="linkedin"
                      value={linkedin}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Facebook <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control placeholder:!tw-lowercase"
                      placeholder="www.facebook.com/agent"
                      name="facebook"
                      value={facebook}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Site Web Personnel <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control placeholder:!tw-lowercase"
                      placeholder="www.agent.com/agent"
                      name="web"
                      value={web}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group col-md-4 col-sm-6">
                    <label>
                      Instagram <span className="font-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control placeholder:!tw-lowercase"
                      placeholder="www.instagram.com/agent"
                      name="instagram"
                      value={instagram}
                      onChange={onChange}
                    />
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
                    <button
                      type="button"
                      className="btn btn-pill btn-dashed color-4"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyEditAgent;
