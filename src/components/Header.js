export default function Header() {
    return (
        <header className="">
            <div className="px-6 py-12">
                <div className="flex flex-row items-center justify-evenly space-x-3">
                    <div>
                        <h1 className="font-black text-3xl text-white">Cyom</h1>
                    </div>
                    <div>
                        <a className="px-3 py-2 rounded-xl cursor-pointer text-black bg-white hover:bg-gray-100">Holaaaaa!!</a>
                    </div>
                </div>
            </div>
        </header>
    );
}