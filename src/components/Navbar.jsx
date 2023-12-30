import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/index.jsx";
import { logo, menu, close } from "../assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link
            to="/"
            className={"flex items-center gap-2"}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Jay Lin&nbsp;
            </p>
          </Link>
        </motion.div>
        <ul
          className={
            "list-non hidden sm:flex justify-between items-center gap-10"
          }
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={
                "text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              }
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a
                href={link.url || `#${link.id}`}
                target={link.url ? "_blank" : undefined}
                rel={link.url ? "noopener noreferrer" : undefined}
              >
                <motion.div whileHover={{ scale: 1.2 }}>{link.icon}</motion.div>
              </a>
            </li>
          ))}
        </ul>
        <div className={"sm:hidden flex flex-1 justify-between items-center"}>
          <motion.img
            src={toggle ? close : menu}
            alt={"menu"}
            className={
              "w-[28px] h-[28px] object-contain cursor-pointer absolute right-0 mr-5"
            }
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.2, rotate: 20 }}
          />
          <ul className={"list-non hidden sm:flex flex-row gap-10"}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a
                  href={link.url || `#${link.id}`}
                  target={link.url ? "_blank" : undefined}
                  rel={link.url ? "noopener noreferrer" : undefined}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    {link.icon}
                  </motion.div>
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-transparent absolute top-20 right-0 mx-4 my-2 min-w-[70px] z-10 rounded-xl justify-center`}
          >
            <ul
              className={"list-non flex justify-end item-start flex-col gap-4"}
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={"text-secondary cursor-pointer hover:text-white"}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a
                    href={link.url || `#${link.id}`}
                    target={link.url ? "_blank" : undefined}
                    rel={link.url ? "noopener noreferrer" : undefined}
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      {link.icon}
                    </motion.div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
