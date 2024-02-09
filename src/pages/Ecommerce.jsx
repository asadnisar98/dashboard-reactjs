import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartDat } from '../data/dummy';
import { useStateContext } from '../contexts/contextProvider.js';


const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3 bg-gradient-to-r from-sky-500 to-indigo-500 bg-no-repeat bg-cover bg-center">
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-xl text-white no-underline'>Earnings</p>
              <p className='text-sm'>$65,400</p>
            </div>

          </div>

          <div className='mt-6'>
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="sm"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ecommerce