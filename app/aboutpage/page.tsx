import Link from "next/link";

export default function Home() {
    return (
        <div className="flex justify-center items-center mt-5">
            <Link href="/aboutpage/KwakDoYoung" className="px-6 py-3 bg-gradient-to-br from-blue-900 via-sky-200 to-cyan-500  text-orange-600 rounded-lg">
                KwakDoYoung
            </Link>
            <Link href="/aboutpage/ParkJuHyun" className="px-6 py-3 bg-gradient-to-br from-violet-500 via-pink-950 to-zinc-500 text-cyan-300 rounded-lg ml-4">
                ParkJuHyun
            </Link>
            <Link href="/aboutpage/user3" className="px-6 py-3 bg-gradient-to-br from-green-500 via-cyan-700 to-yellow-400 text-purple-700 rounded-lg ml-4">
                user3
            </Link>
        </div>
    );
}
