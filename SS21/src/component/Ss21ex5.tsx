function Ss21ex5() {
    return (
        <div className="relative w-80 h-40 bg-sky-200 rounded-lg p-4">
            <p className="text-sky-800 font-semibold">Relative parent</p>
            <div className="absolute bottom-2 left-2 bg-sky-500 text-white px-4 py-2 rounded-lg shadow">
                Absolute child
            </div>
        </div>
    );
}

export default Ss21ex5;
