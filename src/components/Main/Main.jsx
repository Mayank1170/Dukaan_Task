import React from 'react'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'
import OverviewCards from '../Cards/Cards'

const MainContainer = () => {
  return (
    <div className="grow">
          <Navbar />
          <main className='p-8 space-y-6 text-black'>
            <aside className='flex justify-between items-center'>
              <h1 className='text-text-dark text-xl font-medium'>Overview</h1>
              <select className='py-2 px-4 bg-white border-2 rounded-md text-md  text-black/70 '>
                <option>Last Month</option>
              </select>
            </aside>
            <OverviewCards />
            <h1 className='text-text-dark text-xl font-medium'>Transactions | This Month</h1>
            <Table />
          </main>
    </div>
  )
}

export default MainContainer