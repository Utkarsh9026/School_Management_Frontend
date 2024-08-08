import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <h1 className="relative z-10 text-white sm:text-4xl font-bold shadow-lg bg-opacity-50 p-2 rounded line-clamp-3 text-2xl mb-10">
        Welcome to School Management
      </h1>
      <Link
        href="/addSchool"
        className="relative z-10 px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 shadow-lg transition duration-300"
      >
        Add School Here
      </Link>
    </div>
  );
}
