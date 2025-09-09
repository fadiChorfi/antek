"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "/slideshow-1.jpg",
    title: "Your One-Stop Source For All",
    subtitle: "Equipment Rental Needs",
    description: "Top-Of-The-Line Equipment Ready At Flexible Rates Around",
  },
  {
    id: 2,
    image: "/slideshow-2.jpg",
    title: "Professional Equipment Solutions",
    subtitle: "For Every Project",
    description: "Quality Construction & Industrial Equipment Available Now",
  },
];

function Slide() {
  const slideshowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize UIKit slideshow when component mounts
    if (typeof window !== "undefined" && window.UIkit && slideshowRef.current) {
      window.UIkit.slideshow(slideshowRef.current, {
        animation: "fade",
        autoplay: true,
        autoplayInterval: 5000,
        pauseOnHover: false,
        finite: false,
      });
    }
  }, []);

  return (
    <div className="section-slideshow  ">
      <div
        ref={slideshowRef}
        className="uk-position-relative uk-light "
        tabIndex={-1}
        data-uk-slideshow="animation: fade; min-height: 400; max-height: 700; autoplay: true; autoplay-interval: 5000"
      >
        <ul className="uk-slideshow-items ">
          {slides.map((slide) => (
            <li key={slide.id} className="slideshow-item">
              <div
                className="uk-cover-container uk-height-viewport"
                style={{ backgroundImage: `url('${slide.image}')` }}
                data-uk-cover
              >
                <div className="slideshow-item__content">
                  <div className="uk-position-center uk-position-small uk-text-center">
                    {/* Header Icons with Parallax */}
                    <div
                      className="header-icons flex justify-center items-center gap-8 mb-8"
                      data-uk-slideshow-parallax="x: -200,200"
                    >
                      <span className=" flex items-center justify-center">
                        <Image
                          src="/slides/ico-slideshow-1.svg"
                          alt="Equipment Icon"
                          width={55}
                          height={55}
                          className="filter brightness-0 invert"
                        />
                      </span>
                      <span className="flex items-center justify-center">
                        <Image
                          src="/slides/ico-slideshow-2.svg"
                          alt="Equipment Icon"
                          width={55}
                          height={55}
                          className="filter brightness-0 invert"
                        />
                      </span>
                      <span className=" flex items-center justify-center">
                        <Image
                          src="/slides/ico-slideshow-3.svg"
                          alt="Equipment Icon"
                          width={55}
                          height={55}
                          className="filter brightness-0 invert"
                        />
                      </span>
                    </div>

                    {/* Decorative Element */}
                    <div className="mb-6">
                      <Image
                        src="/decor-title-2.svg"
                        alt="lines"
                        width={64}
                        height={64}
                        className="mx-auto"
                      />
                    </div>

                    {/* Description with Parallax */}
                    <p
                      className="slideshow-item__desc text-white text-lg font-medium mb-8 max-w-2xl mx-auto"
                      data-uk-slideshow-parallax="x: 200,-200"
                    >
                      {slide.description}
                    </p>

                    {/* Title with Parallax */}
                    <h1
                      className="slide-title slideshow-item__title text-white font-bold leading-tight relative after:block after:mt-8 after:mx-auto after:bg-[url('/decor-lines.svg')] after:bg-center after:bg-no-repeat after:content-['']"
                      data-uk-slideshow-parallax="x: -300,300"
                    >
                      {slide.title}
                      <br />
                      {slide.subtitle}
                    </h1>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>{" "}
        {/* Navigation Arrows - Hidden on mobile, visible on medium screens and up */}
        <div className="uk-visible@m">
          <a
            className="uk-position-center-left uk-position-small"
            href="#"
            title="Previous slide"
            aria-label="Previous slide"
            data-uk-slidenav-previous
            data-uk-slideshow-item="previous"
          ></a>
          <a
            className="uk-position-center-right uk-position-small"
            href="#"
            title="Next slide"
            aria-label="Next slide"
            data-uk-slidenav-next
            data-uk-slideshow-item="next"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default Slide;
