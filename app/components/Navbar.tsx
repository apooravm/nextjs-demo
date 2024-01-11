import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-16 font-semibold text-3xl border-b-4 min-h-20 bg-white">
      <Link className="navbar-link" href="/">Home</Link>
      <Link className="navbar-link" href="/notes">Notes</Link>
      <Link className="navbar-link" href="/form">Form</Link>
    </div>
  );
};

export default Navbar;
