import { Usercollection } from "../../../Hook/Utilises";
import TableRows from "./TableRows";


const AllEmployeeList = () => {
    const [User] = Usercollection()
    console.log(User);
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center">ALL Employee List</h1>
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
                                                Name
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left  uppercase text-xl font-semibold'
                                            >
                                                Designation

                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left  uppercase text-xl font-semibold'
                                            >
                                                Make HR
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left  uppercase text-xl font-semibold '
                                            >
                                                fire
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            User?.length < 1 ? <div className="flex justify-center items-center min-h-[calc(100vh-300px)]"> </div> :
                                                User?.map((item) => <TableRows key={item._id} item={item}  ></TableRows>)
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

export default AllEmployeeList;