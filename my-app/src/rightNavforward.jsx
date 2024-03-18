import { useLayoutEffect, useState } from "react";
import clsx from "clsx";
import "./style.css";
import Md1 from "./mardown_loader";

// helpers
const capitalize = (text) => text.charAt(0).toUpperCase() + text.substr(1);

const clamp = (value) => Math.max(0, value);

const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

// hooks
const useScrollspy = (ids, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    console.log("called");
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          console.log(
            "rect",
            rect.top,
            rect.bottom,
            rect.height,
            scroll,
            offset
          );

          const top = clamp(rect.top + scroll);
          const bottom = clamp(rect.bottom + scroll);

          console.log(id, top, bottom);
          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

// components
export default function App() {
  const ids = ["Picture", "Table", "Text"];
  const activeId = useScrollspy(ids, 54); // 54 is navigation height

  return (
    <>
      {/* <Md1 fileName="Ellipsis.md" /> */}

      <header className="header">
        <nav>
          <div>
            <ul className="menu">
              {ids.map((id) => (
                <li key={`menu-item-${id}`} className="menu-item">
                  <span
                    className={clsx(
                      "menu-link",
                      "pointer",
                      id === activeId && "menu-link-active"
                    )}>
                    &gt;
                  </span>
                  <a
                    href={`#${id}`}
                    className={clsx("menu-link", {
                      "menu-link-active": id === activeId,
                    })}>
                    {capitalize(id)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Md1 fileName="Forward.md" />
        {/* <Md1 fileName="Forward.md" />
        <Md1 fileName="Hamburger.md" />
        <Md1 fileName="Link_filter.md" />     */}
        {/* <Md1 fileName="Ellipsis.md" /> */}
        {/* {ids.map((id) => (
          <section key={`section-${id}`} id={id} className="section">
          
            {capitalize(id)}
          </section>
        ))} */}
      </main>
    </>
  );
}
