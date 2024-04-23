import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className="flex bg-[#f3f3f3] rounded-[54px] m-[26px] px-[26px] justify-between items-center">
      <a href="#">
        <img src="/vite.svg" alt="logo" className="item-center mr-[54px]" />
      </a>
      <nav className="flex justify-between items-center w-full p-4 max-[768px]:justify-end">
        <ul
          className={`flex gap-[2rem] justify-between items-center text-[18px] overflow-hidden ${
            isOpen
              ? "max-[768px]:flex hidden absolute flex-col top-[105px] right-[30px] bg-[#f3f3f3] rounded-bl-2xl rounded-br-2xl"
              : "max-[768px]:hidden"
          }`}
        >
          <li className="text-[#555555] hover:text-black duration-300 max-[768px]:px-[3rem] py-[.5rem]">
            <a href="#">Services</a>
          </li>
          <li className="text-[#555555] hover:text-black duration-300 max-[768px]:px-[3rem] py-[.5rem]">
            <a href="#">Partners</a>
          </li>
          <li className="text-[#555555] hover:text-black duration-300 max-[768px]:px-[3rem] py-[.5rem]">
            <a href="#">Team</a>
          </li>
          <li className="text-[#555555] hover:text-black duration-300 max-[768px]:px-[3rem] py-[.5rem]">
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <button className="rounded-[26px] border-[1px] border-black px-[22px] py-[8px] font-[16px] hover:bg-[#fff] duration-300 max-[425px]:hidden">
            Register
          </button>
          <button className="flex items-center bg-[#352ce8] text-white rounded-[26px] px-[22px] py-[8px] font-[16px] gap-1 hover:bg-[#2921c2] duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ali max-[475px]:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span className="">Login</span>
          </button>
        </div>
      </nav>
      <button className="hidden max-[768px]:block" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-[36px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-[36px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </header>
  );
}
