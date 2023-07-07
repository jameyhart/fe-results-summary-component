export default function Home() {
    return (
        <div className="h-screen">
            <div className="h-1/3 rounded-b-[24px] shadow bg-gradient-to-b from-indigo-600 to-indigo-700 py-20">
                <div className="flex flex-col items-center justify-center h-full pb-12">
                        <p className="py-8 font-semibold text-2xl text-indigo-100/70 leading-10">
                            Your Result
                        </p>
                        {/* Result */}
                        <span className="flex flex-col rounded-full p-8 px-10 items-center justify-center opacity-90 bg-gradient-to-b from-indigo-900 to-indigo-600">
                            <p className="text-white text-7xl font-extrabold">
                                76
                            </p>
                            <p className="font-bold text-indigo-100/70">
                                of 100
                            </p>
                        </span>
                </div>
            </div>
        </div>
    )
}
