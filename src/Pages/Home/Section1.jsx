import { useEffect, useState } from "react";


const Section1 = () => {
    const [circulars, setcirculars] = useState([])
    useEffect(() => {
        fetch('/extra.json')
            .then(res => res.json())
            .then(data => {
                setcirculars(data)
            })
    }, [])
    console.log(circulars);
    return (
        <div>
            <p className="text-3xl font-bold text-center mb-2 mt-10">Please Apply Our Company</p>
            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead className=" bg-orange-600">
                                    <tr className="">
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-600 text-gray-800 text-left  text-xl font-semibold  uppercase '
                                        >
                                            Apply

                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3  border-b border-gray-600 text-gray-800  text-left  uppercase text-xl font-semibold'
                                        >
                                            Location

                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-600 text-gray-800  text-left  uppercase text-xl font-semibold'
                                        >
                                            Job Type

                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-600 text-gray-800  text-left  uppercase text-xl font-semibold'
                                        >
                                            Salary

                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-600 text-gray-800  text-left  uppercase text-xl font-semibold'
                                        >
                                            Apply

                                        </th>

                                    </tr>
                                </thead>
                                <tbody className=" bg-orange-200">
                                    {
                                        circulars?.map((item) => <tr className=" hover:bg-orange-500" key={item._id}>
                                            <td className='px-5 py-5 border-b border-gray-600  text-sm'>
                                                <div className='flex items-center'>
                                                    <div className='flex-shrink-0'>
                                                        <div className='block relative'>
                                                        </div>
                                                    </div>
                                                    <div className='ml-3 flex gap-2 justify-center items-center'>
                                                        <img src={item.Apply} className="w-20 h-20" alt="" />
                                                        <p className='text-gray-900 text-xl whitespace-no-wrap'>{item?.Name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-600  text-gray-900 text-sm'>
                                                <p className='text-gray-900 text-xl whitespace-no-wrap'>
                                                    {item?.Location}
                                                </p>
                                            </td>
                                            <td className='px-5 py-5 border-b  border-gray-600  text-gray-900 text-sm'>
                                                <p className='text-gray-900 text-xl whitespace-no-wrap'>
                                                    {item?.Type}
                                                </p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-600 bg-whit6  text-gray-900 text-sm'>
                                                <p className='text-gray-900 text-xl font-medium whitespace-no-wrap'>
                                                    {item?.Salary}
                                                </p>
                                            </td>
                                            <td className='px-5 py-5 border-b border-gray-600 bg-whit6  text-gray-900 text-sm'>
                                                <p className='text-gray-900 btn btn-outline btn-primary text-xl whitespace-no-wrap'>
                                                    Apply
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
    );
};

export default Section1;