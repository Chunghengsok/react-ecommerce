function Contact() {
  return (
    <div className="max-w-[90%] lg:max-w-3xl mx-auto my-10 font-jost">
      <form className="w-full shadow-md p-4">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <div className="mb-3">
          <label>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all  ease-in-out"
            placeholder="Enter your Name"
          />
        </div>
        <div className="mb-3">
          <label>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all  ease-in-out"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div className="mb-3">
          <label>
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            type="text"
            className="w-full p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all  ease-in-out h-28"
            placeholder="Type Your Message here"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
