
import { split } from 'postcss/lib/list';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { axiospublic } from '../../../Hook/useAxios';
import useAuth from '../../../Hook/useAuth';
import toast from 'react-hot-toast';

const Workshit = () => {
    const { user } = useAuth()
    const [formData, setFormData] = useState({
        task: '',
        hoursWorked: '',
        date: new Date(),
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            date,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        const Task = e.target.task.value
        const Hours = e.target.hoursWorked.value
        const Date = (formData.date)
        const email = user?.email
        const name = user?.displayName
        const Worksheet = { Task, Hours, Date, name, email }
        const res = await axiospublic.post('/works', Worksheet)
        if (res.data.insertedId) {
            toast.success("Successfully Add the task")
        }
    };

    return (
        <div className='flex flex-col justify-center items-center min-h-screen w-full bg-gray-900'>
            <p className='text-3xl font-bold text-white pb-4'>Work Sheet</p>
            <form className="" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="task" className="block text-sm font-medium text-white">
                        Tasks:
                    </label>
                    <select
                        id="task"
                        name="task"
                        className="mt-1 p-2 border rounded w-full"
                    >
                        <option disabled>Please task Now</option>
                        <option value="Sales">Sales</option>
                        <option value="Support">Support</option>
                        <option value="Content">Content</option>
                        <option value="Paper-work">Paper-work</option>
                    </select>
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="hoursWorked" className="block text-sm font-medium text-white">
                        Hours Worked:
                    </label>
                    <input
                        type="number"
                        id="hoursWorked"
                        name="hoursWorked"
                        placeholder='please how  hours work'
                        className="mt-1 p-2 border rounded "
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-white">
                        Date:
                    </label>
                    <DatePicker
                        id="date"
                        name="date"
                        selected={formData.date}
                        onChange={handleDateChange}
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 w-full text-xl text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    >
                        ADD
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Workshit;