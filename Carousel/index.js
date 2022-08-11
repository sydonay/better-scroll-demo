import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import { useEffect, useRef } from "react";

BScroll.use(ObserveDOM);

const Carousel = ({ idPrefix, activeIndex = 0, className, children }) => {
  const carouselContentRef = useRef(null);
  const BScrollRef = useRef(null);

  useEffect(() => {
    if (idPrefix && !!children && activeIndex) {
      const targetElement = document.getElementById(
        `${idPrefix}-${activeIndex}`
      );
      if (targetElement && BScrollRef.current) {
        BScrollRef.current.scrollToElement(targetElement, 500, true);
      }
    }
  }, [activeIndex, children, idPrefix]);

  useEffect(() => {
    if (carouselContentRef.current) {
      BScrollRef.current = new BScroll(carouselContentRef.current, {
        scrollX: true,
        probeType: 3,
        click: false,
        useTransition: false,
        eventPassthrough: "vertical",
        observeDOM: true,
      });
    }
  }, []);

  if (!children) return null;

  return (
    <div
      className="w-full box-border relative whitespace-nowrap overflow-hidden"
      style={{
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
      ref={carouselContentRef}
    >
      <div
        className={`overflow-x-auto touch-auto inline-block ${className}`}
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          touchAction: "auto",
          display: "inline-block",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export { Carousel };
