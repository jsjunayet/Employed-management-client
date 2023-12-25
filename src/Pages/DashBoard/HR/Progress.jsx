
import { useEffect, useState } from 'react';
import { TotalWork, WorkSheet } from '../../../Hook/Utilises';
import axios from 'axios';
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";

const Progress = () => {
    const [search, setsearch] = useState('')
    const [Range, setRange] = useState('')
    const [EmployeeName, setEmployeeName] = useState('')
    const [Works] = WorkSheet()
    const Names = [...new Set(Works.map(item => item.name))]
    const filters = Works.filter(Work => (search === "" || Work.name.toLowerCase().includes(search.toLowerCase())) &&
        (EmployeeName === "" || Work.name === EmployeeName) && (Work.Hours >= Range))
        .sort((a, b) => (b.Hours - a.Hours))

    return (
        <div>
            <div>
                <div>
                    <div className='container mx-auto px-4 sm:px-8'>
                        <div className='flex gap-3 items-center justify-center'>
                            <div className='w-4/12'>
                                <input type="text"
                                    placeholder="Please your Employee name"
                                    className="input input-bordered w-full"
                                    onChange={(e) => setsearch(e.target.value)}
                                />
                            </div>
                            <div className='w-4/12'>
                                <select onChange={(e) => {
                                    const value = (e.target.value)
                                    setEmployeeName(value === "all" ? "" : value)
                                }} className="select select-bordered w-full ">
                                    <option value="all"> ALL Employee Data</option>
                                    {
                                        Names.map(Name =>
                                            <option key={Name} value={Name}>{Name}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className='w-4/12'>
                                <input onChange={(e) => setRange(e.target.value)} type="range" min={0} max="12" value={Range} className="range range-success" />

                            </div>
                        </div>
                        <div className=''>
                            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 pt-4 overflow-x-auto'>
                                <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                    <table className='min-w-full leading-normal'>
                                        <thead className="">
                                            <tr className="">
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left  text-xl font-semibold  uppercase '
                                                >
                                                    Name

                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left  uppercase text-xl font-semibold'
                                                >
                                                    Date

                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left  uppercase text-xl font-semibold'
                                                >
                                                    Task

                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left  uppercase text-xl font-semibold'
                                                >
                                                    Hours

                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                filters?.map((item) => <tr key={item._id}>
                                                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                                        <div className='flex items-center'>
                                                            <div className='flex-shrink-0'>
                                                                <div className='block relative'>
                                                                </div>
                                                            </div>
                                                            <div className='ml-3'>
                                                                <p className='text-gray-900 whitespace-no-wrap'>{item?.name}</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className='px-5 py-5 border-b border-gray-200 text-gray-900 text-sm'>
                                                        <p className='text-gray-900 whitespace-no-wrap'>
                                                            {new Date(item.Date).toLocaleDateString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                                        </p>
                                                    </td>
                                                    <td className='px-5 py-5 border-b border-gray-200 text-gray-900 text-sm'>
                                                        <p className='text-gray-900 whitespace-no-wrap'>
                                                            {item?.Task}
                                                        </p>
                                                    </td>
                                                    <td className='px-5 py-5 border-b border-gray-200 text-gray-900 text-sm'>
                                                        <p className='text-gray-900 whitespace-no-wrap'>
                                                            {item?.Hours}
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

        </div>
    );
};

export default Progress;