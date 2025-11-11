"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.scss";

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  {
    id: 1,
    label: "Email",
    icon: "/images/socialMedia/svg/Mail.svg",
    text: "info@cozech.com",
    link: "mailto:info@cozech.com",
  },
  {
    id: 2,
    label: "Phone",
    icon: "/images/socialMedia/svg/Phone.svg",
    text: "+91 8593978298",
    link: "tel:+918593978298",
  },
  {
    id: 3,
    label: "Location",
    icon: "/images/socialMedia/svg/Location.svg",
    text: "Kozhikode, Kerala, India",
    link: "https://www.google.com/maps?q=Kozhikode,+Kerala,+India",
  },
  {
    id: 4,
    label: "Branch Office",
    icon: "/images/socialMedia/svg/Location.svg",
    text: "Galway, Ireland",
    link: "https://www.google.com/maps?q=Galway,+Ireland",
  },
];

const Contact = () => {
  // track mount to avoid SSR/client mismatches
  const [isClient, setIsClient] = useState(false);

  const [formState, setFormState] = useState({
    name: { value: "", focused: false },
    email: { value: "", focused: false },
    phone: { value: "", focused: false },
    company: { value: "", focused: false },
    message: { value: "", focused: false },
  });

  const [buttonState, setButtonState] = useState("idle");

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactDetailsRef = useRef(null);
  const formDetailsRef = useRef(null);

  // mark as client on mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // run GSAP only after mount (when DOM is stable on client)
  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
          transformOrigin: "50% 50%",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transformOrigin: "50% 50%",
          duration: 1,
          ease: "power3.out",
        }
      );

      tl.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 40,
          rotateX: -90,
          transformOrigin: "50% 50%",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transformOrigin: "50% 50%",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

      tl.fromTo(
        contactDetailsRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.fromTo(
        formDetailsRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isClient]);

  const handleFocus = (field) => {
    setFormState((prev) => ({
      ...prev,
      [field]: { ...prev[field], focused: true },
    }));
  };

  const handleBlur = (field) => {
    setFormState((prev) => ({
      ...prev,
      [field]: { ...prev[field], focused: false },
    }));
  };

  const handleChange = (field, value) => {
    setFormState((prev) => ({
      ...prev,
      [field]: { ...prev[field], value },
    }));
  };

  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  const handleSubmit = async () => {
    setButtonState("submitted");

    const formData = new URLSearchParams({
      name: formState.name.value,
      email: formState.email.value,
      phone: formState.phone.value,
      company: formState.company.value,
      message: formState.message.value,
    });

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setFormState({
        name: { value: "", focused: false },
        email: { value: "", focused: false },
        phone: { value: "", focused: false },
        company: { value: "", focused: false },
        message: { value: "", focused: false },
      });

      setTimeout(() => setButtonState("idle"), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setButtonState("idle");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact w-full min-h-screen flex flex-col items-center justify-center"
    >
      <div className="contact-container flex flex-col gap-8 md:gap-16 justify-center items-center max-w-7xl w-full mx-auto">
        <div className="title-section text-center gap-3 md:gap-5 flex flex-col">
          <h2 ref={titleRef} className="title font-semibold" data-text="Get in Touch">
            Get in Touch
          </h2>
          <p ref={descriptionRef} className="description">
            Drop us a message — we&apos;ll take it from there.
          </p>
        </div>

        {/* form-section: we render the interactive content only on client mount to avoid hydration mismatch */}
        <div className="form-section flex flex-col items-center lg:flex-row gap-10 lg:gap-10 w-full">
          {/* Contact details: safe to render on SSR (static) */}
          <div ref={contactDetailsRef} className="contact-details flex flex-col gap-5 lg:gap-8 w-full lg:w-2/5">
            {contactItems.map(({ id, label, icon, text, link }) => (
              <div className="contact-item flex flex-col gap-2 lg:gap-4" key={id}>
                <div className="heading">{label}</div>
                <div className="details flex justify-between items-center">
                  <div className="content flex items-center gap-2">
                    <img className="icon w-5 h-5" src={icon} alt={label} />
                    <div className="text">{text}</div>
                  </div>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="button">
                    <img src="/images/socialMedia/svg/RightArrow.svg" alt="arrow" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Form details: render only after client mount to avoid hydration mismatch caused by extensions / DOM mutation */}
          <div
            ref={formDetailsRef}
            className="form-details w-full lg:w-3/5 flex flex-col items-center gap-4 lg:gap-6"
          >
            {!isClient ? (
              // Minimal deterministic placeholder while server/initial client HTML remains identical
              <div className="form-items-placeholder w-full" aria-hidden="true">
                <div style={{ height: 320 }} />
              </div>
            ) : (
              // Actual interactive form (renders only on client)
              <>
                <div className="form-items flex flex-col gap-7 md:gap-10 lg:gap-12 w-full">
                  <div className="items flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
                    <div
                      className={`item flex flex-col gap-2 w-full ${
                        formState.name.focused || formState.name.value ? "active" : ""
                      }`}
                    >
                      <div className="label">Name</div>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        value={formState.name.value}
                        onFocus={() => handleFocus("name")}
                        onBlur={() => handleBlur("name")}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                    </div>
                    <div
                      className={`item flex flex-col gap-2 w-full ${
                        formState.email.focused || formState.email.value ? "active" : ""
                      }`}
                    >
                      <div className="label">Email</div>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formState.email.value}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="items flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full">
                    <div
                      className={`item flex flex-col gap-2 w-full ${
                        formState.phone.focused || formState.phone.value ? "active" : ""
                      }`}
                    >
                      <div className="label">Phone Number</div>
                      <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={formState.phone.value}
                        onFocus={() => handleFocus("phone")}
                        onBlur={() => handleBlur("phone")}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                    <div
                      className={`item flex flex-col gap-2 w-full ${
                        formState.company.focused || formState.company.value ? "active" : ""
                      }`}
                    >
                      <div className="label">Company / Organization Name</div>
                      <input
                        type="text"
                        placeholder="Enter Your Organization Name"
                        name="company"
                        value={formState.company.value}
                        onFocus={() => handleFocus("company")}
                        onBlur={() => handleBlur("company")}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="items flex items-center md:gap-12 w-full">
                    <div
                      className={`item flex flex-col gap-2 w-full ${
                        formState.message.focused || formState.message.value ? "active" : ""
                      }`}
                    >
                      <div className="label">Message</div>
                      <textarea
                        placeholder="Enter Your Message Here"
                        name="message"
                        rows={5}
                        value={formState.message.value}
                        onFocus={() => handleFocus("message")}
                        onBlur={() => handleBlur("message")}
                        onChange={(e) => handleChange("message", e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="submit-button">
                  <button
                    className={`flex items-center gap-2 ${buttonState === "submitted" ? "active" : ""}`}
                    onClick={handleSubmit}
                  >
                    <p className="btn-text">{buttonState === "submitted" ? "Thanks" : "Send your Inquiry"}</p>
                    <div className="check-box">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                      </svg>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
