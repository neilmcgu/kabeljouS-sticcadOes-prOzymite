import Image from "next/image";
import Qrcode from "./qrcode";

export default function Home() {
  return (
    <>
      <section className="qrcodes grid grid-cols-2">
        <Qrcode />
      </section>
    </>
  );
}
