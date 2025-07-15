import React, { useState } from "react";
import Contact_img from "../assets/contack_bg_img.webp";
const Contack = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setSubmitStatus("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_5jsk2eq",
            template_id: "template_zf89xxs",
            user_id: "M-M0CncLk_IaL9HvX",
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              phone: formData.phone,
              message: formData.message,
              to_email: "pratik.dhere05@gmail.com",
            },
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="container mx-auto flex items-center justify-center w-full h-full ">
      <div className="max-w-4xl flex flex-col md:gap-10 gap-4">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl text-black md:text-3xl font-heading font-semibold ">
            Contact Me
          </h1>
          <p className="text-sm text-black font-paragraph font-medium ">
            I'm a Full Stack MERN Developer & Freelance Web Expert helping
            businesses build fast, scalable, and beautiful web solutions.
            Whether you need a landing page, a custom web app, or want to
            collaborate on a project — feel free to drop a message!
          </p>
        </div>
        <form className="rounded-2xl">
          <div className="flex items-start flex-col md:flex-row gap-8 w-full">
            <div className="hidden md:block">
              <img src={Contact_img} alt="" className="rounded-xl " />
            </div>
            <div className="flex flex-col justify-between gap-4 md:gap-8 w-full h-full">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col md:gap-2 gap-1">
                  <label
                    htmlFor="name"
                    className="md:text-base text-sm font-heading font-semibold "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="enter your name "
                    className="py-2 px-3 border border-blue-100 outline-none bg-gray-50 rounded-sm md:text-base text-sm text-black font-heading"
                  />
                </div>
                <div className="flex flex-col md:gap-2 gap-1">
                  <label
                    htmlFor="email"
                    className="md:text-base text-sm font-heading font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="enter your email"
                    className="py-2 px-3 outline-none border border-blue-100 bg-gray-50 rounded-sm md:text-base text-sm text-black font-heading"
                  />
                </div>
                <div className="flex flex-col md:gap-2 gap-1">
                  <label
                    htmlFor="phone"
                    className="md:text-base text-sm font-heading font-semibold "
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="enter your phone number "
                    className="py-2 px-3 outline-none border border-blue-100 bg-gray-50 rounded-sm md:text-base text-sm text-black font-heading"
                  />
                </div>
                <div className="flex flex-col md:gap-2 gap-1">
                  {" "}
                  <label
                    htmlFor="textarea"
                    className="md:text-base text-sm font-heading font-semibold "
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="resize-none md:h-40 h-20 py-2 border border-blue-100 px-3 outline-none bg-gray-50 rounded-sm md:text-base text-sm text-black font-heading"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`rounded-sm w-fit font-heading border border-primaryColor text-sm font-semibold outline-none px-6 py-2 rounded${
                    isSubmitting
                      ? "border-gray-400 text-gray-400 cursor-not-allowed"
                      : "border-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
          {submitStatus === "success" && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              Failed to send message. Please try again or contact me directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contack;
