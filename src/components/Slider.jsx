import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { SliderData } from "../constants/slider";

export default function Slider() {
  return (
    <div className="flex flex-col items-center justify-center p-[1rem] rounded-[56px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1050: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="max-w-[100%] rounded-[26px]"
      >
        {SliderData.map((item) => (
          <SwiperSlide key={item.heading}>
            <div className="flex flex-col rounded-[26px] justify-end h-[490px] gap-[1rem] p-[2rem] bg-gradient-to-r from-[#cb9fda] to-[#94749e]">
              <h1 className="text-[32px] text-white font-medium">{item.heading}</h1>
              <p className="text-white font-medium">
                From the start you cannot choose which phrases to advertise
                with.
              </p>
              <button className="flex items-center justify-between rounded-[18px] px-[18px] py-[8px] bg-white hover:bg-[#f3f3f3] duration-300">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
