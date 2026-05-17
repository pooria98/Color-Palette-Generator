import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ChevronDown from "../icons/ChevronDown";
import useStore from "../store";

gsap.registerPlugin(useGSAP);

const options = [
  "analogous",
  "complementary",
  "triad",
  "square",
  "shades",
  "tones",
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { method, setMethod } = useStore();

  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const itemRefs = useRef([]);
  const tlRef = useRef(null);

  useGSAP(
    () => {
      tlRef.current = gsap.timeline({ paused: true });

      tlRef.current
        .set(menuRef.current, { display: "block" })
        .fromTo(
          menuRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.15, ease: "power2.out" },
        )
        .fromTo(
          itemRefs.current,
          { autoAlpha: 0, y: -8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.18,
            stagger: 0.06,
            ease: "power2.out",
          },
          "<0.03",
        );
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (!tlRef.current) return;

    if (isOpen) {
      tlRef.current.play(0);
    } else {
      tlRef.current.reverse();
    }
  }, [isOpen]);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (!isOpen) return;

      const target = e.target;
      const menu = menuRef.current;
      const button = buttonRef.current;

      if (
        menu &&
        !menu.contains(target) &&
        button &&
        !button.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (value) => {
    setMethod(value);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", zIndex: 1000, display: "inline-block" }}
    >
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
        className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-md cursor-pointer hover:border-neutral-500 transition-all font-semibold"
      >
        Method: {method}
        <ChevronDown width={16} />
      </button>

      <div
        ref={menuRef}
        id="dropdown-menu"
        role="menu"
        style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: 0,
          right: 0,
          minWidth: 180,
          padding: 8,
          borderRadius: 12,
          background: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          display: "none",
          overflow: "hidden",
        }}
      >
        {options.map((option, index) => {
          const isSelected = option === method;

          return (
            <button
              key={option}
              ref={(el) => {
                if (el) itemRefs.current[index] = el;
              }}
              role="menuitem"
              onClick={() => handleSelect(option)}
              style={{
                display: "block",
                width: "100%",
                padding: "10px 12px",
                border: "none",
                background: isSelected ? "#e8f0ff" : "transparent",
                color: isSelected ? "#2457ff" : "#111",
                textAlign: "left",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
