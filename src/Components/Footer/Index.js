import React from "react";

export default function () {
  return (
    // <div className="bg-green-500 bg-opacity-20 fixed -bottom-0 w-full">
    <div className="bg-ordinary footer  w-full fixed -bottom-0 text-black">
      <div className="flex flex-col justify-center items-center ">
        <div className="p-1">
          <a
            href="https://www.facebook.com/actualizecenter"
            target="_blank"
            className="hover-secondary "
          >
            <i className="fa-brands fa-facebook text-3xl m-2"></i>
          </a>
          <a
            href="https://www.instagram.com/actualizecenter"
            target="_blank"
            className="hover-secondary"
          >
            <i className="fa-brands fa-instagram text-3xl m-2"></i>
          </a>
          <a
            href="https://www.tiktok.com/@actualizecenter"
            target="_blank"
            className="hover-secondary"
          >
            <i className="fa-brands fa-tiktok text-3xl m-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/actualizecenter"
            target="_blank"
            className="hover-secondary"
          >
            <i className="fa-brands fa-linkedin text-3xl m-2"></i>
          </a>
        </div>
        <div>
          &#169; Copyright The Actualize Center |{" "}
          <a href="https://actualizecenter.com/contact/">Contact</a>
        </div>
      </div>
      <br />
    </div>
  );
}
