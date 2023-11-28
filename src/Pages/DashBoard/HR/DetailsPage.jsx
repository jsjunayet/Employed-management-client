
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CompareCollection } from '../../../Hook/Utilises';


const DetailsPage = () => {
    const id = useLoaderData()
    const Compare = CompareCollection(id?.email)
    console.log(Compare);
    const generateChartData = (originalData) => {
        const groupedData = originalData.reduce((acc, entry) => {
            const { Month, price } = entry;
            if (!acc[Month]) {
                acc[Month] = 0;
            }
            acc[Month] += price;
            return acc;
        }, {});

        return Object.keys(groupedData).map((month) => ({
            name: month,
            salary: groupedData[month],
        }));
    };
    const chartData = generateChartData(Compare);

    const item = useLoaderData()
    console.log(item);
    return (
        <div className='md:flex justify-center items-center min-h-screen'>
            <div className="md:w-1/2 w-full bg-[#FFEDD5] h-96 flex flex-col justify-center items-center">
                <div className=" space-y-3">
                    <img src={item?.userimg} className="w-40 h-40 rounded-full mx-auto" alt="" />
                    <p className="text-2xl font-semibold text-center">{item?.designation}</p>
                    <p className="text-xl">{item?.email}</p>

                </div>
            </div>
            <div className='md:w-1/2 w-full'>
                {
                    Compare.length > 0 ? <BarChart
                        width={500}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={30}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="salary" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart> : <p className='text-4xl font-semibold text-center px-2'>There is no payment any salary</p>

                }
            </div>
        </div>
    );
};

export default DetailsPage;