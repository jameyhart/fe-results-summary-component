import { BsLightningCharge } from 'react-icons/bs';
import { LiaBrainSolid } from 'react-icons/lia';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { FiEye } from 'react-icons/fi';

export default function Home() {
    return (
        <div className='h-screen space-x-10 space-y-8 custom-blur'> {/* Now beginning to wonder if the blur wasn't intentional and was just poor quality design images? */}
            {/* Top section */}
            <div className='h-4/9 rounded-b-[24px] shadow bg-gradient-to-b from-indigo-600 to-indigo-700'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <p className='font-semibold text-lg text-gray-50/60 py-8'>
                        Your&nbsp;Result
                    </p>

                    {/* Result */}
                    <div className='pb-8'>
                        <span className='flex flex-col rounded-full p-8 px-10 items-center justify-center opacity-90 bg-gradient-to-b from-indigo-800 to-indigo-600'>
                            <p className='text-white text-7xl font-extrabold'>
                                76
                            </p>
                            <p className='font-bold text-gray-50/40'>
                                of 100
                            </p>
                        </span>
                    </div>

                    <p className='font-semibold text-2xl text-white pb-2'>
                        Great
                    </p>

                    <p className='px-16 text-center text-gray-300/70 pb-10 text-lg'>
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </div>
            </div>

            {/* Bottom section */}
            <div className='flex justify-center pr-12 pb-12'>
                <div className='w-full'>
                    <div className='h-5/9 text-xl mb-8 text-gray-700'>
                        Summary
                    </div>

                    {/* Breakdown */}
                    <div className='flex flex-col justify-center space-y-4 font-medium'>
                        {/* Reaction */}
                        <span className='flex px-4 py-4 pl-5 bg-red-50 rounded-lg text-red-400 w-full items-center justify-between'>
                            {/* Icon and name */}
                            <div className='flex'>
                                <BsLightningCharge
                                    className='text-lg mr-3'
                                    style={{ transform: 'rotate(-15deg) scaleX(1.1) scaleY(0.9)' }} // Couldn't achieve this with Tailwind classes?
                                />
                                <p className='custom-blur'>
                                    Reaction
                                </p>
                            </div>

                            {/* Score */}
                            <span className='flex font-bold tracking-widest text-gray-700'>
                                <p>
                                    80
                                </p>
                                <span className='flex text-gray-400 custom-blur'>
                                    <p className='text-xl'>
                                        /
                                    </p>
                                    <p>
                                        100
                                    </p>
                                </span>
                            </span>
                        </span>

                        {/* Memory */}
                        <span className='flex px-4 py-4 bg-yellow-50 rounded-lg text-yellow-500 w-full items-center justify-between'>
                            {/* Icon and name */}
                            <div className='flex'>
                                <LiaBrainSolid className='text-2xl mr-3' />
                                <p className='custom-blur'>
                                    Memory
                                </p>
                            </div>

                            {/* Score */}
                            <span className='flex font-bold tracking-widest text-gray-700'>
                                <p>
                                    92
                                </p>
                                <span className='flex text-gray-400 custom-blur'>
                                    <p className='text-xl'>
                                        /
                                    </p>
                                    <p>
                                        100
                                    </p>
                                </span>
                            </span>
                        </span>

                        {/* Verbal */}
                        <span className='flex px-4 py-4 bg-green-50 rounded-lg text-green-500 w-full items-center justify-between'>
                            {/* Icon and name */}
                            <div className='flex'>
                                <div className='relative custom-blur'>
                                    <IoChatbubbleOutline className='text-2xl mr-3' />
                                    {/* Horizontal line */}
                                    <span className='absolute top-1/2 left-1/2 transform -translate-x-[9px] -translate-y-1/2 bg-green-500 h-0.5 w-1.5' />
                                </div>
                                <div>
                                    <p className='custom-blur'>
                                        Verbal
                                    </p>
                                </div>
                            </div>

                            {/* Score */}
                            <span className='flex font-bold tracking-widest text-gray-700 pt-1.5'>
                                <p>
                                    61
                                </p>
                                <span className='flex text-gray-400 custom-blur'>
                                    <p className='text-xl'>
                                        /
                                    </p>
                                    <p>
                                        100
                                    </p>
                                </span>
                            </span>
                        </span>

                        {/* Visual */}
                        <span className='flex px-5 py-4 bg-indigo-50 rounded-lg text-blue-800 w-full items-center justify-between'>
                            {/* Icon and name */}
                            <div className='flex pt-0.5 custom-blur'>
                                <FiEye
                                    className='text-lg mr-3'
                                />
                                <p>
                                    Visual
                                </p>
                            </div>

                            {/* Score */}
                            <span className='flex font-bold tracking-widest text-gray-700 pt-1.5'>
                                <p>
                                    72
                                </p>
                                <span className='flex text-gray-400 custom-blur'>
                                    <p className='text-xl'>
                                        /
                                    </p>
                                    <p>
                                        100
                                    </p>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
