import { useEffect, useState } from "react";
import { EmployeeCollection } from "../../../Hook/Utilises";


const PaymentHistory = () => {
    const [Employee] = EmployeeCollection()
    console.log(Employee);

    return (

        <div>
            <div>
                <h1 className="text-3xl font-bold text-center">Payment History</h1>
                <div className='container mx-auto px-4 sm:px-8'>
                    <div className='py-8'>
                        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                <table className='min-w-full leading-normal'>
                                    <thead className="">
                                        <tr className="">
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left  text-xl font-semibold  uppercase '
                                            >
                                                Month

                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left  uppercase text-xl font-semibold'
                                            >
                                                Amount

                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left  uppercase text-xl font-semibold'
                                            >
                                                Transaction Id

                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Employee?.map((item) => <tr key={item._id}>
                                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                    <div className='flex items-center'>
                                                        <div className='flex-shrink-0'>
                                                            <div className='block relative'>
                                                            </div>
                                                        </div>
                                                        <div className='ml-3'>
                                                            <p className='text-gray-900 whitespace-no-wrap'>{item?.Month}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 text-gray-900 text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>
                                                        $ {item?.price}
                                                    </p>
                                                </td>
                                                <td className='px-5 py-5 border-b border-gray-200 text-gray-900 text-sm'>
                                                    <p className='text-gray-900 whitespace-no-wrap'>
                                                        {item?.transactionID}
                                                    </p>
                                                </td>




                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;