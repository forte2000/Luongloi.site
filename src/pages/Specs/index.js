import { useEffect } from "react";
import desktop from "../../assets/imgs/desktop.png";

function Specs() {
  useEffect(() => {
    document.title = "🖥 - Yuuta";
  }, []);

  const laptopSpecs = {
    laptopCpu: "12th Gen Intel(R) Core(TM) i3-12100F   3.30 GHz",
    laptopRam: "8.00 GB (7.82 GB usable)",
    laptopGpu: "NVIDIA GeForce GTX 750 Ti",
    laptopDisplay: "1920 x 1080 (32bit) (64bit)",
    laptopOs: "Windows 11 Pro",
    laptopDisk: "Ram hikesemi wave D4 3600MHz 8gb",
    LaptopInfo: "MSI pro H610M-E DDR4",
  };

  const phoneSpecs = {
    phoneCpu: "Apple A13",
    phoneRam: "4 GB",
    phoneDisplay: "XDR OLED 6.5",
    phoneOs: "iOS 18.6.1",
    phoneDisk: "256 GB (SD)",
    phoneCam: "Triple 12 Megapixel",
    phonePin: "3110 mAh,  3.83V",
  };

  const LaptopInfo = ({ laptopCpu, laptopRam, laptopGpu, laptopDisplay, laptopOs, laptopDisk, LaptopInfo }) => (
    <>
      <ul className='list-disc text-sm ml-6'>
        <li>CPU: {laptopCpu}</li>
        <li>GPU: {laptopGpu}</li>
        <li>RAM: {laptopRam}</li>
        <li>Disk: {laptopDisk}</li>
        <li>Màn: {laptopDisplay}</li>
        <li>Os: {laptopOs}</li>
        <li>Main: {LaptopInfo}</li>
      </ul>
    </>
  );

  const PhoneInfo = ({ phoneCpu, phoneRam, phoneDisplay, phoneOs, phoneDisk, phoneCam, phonePin }) => (
    <>
      <ul className='list-disc text-sm ml-6'>
        <li>CPU: {phoneCpu}</li>
        <li>RAM: {phoneRam}</li>
        <li>Disk: {phoneDisk}</li>
        <li>Màn: {phoneDisplay}</li>
        <li>Os: {phoneOs}</li>
        <li>Camera: {phoneCam}</li>
        <li>Pin, sạc: {phonePin}</li>
      </ul>
    </>
  );

  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>Spacs 💼</h2>
      </div>
      <p>Thiết bị tui hiện đang sử dụng để chơi game, lập trình, học tập và hàng ngày 💻.</p>
      <div className='w-full mt-4 grid md:grid-cols-2 grid-cols-1 gap-5'>
        <div>
          <div className='mb-4 p-2 rounded-xl bg-slate-100'>
            <h4 className='mb-1 text-2xl font-bold'>
              PC<span className='text-xl ml-2 inline-block'>(Personal Computer)</span>
            </h4>
            <LaptopInfo {...laptopSpecs} />
          </div>
          <div className='p-2 rounded-xl bg-slate-100'>
            <h4 className='mb-1 text-2xl font-bold'>
              Phone ( Iphone 11 PRM )<span className='text-xl ml-2 inline-block'></span>
            </h4>
            <PhoneInfo {...phoneSpecs} />
          </div>
        </div>
        <div>
          <div className='mb-4 p-2 rounded-xl bg-slate-100'>
            <h4 className='mb-1 text-2xl font-bold'>Mạng</h4>
            <ul className='list-disc text-sm ml-6'>
              <li>Mạng 4G: Viettel (ST90N)</li>
              <li>Tốc độ download: 50MB/s</li>
              <li>Tốc độ upload: 2MB/s</li>
            </ul>
          </div>
          <div className='p-2 rounded-xl bg-slate-100'>
            <h4 className='mb-1 text-2xl font-bold'>Thiết Bị Khác</h4>
            <ul className='list-disc text-sm ml-6'>
              <li>Chuột: G102 Logitech</li>
              <li>Màn: Siu too</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='my-6 border-dashed border-8 border-cyan-500 rounded-3xl overflow-hidden w-11/12 rotate-[355deg] mx-auto'>
        <img src={desktop} alt='' />
      </div>
    </div>
  );
}

export default Specs;
