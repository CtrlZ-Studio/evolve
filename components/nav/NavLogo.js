import Link from 'next/link';

const NavLogo = () => {
  return (
    <div className="lg:w-2/5">
      <Link href="/">
        <a className="font-header text-gray-600 text-base lg:text-xl 2xl:text-2xl">
          EVOLVE
        </a>
      </Link>
    </div>
  );
};

export default NavLogo;
