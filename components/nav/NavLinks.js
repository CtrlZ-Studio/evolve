import ActiveLink from 'components/nav/ActiveLink';

const NavLinks = ({ setToggleDrawer }) => {
  const links = [
    {
      slug: '/',
      method: 'setToggleDrawer(false)',
      label: '¿Qué es Evolve?',
    },
    {
      slug: '/catalogo',
      method: 'setToggleDrawer(false)',
      label: 'Catálogo',
    },
    {
      slug: '/comunidad',
      method: 'setToggleDrawer(false)',
      label: 'Comunidad',
    },
    {
      slug: '/contacto',
      method: 'setToggleDrawer(false)',
      label: 'Contacto',
    },
  ];

  return (
    <div className="hidden lg:flex lg:justify-between lg:w-3/5 text-gray-500 font-semibold">
      {links.map((link) => (
        <ActiveLink href={link.slug} key={link.slug}>
          <a
            className="hover:text-black tw-animation"
            onClick={() => {
              link.method;
            }}
          >
            {link.label}
          </a>
        </ActiveLink>
      ))}
    </div>
  );
};

export default NavLinks;
