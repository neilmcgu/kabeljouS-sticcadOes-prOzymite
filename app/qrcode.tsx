export default function qrcode(){

return (
<>
<div class="container flex flex-col justify-center items-center h-screen w-full bg-grey_col-100  ">
<section class="container  rounded-lg flex flex-col justify-center items-center mx-7 my-[85px] bg-white w-[320px] h-[497px]  lg:w-[320px] lg:h-[497px] lg:my-[151px] lg:mx-[560px]  ">
  <div class="container w-[288px] flex flex-col justify-center items-center mt-4 mx-4">
    <picture class="w-full" >
      <img class="rounded-lg " src="images/image-qr-code.png" alt="QR Code" />

    </picture>
    <h1 class="qr-heading text-[#1F314F] mt-6">Improve your front-end skills by building projects</h1>
    <p class="qr-content text-[#7D889E] mt-4 mb-[40px]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  </div>

</section>
</div>
</>
)
}