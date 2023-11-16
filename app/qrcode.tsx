import "../public/qrcode_kbank.jpg";
import "../public/qrcode_line.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Qrcode() {
  const images = ["/qrcode_kbank.jpg", "/qrcode_line.jpeg"];
  return (
    <>
      {images.map((image, index) => {
        return (
          <div
            className="container flex flex-row justify-center items-center h-screen bg-grey_col-100  "
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
