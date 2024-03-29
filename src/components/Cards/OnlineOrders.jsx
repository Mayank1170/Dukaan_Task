import React from "react";

const OnlineOrders = () => {
  return (
      <li
        className="w-full rounded-lg flex flex-col space-y-4 p-5 bg-white"
        style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      >
        <header className="flex space-x-2 items-center text-text">
          <h1 className="text-sm">Online orders</h1>
        </header>
        <main className="flex items-center pb-0">
          <h1 className="grow text-black font-medium text-3xl">231</h1>
          <span className="font-medium underline text-white hover:cursor-pointer">
            23 Orders
          </span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.95696 5.29289C9.34748 4.90237 9.98064 4.90237 10.3712 5.29289L16.3712 11.2929C16.5587 11.4804 16.6641 11.7348 16.6641 12C16.6641 12.2652 16.5587 12.5196 16.3712 12.7071L10.3712 18.7071C9.98065 19.0976 9.34748 19.0976 8.95696 18.7071C8.56643 18.3166 8.56643 17.6834 8.95696 17.2929L14.2498 12L8.95696 6.70711C8.56643 6.31658 8.56643 5.68342 8.95696 5.29289Z"
              fill="white"
            />
          </svg>
        </main>{" "}
      </li>
  );
};

export default OnlineOrders;
