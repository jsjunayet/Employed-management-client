import React, { useState } from 'react';
import { Usercollection } from '../../Hook/Utilises';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

const Accordition = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [User] = Usercollection()
    console.log(User);

    return (
        <div className=" max-w-7xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Employee Management</h1>
            <div className="grid gap-2 grid-col-1 md:grid-cols-2">
                {User.map((employee) => (
                    <div key={employee._id} className="border   rounded p-2 mb-2">
                        <div
                            className="flex justify-between cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <p className="font-semibold">{employee.name}</p>
                            <span>{isOpen ? <FaMinusSquare className='text-2xl text-red-200' /> : <FaPlusSquare className='text-2xl text-green-300' />}</span>
                        </div>
                        {isOpen && (
                            <div className="mt-2">
                                <p>Email: {employee.email}</p>
                                <p>Role: {employee.role}</p>
                                {/* Add more employee details as needed */}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};



export default Accordition;