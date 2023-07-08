export default function Home() {
    return (
        <div className="h-screen space-x-12 space-y-8">
            {/* Top section */}
            <div className="h-4/9 rounded-b-[24px] shadow bg-gradient-to-b from-indigo-600 to-indigo-700">
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="font-semibold text-lg text-gray-50/60 py-8">
                        Your&nbsp;Result
                    </p>

                    {/* Result */}
                    <div className="pb-8">
                        <span className="flex flex-col rounded-full p-8 px-10 items-center justify-center opacity-90 bg-gradient-to-b from-indigo-800 to-indigo-600">
                            <p className="text-white text-7xl font-extrabold">
                                76
                            </p>
                            <p className="font-bold text-gray-50/40">
                                of 100
                            </p>
                        </span>
                    </div>

                    <p className="font-semibold text-2xl text-white pb-2">
                        Great
                    </p>

                    <p className="px-16 text-center text-gray-300/70 pb-10 text-xl">
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </div>
            </div>

            {/* Bottom section */}
            <div className="flex justify-center pr-12">
                <div className="w-full">
                    <div className="h-5/9 text-xl font-semibold mb-8 text-gray-600">
                        Summary
                    </div>

                    {/* Breakdown */}
                    <div className="flex flex-col justify-center space-y-4 font-medium">
                        {/* Reaction */}
                        <span className="px-6 py-4 bg-red-50 rounded-lg text-red-500 w-full text-blur">
                            Reaction
                        </span>

                        {/* Memory */}
                        <span className="px-6 py-4 bg-yellow-50 rounded-lg text-yellow-500 w-full">
                            Memory
                        </span>

                        {/* Verbal */}
                        <span className="px-6 py-4 bg-green-50 rounded-lg text-green-500 w-full">
                            Verbal
                        </span>

                        {/* Visual */}
                        <span className="px-6 py-4 bg-blue-50 rounded-lg text-blue-500 w-full">
                            Visual
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
