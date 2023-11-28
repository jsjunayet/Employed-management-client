
import { FaDeleteLeft } from "react-icons/fa6"
import { axiospublic } from "../../../Hook/useAxios";
import { MdVerified } from "react-icons/md";

import { useState } from "react";
import { Usercollection } from "../../../Hook/Utilises";
import { Link } from "react-router-dom";
import Modal from "../../../Component/Modal";
const TableRow = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [, refetch] = Usercollection()
    // const [active, setactive] = useState(false)
    const handlepatch = async (id) => {
        const res = await axiospublic.patch(`/users/${id}`)
        if (res.data.modifiedCount > 0) {
            refetch()
        }
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <tr>
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
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            {/* <img
                                alt='profile'
                                src=
                            className='mx-auto object-cover rounded h-10 w-15 '
                            /> */}
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                            {item?.email}
                        </p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {
                        item?.verify == 'true' ? <MdVerified className="text-3xl"> </MdVerified> : <FaDeleteLeft onClick={() => handlepatch(item?._id)} className="text-3xl cursor-pointer"></FaDeleteLeft>
                    }
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {item?.bank}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    $ {item?.salary}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <button onClick={() => setIsOpen(true)} className='relative'>PAY</button>
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <Link to={`details/${item._id}`} className='relative'>Details</Link>
                </span>
            </td>
            {
                item?.verify == 'true' && <Modal item={item} isOpen={isOpen} closeModal={closeModal}></Modal>
            }
        </tr>

    );
};

export default TableRow;