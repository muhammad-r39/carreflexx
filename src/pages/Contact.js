import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3 sec
    }
  };

  return (
    <main>
      <section className=" md:pt-[100px] pb-[80px] md:pb-[200px]">
        <div className="w-[1012px] max-w-full mx-auto px-[30px] pt-[60px] pb-10 md:pb-20">
          <h1 className="font-montserrat text-[28px] sm:text-[38.28px]">
            Contact Us
          </h1>
          <p className="text-[1.5rem] sm:text-[1.8rem] font-inter">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vel
            optio perferendis dolores repellendus sed, in laudantium accusamus,
            perspiciatis veritatis natus iusto corporis incidunt. Quam sapiente
            sunt vel officia ducimus!
          </p>
        </div>
        <div className="relative w-[870px] max-w-full px-[30px] mx-auto text-center">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}

            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded"
              rows="5"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}

            <button
              type="submit"
              className="bg-[#6AC680] text-white py-3 rounded hover:bg-[#40bb5d] transition"
            >
              Submit
            </button>

            {isSubmitted && (
              <p className="text-green-500 mt-3">
                Form submitted successfully!
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
