export default function Home() {
    return (
        <div className="h-screen">
            {/* Top section */}
            <div className="h-4/9 rounded-b-[24px] shadow bg-gradient-to-b from-indigo-600 to-indigo-700">
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="font-semibold text-lg text-gray-50/60 py-8">
                        Your&nbsp;Result
                    </p>

                    {/* Result */}
                    <div className="pb-8">
                        <span className="flex flex-col rounded-full p-8 px-10 items-center justify-center opacity-90 bg-gradient-to-b from-indigo-900 to-indigo-600">
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

                    <p className="px-14 text-center font-semibold text-gray-300/70 pb-10">
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </div>
            </div>

            {/* Bottom section */}
            {/* TODO */}
        </div>
    );
}
