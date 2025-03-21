import { Drawer } from "antd";
import { useState } from "react";

export const DrawerMenu = (param: { isStaticLogo: boolean }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: "ENVÍANOS TU CORTOMETRAJE", href: "/cortometraje" },
    { text: "PROGRAMACIÓN", href: "#programacion" }, // Cambiado de "/#programacion" a "#programacion"
    { text: "ENTRADAS ANTICIPADAS", href: "#" },
    { text: "QUÉ ES LIMADOCS", href: "#" },
    { text: "SÉ PARTE DEL EQUIPO", href: "#" },
    { text: "JURADOS DE LA 1º EDICIÓN", href: "/jurados" },
    { text: "PREMIOS", href: "/premios" },
    { text: "EQUIPO", href: "#" },
    { text: "CÓMO APOYAR / DONAR", href: "#" },
    { text: "SEDES Y ALIANZAS", href: "#" },
  ];

  return (
    <>
      <button
        onClick={showDrawer}
        className={`${param.isStaticLogo ? "text-custom-yellow2" : "text-black"} ${param.isStaticLogo ? "hover:text-[#8B6EA8]" : "hover:text-purple-900"
          } transition-colors duration-300 flex items-center gap-2 cursor-pointer`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 md:w-10 h-auto"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <span className="text-lg md:text-3xl">MENÚ</span>
      </button>

      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key="left"
        footer={
          <footer className="py-5 px-6 flex justify-between items-center w-full font-apercu-mono">
            <a
              href="#"
              className="border-2 border-black text-sm rounded-full px-6 py-3 uppercase font-medium
                        transition-all duration-300
                        hover:bg-black hover:text-[#8B6EA8]
                        hover:shadow-lg
                        transform hover:scale-105
                        active:scale-95
                        text-center
                        md:text-left"
            >
              <span className="text-black">INSCRIPCIONES</span>
            </a>

            <button
              className="text-sm rounded-full uppercase font-medium
                        transition-all duration-300
                        cursor-pointer
                        transform hover:scale-110
                        active:scale-95
                        text-center
                        md:text-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37"
                />
              </svg>
            </button>
          </footer>
        }
        styles={{
          body: {
            backgroundColor: "#f5f375",
            padding: 0,
            position: "relative",
          },
          footer: {
            backgroundColor: "#f5f375",
            padding: 0,
            position: "relative",
          },
        }}
      >
        <section className="font-apercu-mono">
          <div className="flex justify-between items-center py-10 px-7">
            <img src="/logo_menu_sidebar.png" alt="logo" />
            <button
              onClick={onClose}
              className="text-[#191718] hover:text-[#8B6EA8] transition-colors duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="m7.757 16.243l8.486-8.486m0 8.486L7.757 7.757M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
                />
              </svg>
            </button>
          </div>

          <ul className="divide-black divide-y">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 sm:py-3">
                <a
                  href={item.href}
                  className="group font-medium uppercase flex justify-between px-8 items-center py-2 text-sm"
                  onClick={() => {
                    if (item.href.startsWith("#")) {
                      onClose();
                    }
                  }}
                >
                  <span className="text-custom-black">{item.text}</span>
                  <img
                    src="/flecha-icon.png"
                    alt="flecha"
                    className="w-6 sm:w-8 group-hover:animate-shake group-hover:animate-infinite"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Drawer>
    </>
  );
};