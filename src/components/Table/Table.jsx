import React from "react";
import Paging from "../Table/Paging"
import TableFilters from "./TableFilters";

const tableData = [
  {
    orderId: 281209,
    transactionFees: "₹ 22",
    orderDate: "7 July, 2023",
    orderAmount: "1,125.00",
  },
  {
    orderId: 281208,
    transactionFees: "₹ 22",
    orderDate: "7 July, 2023",
    orderAmount: "1,125.00",
  },
  {
    orderId: 281207,
    transactionFees: "₹ 22",
    orderDate: "7 July, 2023",
    orderAmount: "1,125.00",
  },
  {
    orderId: 281206,
    transactionFees: "₹ 22",
    orderDate: "7 July, 2023",
    orderAmount: "1,125.00",
  },
  {
    orderId: 281205,
    transactionFees: "₹ 22",
    orderDate: "7 July, 2023",
    orderAmount: "1,125.00",
  },
  {
    orderId: 281204,
    transactionFees: "₹ 22",
    orderDate: "7 July, 2023",
    orderAmount: "1,125.00",
  },
];

const TableCardItem = ({
  orderId,
  transactionFees,
  orderDate,
  orderAmount,
}) => {
  return (
    <tr className="w-[100%] border-b">
      <td className="w-[25%] text-[#146EB4] py-3.5 px-3 text-sm leading-5 font-medium">
        #{orderId}
      </td>
      <td className="w-[25%] py-3.5 px-3 text-sm leading-5 font-medium">
        {orderDate}
      </td>
      <td className="w-[25%] py-3.5 px-3 text-sm leading-5 font-medium text-right">
        ₹{orderAmount}
      </td>
      <td className="text-right  py-3.5 px-3 text-sm leading-5 font-medium">
        {transactionFees}
      </td>
    </tr>
  );
};

const Table = () => {
  return (
    <div
      className="w-full flex flex-col bg-white border border-white  rounded-lg p-3 space-y-3"
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
    >
      <TableFilters />
      <table className=" w-full text-left border-collapse ">
        <tr className="w-full table-headers bg-[#F2F2F2] rounded">
          <th className="w-[25%] py-1.5 px-3 border-[#F2F2F2] text-sm text-black/95 font-normal">
            Order ID
          </th>
          <th className="flex w-[full] items-center py-1.5 px-3 border-[#F2F2F2] text-sm text-black/95 font-normal">
            Order date
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='hover:cursor-pointer'>
                <g clip-path="url(#clip0_5730_2537)">
                <path d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z" fill="#4D4D4D"/>
                </g>
                <defs>
                <clipPath id="clip0_5730_2537">
                <rect width="40" height="40" fill="white"/>
                </clipPath>
                </defs>
            </svg>
          </th>
          <th className="w-[5%] py-1.5 px-3 border-[#F2F2F2]text-sm text-black/95 font-normal text-right">
            Order amount
          </th>
          <th className="text-right py-1.5 px-3 border-[#F2F2F2] text-sm text-black/95 font-normal">
            Transaction ID
          </th>
        </tr>
        {tableData.map(
          ({ orderId, transactionFees, orderDate, orderAmount }) => (
            <TableCardItem
              key={orderId}
              orderId={281209}
              transactionFees={transactionFees}
              orderDate={orderDate}
              orderAmount={orderAmount}
            />
          )
        )}
      </table>
      <div className="flex justify-center">
      <Paging/>
      </div>
    </div>
  );
};

export default Table;

