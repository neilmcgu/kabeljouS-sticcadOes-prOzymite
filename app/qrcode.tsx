import "../public/kbank.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Qrcode() {
  const images = ["/kbank.jpg"];
  return (
    <>
      {images.map((image, index) => {
        return (
          <div
            className="container flex flex-col justify-center items-center h-screen w-full bg-grey_col-100  "
            key={`qrcode${index}`}
          >
            <section className="container  rounded-lg flex flex-col justify-center items-center mx-7 my-[85px] bg-white w-[320px] h-[497px]  lg:w-[320px] lg:h-[497px] lg:my-[151px] lg:mx-[560px]  ">
              <div className="container w-[288px] flex flex-col justify-center items-center mt-4 mx-4">
                <picture className="w-full">
                  <img className="rounded-lg " src={image} alt="QR Code" />
                </picture>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
}
