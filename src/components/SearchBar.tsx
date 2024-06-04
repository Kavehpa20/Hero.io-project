const SearchBar = () => {
  return (
    <div className="flex w-full justify-center px-4 sm:px-0 lg:translate-x-3">
      <div className="flex h-[55px] w-full max-w-[672px] items-center gap-2 rounded-[19px] bg-white px-2 shadow-xl">
        <div className="relative border-r p-1 pr-2">
          <div className="flex cursor-pointer items-center gap-0">
            <div className="rounded bg-white p-1">
              <img
                src="src/assets/images/hero-logo.svg"
                alt="Hero logo"
                className="h-8 w-8"
              />
            </div>
            <div className="mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12px"
                height="12px"
                viewBox="0 0 24 24"
                fill="none"
                className="rotate-90 transition-all duration-200"
              >
                <path
                  d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"
                  fill="#393535"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-full grow">
          <input
            placeholder="Search...."
            className="h-full w-full border-none bg-transparent text-black outline-none placeholder:text-gray-400 focus:border-none focus:outline-none focus:ring-0 2xl:text-[20px]"
          />
        </div>
        <div className="hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7 14C3.14 14 0 10.86 0 7C0 3.14 3.14 0 7 0C10.86 0 14 3.14 14 7C14 10.86 10.86 14 7 14ZM7 2C4.243 2 2 4.243 2 7C2 9.757 4.243 12 7 12C9.757 12 12 9.757 12 7C12 4.243 9.757 2 7 2Z"
              fill="#192733"
            ></path>
            <path
              d="M15.707 14.2929L13.314 11.8999C12.903 12.4289 12.429 12.9029 11.9 13.3139L14.293 15.7069C14.488 15.9019 14.744 15.9999 15 15.9999C15.256 15.9999 15.512 15.9019 15.707 15.7069C16.098 15.3159 16.098 14.6839 15.707 14.2929Z"
              fill="#192733"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
