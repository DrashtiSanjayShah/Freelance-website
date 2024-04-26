// Form not working

import React, { useState, useMemo, useCallback, useContext } from "react";
import Style from "../styles/account.module.css";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { Form } from "../../authorPage/componentindex";
import user1 from "../../images/user1.jpg";

const account = () => {
  const [fileUrl, setfileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    setfileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile settings.</h1>
        <p>
          You can set preffered display name, contact info, create your public
          URL
        </p>
       
      </div>
      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={user1}
            alt="account upload"
            width={150}
            height={150}
            className={Style.account_box_img_img}
          />
          <p className={Style.account_box_img_para}>Change Image</p>
        </div>
        <div className={Style.account_box_form}>
        <Form />
        </div>
      </div>
    </div>
  );
};
export default account;
