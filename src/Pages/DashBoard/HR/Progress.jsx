
import { WorkSheet } from '../../../Hook/Utilises';

const Progress = () => {
    const [Works] = WorkSheet()
    console.log(Works);
    return (
        <div>
            <div>
                <div>
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
                                                Works?.map((item) => <tr key={item._id}>
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
                                                            {item?.Date}
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