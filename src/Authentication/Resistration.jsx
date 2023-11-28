import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { imgbbupload } from "../Function Utilises/Utilites";
import useAuth from "../Hook/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { axiospublic } from "../Hook/useAxios";

const Resistration = () => {
    const { signUp, update, loading } = useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const name = data.name
        const email = data.email
        const password = data.password
        const image = data.image[0]
        const bank = data.bank
        const role = data.role
        const verify = 'false'
        const designation = data.designation
        const salary = data.salary
        console.log(email, password)

        try {
            const upload = await imgbbupload(image)
            console.log(upload)
            const userimg = upload.data?.display_url
            const userinfo = { name, email, bank, role, designation, salary, userimg, verify }
            await signUp(email, password)
            await update(data.name, upload.data?.display_url)
            const res = await axiospublic.post('/users', userinfo)
            console.log(res.data)
            toast.success("success login")
            navigate('/')
        }
        catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col w-full p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Registration</h1>
                    <p className='text-sm text-gray-400'>Welcome to StayVista</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div className="md:flex items-center gap-4">
                            <div className="md:w-1/2 w-full">
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name*
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {

                                    errors.name && <span className=' text-red-800'>This Name filed is required</span>

                                }
                            </div>
                            <div className="md:w-1/2 w-full">
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Role*
                                </label>
                                <select {...register("role", { required: true })} className="select select-accent w-full  px-3  border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">
                                    <option disabled selected>Please Enter Your Role?</option>
                                    <option value="Employee">Employee</option>
                                    <option value="HR">HR</option>
                                    <option value="Admin">Admin</option>
                                </select>

                                {
                                    errors.role && <span className=' text-red-800'>This Role filed is required</span>
                                }
                            </div>
                        </div>
                        <div className="md:flex gap-4">
                            <div className="md:w-1/2 w-full">
                                <label htmlFor='bank' className='block mb-2 text-sm'>
                                    bank_account_no*

                                </label>
                                <input
                                    {...register("bank", { required: true })}
                                    type='text'
                                    name='bank'
                                    id='bank'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'

                                />
                                {
                                    errors.bank && <span className=' text-red-800'>This bank_account_no filed is required</span>
                                }
                            </div>
                            <div className="md:w-1/2 w-full">
                                <label htmlFor='salary' className='block mb-2 text-sm'>
                                    salary*

                                </label>
                                <input
                                    {...register("salary", { required: true })}
                                    type='number'
                                    name='salary'
                                    id='salary'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {
                                    errors.salary && <span className=' text-red-800'>This Salary filed is required</span>
                                }
                            </div>
                        </div>

                        <div className="md:flex gap-4">
                            <div className="md:w-1/2 w-full">
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address*
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {
                                    errors.email && <span className=' text-red-800'>This Name filed is required</span>
                                }
                            </div>
                            <div className="md:w-1/2 w-full">
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password*
                                    </label>
                                </div>
                                <input
                                    {...register("password", {
                                        required: true,
                                        pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/
                                    })}
                                    type='password'
                                    name='password'
                                    autoComplete='new-password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                />
                                {
                                    errors.password?.type == "required" && <span className=' text-red-800'>This password filed is required</span>
                                }
                                {
                                    errors.password?.type == "pattern" && <span className="text-red-800 text-sm">Password must be Grater then six characters, at least one Uppercase letter and one special character</span>
                                }
                            </div>
                        </div>
                        <div className="md:flex gap-4 items-center">
                            <div className="md:w-1/2 w-full">
                                <label htmlFor='designation' className='block mb-2 text-sm'>
                                    designation*
                                </label>
                                <input
                                    {...register("designation", { required: true })}
                                    type='text'
                                    name='designation'
                                    id='designation'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                                {
                                    errors.designation && <span className=' text-red-800'>This designation filed is required</span>
                                }
                            </div>
                            <div className="md:w-1/2 w-full">
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image*
                                </label>
                                <input
                                    {...register("image", { required: true })}
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                />
                                {
                                    errors.image && <span className=' text-red-800'>This Name filed is required</span>
                                }
                            </div>
                        </div>

                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            {
                                loading ? <TbFidgetSpinner className=' animate-spin mx-auto' /> : 'SUBMIT'
                            }

                        </button>
                    </div>
                </form>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Resistration;