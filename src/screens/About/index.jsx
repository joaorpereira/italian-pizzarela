import React, { useRef } from "react";
import useObserver from "../../hooks/useObserver";

export const options = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const Sobre = () => {
  const domRef = useRef();

  const isVisible = useObserver({
    ref: domRef,
  });

  return (
    <section className="about__section" id="about">
      <div
        className={`about__container fade__in ${isVisible ? "appear" : ""}`}
        ref={domRef}
      >
        <h2>Sobre</h2>
        <div className="about__content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
