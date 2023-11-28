import Swal from "sweetalert2";
import { axiospublic } from "../../../Hook/useAxios";
import { Usercollection } from "../../../Hook/Utilises";


const TableRows = ({ item }) => {
    const [, refetch] = Usercollection()
    // console.log(refetch);
    const handlepatch = async (id) => {
        console.log(id);
        const res = await axiospublic.patch(`/admin/${id}`)
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            console.log('admin');
            refetch()
        }
    }
    const handlefire = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to fire this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Fire it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiospublic.patch(`/fire/${id}`)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "fire!",
                        text: `this  ${item?.role} has been deleted.`,
                        icon: "success"
                    });
                    refetch()
                }
            }
        });
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
                <p className='text-gray-900 whitespace-no-wrap'>
                    {item?.designation}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    {
                        item?.role == "HR" ? "HR" : <button onClick={() => handlepatch(item?._id)} className='relative'>{item?.role}</button>
                    }
                </span>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    {
                        item.role == "user" ? "Fired" : <button onClick={() => handlefire(item?._id)} className='relative'>fire</button>
                    }
                </span>
            </td>

        </tr>
    );
};

export default TableRows;