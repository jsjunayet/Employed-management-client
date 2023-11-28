import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51OEF3CAmt6OY2qQjrncnGPkmQTrJUeKE6qtw4cz0SC0GVCSusJjXov1j4MssrzdXqDBI6qX2mUc624fYPZMtdSiV00FB7vZMxV')
const Modal = ({ closeModal, isOpen, item }) => {
    const [month, setmonth] = useState('')
    const [year, setyear] = useState('')
    console.log(month, year)

    return (
        <>
            {/* <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Open dialog
          </button>
        </div>
   */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="mt-2">
                                        <form className=' space-y-2'>
                                            <label htmlFor="">
                                                <span className="label-text">salary</span>
                                            </label>
                                            <input
                                                type='text'
                                                name='salary'
                                                id='text'
                                                defaultValue={item.salary}
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                            />
                                            <select onBlur={(e) => setmonth(e.target.value)} className="select select-secondary w-full">
                                                <option disabled selected>Select the Month</option>
                                                <option value="Jan">Jan</option>
                                                <option value="Feb">Feb</option>
                                                <option value="Mar">Mar</option>
                                                <option value="Apr">Apr</option>
                                                <option value="May">May</option>
                                                <option value="Jun">Jun</option>
                                                <option value="Jul">Jul</option>
                                                <option value="Sep">Sep</option>
                                                <option value="Oct">Oct</option>
                                                <option value="Nov">Nov</option>
                                                <option value="Dec">Dec</option>
                                            </select>
                                            <div>
                                                <label>
                                                    <span className="label-text">Year</span>
                                                </label>
                                                <input
                                                    type='text'
                                                    name='year'
                                                    id='year'
                                                    onBlur={(e) => setyear(e.target.value)}
                                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                                    data-temp-mail-org='0'
                                                />
                                            </div>

                                            <div className="flex justify-between items-center">
                                                {/* <button className='btn btn-secondary btn-outline'>Pay</button> */}

                                            </div>
                                        </form>
                                    </div>
                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm item={item} month={month} year={year} />
                                    </Elements>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    >
                                        close
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Modal;



