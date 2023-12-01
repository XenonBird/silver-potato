import Link from 'next/link';

const HeaderClean = () => {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-md navbar bg-base-100">
        <div className="navbar-start">
          {/* <button className="btn btn-ghost btn-circle">
            <i className="fi fi-rr-bars-sort"></i>
          </button> */}
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost text-xl">
            BrainBomb
          </Link>
        </div>
        <div className="navbar-end">
          {/* <button className="btn btn-ghost btn-circle">
            <i className="fi fi-rr-search"></i>
          </button>
          <button className="btn btn-ghost btn-circle">
            <i className="fi fi-rr-bell"></i>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderClean;
