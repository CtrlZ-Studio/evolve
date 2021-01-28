import ActiveLink from 'components/nav/ActiveLink';
import { motion, AnimatePresence } from 'framer-motion';

import { drawerVariants } from 'utils/framer/variants';

import IconClose from 'components/icons/IconClose';

const MenuDrawer = ({ toggleDrawer, setToggleDrawer }) => {
  return (
    <>
      <AnimatePresence>
        {toggleDrawer && (
          <>
            <motion.main
              className="fixed top-0 left-0 flex flex-col justify-center h-screen w-screen px-6 z-100 overflow-hidden bg-gray-700"
              initial="initial"
              animate="animate"
              exit="exit"
              custom={toggleDrawer}
              variants={drawerVariants}
            >
              <header className="fixed top-0 left-0 right-0 flex items-center justify-end px-6 lg:px-8 h-12 lg:h-24 text-gray-100">
                <div onClick={() => setToggleDrawer(!toggleDrawer)}>
                  <button>
                    <IconClose />
                  </button>
                </div>
              </header>

              <nav>
                <ul className="flex flex-col justify-center space-y-12 h-2/3 text-gray-100 text-2xl uppercase">
                  <li>
                    <ActiveLink href="/">
                      <a onClick={() => setToggleDrawer(false)}>
                        ¿Qué es Evolve?
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/catalogo">
                      <a href="#" onClick={() => setToggleDrawer(false)}>
                        Catálogo
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/comunidad">
                      <a href="#" onClick={() => setToggleDrawer(false)}>
                        Comunidad
                      </a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/contacto">
                      <a href="#" onClick={() => setToggleDrawer(false)}>
                        Contacto
                      </a>
                    </ActiveLink>
                  </li>
                </ul>
              </nav>
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuDrawer;
