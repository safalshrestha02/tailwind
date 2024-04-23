export default function Content() {
  return (
    <div className="flex my-10 mx-10 max-[930px]:flex-col">
      <div className="flex flex-col flex-1 justify-center">
        <div>
          <h1 className="flex flex-col text-[66px] max-[475px]: text-[55px] font-medium">
            Maximum profit<span>from advertising</span>
            on marketplaces
          </h1>
          <p className="flex flex-col text-[24px] mt-[2rem]">
            We help raise products to the top using
            <span>smart management and analytics</span>
          </p>
        </div>

        <div className="flex gap-5 my-[4rem]">
          <button className="text-[20px] rounded-[28px] bg-white border-[1px] border-black py-[5px] px-[22px] hover:bg-[#f3f3f3] duration-300">
            Learn more
          </button>
          <button className="flex items-center">
            <span className="bg-[#352ce8] text-[20px] text-white rounded-[26px] px-[22px] py-[5px] items-center">
              Start for free
            </span>
            <span className="bg-[#352ce8] h-[12px] w-[11px] relative left-[-2px] max-[425px]:hidden"></span>
            <span className="bg-[#352ce8] text-white rounded-[28px] relative p-[6px] left-[-4px] max-[425px]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-[2rem]">
        <div className="flex flex-col bg-[url('../public/pexels.jpeg')] rounded-[30px] p-[26px] text-white items-end justify-between h-[520px]">
          <div className="flex items-center gap-[1rem]">
            <p className="text-[36px]">100K+</p>
            <div className="flex flex-col font-medium">
              <span>Users</span>
              <span>Joined</span>
            </div>
          </div>
          <div>
            <button className="flex items-center gap-3 text-[16px] bg-white text-black rounded-[50px] py-[8px] px-[18px] opacity-65 hover:opacity-80 duration-300">
              About company
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex rounded-[30px] bg-[#f3f3f3] px-[3rem] py-[2rem] items-center justify-between max-[475px]:flex-col items-center">
          <div>
            <h1 className="text-[50px]">85%</h1>
            <p className="flex flex-col">
              <span>earn in the</span> <span>first month</span>
            </p>
          </div>
          <div>
            <h1 className="text-[50px]">
              120<span className="text-[36px]">K</span>
            </h1>
            <p className="flex flex-col">
              <span>average profit</span> <span>per month</span>
            </p>
          </div>
          <div>
            <h1 className="text-[50px]">5%</h1>
            <p className="flex flex-col">
              <span>sales decline</span> <span>after six month</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
