import React, { useState } from "react";
import Carousel from "./Carousel";
import ExpectedOutcomes from "./Expected_Outcomes";

const MainPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
     <div className="w-full bg-gray-800 py-2 text-center overflow-hidden">
  <p className="text-sm sm:text-base md:text-lg font-semibold animate-marqueeLTR text-blue-400">
    Master Full Stack Development + AI Skills with Kodu Institute!
  </p>
</div>

<div className="text-center py-10 px-4 sm:px-6 md:px-8 lg:px-16 w-full max-w-5xl mx-auto">
  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 sm:mt-6 leading-snug sm:leading-tight">
    🚀 Become a High-Paid Full Stack Developer
  </h1>

  <p className="text-sm sm:text-lg md:text-xl font-light mt-3 sm:mt-4">
    🎯 Master Full Stack Development + AI Skills with Kodu Institute!
  </p>

  <button
    onClick={() => setIsFormOpen(true)}
    className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
  >
    Register Now
  </button>

  <h1 className="text-red-200 font-bold font-mono mt-6 sm:mt-10 text-base sm:text-lg md:text-xl">
    📆 Limited Seats – Enroll Now & Secure Your Future!
  </h1>
</div>

{isFormOpen && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
    <div className="bg-white/90 backdrop-blur-lg p-5 sm:p-8 rounded-2xl shadow-2xl w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative">
      <button
        onClick={() => setIsFormOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
      >
        &times;
      </button>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-5 md:mb-6">
        Register Now
      </h2>
      <form className="space-y-3 sm:space-y-4">
        <input type="text" placeholder="Full Name" className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        <input type="email" placeholder="E-mail" className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        <input type="number" placeholder="Phone Number" className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
        <select className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black">
          <option disabled selected>Select Course</option>
          <option>Full Stack Development</option>
          <option>AI & Machine Learning</option>
          <option>Data Science</option>
          <option>Cyber Security</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  </div>
)}


<div className="bg-gray-900 text-white p-5 sm:p-6 rounded-2xl shadow-lg max-w-[95%] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto w-full">
  <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-center bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 sm:p-4 md:p-5 rounded-xl shadow-lg tracking-wide uppercase w-full">
    🔥 Why Choose Kodu Institute?
  </h1>

  <br className="hidden sm:block"/><br className="hidden sm:block"/>
  
  <ul className="space-y-3 sm:space-y-4">
    {[
      "Learn from Industry Experts & Top Trainers",
      "Work on Live Projects – Gain Real-World Experience",
      "Job Assistance & Interview Preparation",
      "Fully AC & WiFi-Enabled Classrooms + Free Lab Access",
      "Personality Development (PD) Sessions to Boost Confidence",
    ].map((point, index) => (
      <li key={index} className="flex items-center text-sm sm:text-base md:text-lg text-red-400 font-semibold">
        ✅ <span className="ml-2">{point}</span>
      </li>
    ))}
  </ul>
</div>


<div className="mt-10 w-full max-w-[95%] sm:max-w-4xl lg:max-w-5xl px-4 mx-auto">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-center text-white mt-6 bg-gradient-to-r from-yellow-400 to-red-500 p-3 sm:p-4 rounded-lg shadow-md">
    What our learners say →
  </h1>

  <br className="hidden sm:block"/><br className="hidden sm:block"/>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {["JuMV8Zv58rs", "H1wJ65CHjHg", "lQ61Py-yK_g"].map((video, index) => (
      <iframe
        key={index}
        width="100%"
        height="180" // Adjusted for better fit on mobile
        src={`https://www.youtube.com/embed/${video}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-3xl w-full"
      ></iframe>
    ))}
  </div>
</div>

<br/><br/>

<h1 className="text-lg sm:text-2xl lg:text-[42px] text-white font-bold font-sans text-center">
  Curriculum Jo Banaye Apko Skill Ready
</h1>

<h1 className="text-sm sm:text-lg md:text-xl lg:text-[22px] text-white font-bold font-sans text-center mt-2">
  With new & updated modules!
</h1>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 sm:mt-10 px-4 w-full max-w-6xl mx-auto">
  {[
    "WordPress Website",
    "SEO",
    "Content and Copywriting",
    "Shopify and E-Commerce",
    "Google Ads",
    "Meta Ads",
    "Influencer Marketing",
    "Introduction to Affiliate Marketing",
  ].map((title, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center bg-teal-500 w-full min-h-[100px] sm:min-h-[120px] rounded-2xl shadow-lg transition-transform transform hover:scale-105 p-3 sm:p-4"
    >
      <h1 className="text-blue-700 font-extrabold text-center text-sm sm:text-base lg:text-lg">
        {title}
      </h1>
      <button className="text-white bg-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 mt-2 rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300 text-xs sm:text-sm md:text-base">
        Read More
      </button>
    </div>
  ))}
</div>


<br/><br/>
<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[52px] font-bold text-center text-gray-900 bg-gradient-to-r from-yellow-400 to-blue-500 p-4 sm:p-5 rounded-2xl shadow-2xl tracking-wide font-serif">
  Pleasure to Meet Few Known Faces →
</h1>

<br /> <br />
<div className="w-full max-w-5xl mx-auto px-4">
  <Carousel />
</div>

<br /> <br />
<h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-900 bg-gradient-to-r from-yellow-400 to-red-500 p-4 sm:p-5 rounded-2xl shadow-2xl tracking-wide font-serif">
  🎓 Experience Se Seekho, Sirf Theory Se Nahi!
</h1>

<br /> <br />
<ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg md:text-xl font-medium text-white bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg w-full max-w-3xl mx-auto">
  {[
    "Real-World Projects Se Practical Learning",
    "Step-by-Step Guidance By Industry Experts",
    "Hands-on Training from Basics to Advanced",
    "100% Job Placement Assistance",
    "1:1 Career Mentorship for Guaranteed Growth",
    "17+ Expert Trainers with Years of Experience",
  ].map((point, index) => (
    <li key={index} className="flex items-center gap-2 sm:gap-3">
      ✅ <span>{point}</span>
    </li>
  ))}
</ul>


<br/><br/>
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white bg-gradient-to-r from-purple-400 to-blue-500 p-4 rounded-xl shadow-lg tracking-wide uppercase">
  🚀 Kodu Trainers
</h1>

<div className="mt-10 flex flex-wrap justify-center gap-6 px-4">
  {[
    {
      img: "https://hongkongtesol.com/sites/default/files/styles/mobile_header_800x600/public/2024-05/become-a-trainer-800x600.jpg?h=827069f2&itok=zBfbQNVt",
      title: "17+ Years Experience",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRW4A7U_-p0YVaW4AXeq0LOqucj0ludkVVUQ&s",
      title: "8+ Years Experience",
    },
  ].map((trainer, index) => (
    <div
      key={index}
      className="bg-gray-800 p-5 sm:p-6 rounded-xl shadow-2xl w-full max-w-[90%] sm:max-w-[300px] md:max-w-sm flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
    >
      <img
        src={trainer.img}
        alt="Trainer"
        className="h-[180px] sm:h-[220px] md:h-[250px] w-full rounded-lg shadow-lg border-4 border-gray-700 object-cover"
      />
      <h1 className="text-base sm:text-lg md:text-xl font-bold text-white mt-4 bg-gradient-to-r from-yellow-400 to-red-500 p-3 rounded-lg shadow-md text-center">
        {trainer.title}
      </h1>
    </div>
  ))}
</div>



      <br/><br/>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-black text-center bg-gradient-to-r from-blue-400 to-purple-500 p-3 sm:p-4 rounded-xl shadow-lg">
  🌟 Master Full Stack, AI, WordPress & More!
</h1>

<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  <ExpectedOutcomes />
</div>

<footer className="bg-gray-900 text-white py-10 mt-10 px-4 sm:px-6 md:px-8 lg:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
    {/* About Section */}
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-yellow-400">About Kodu Institute</h2>
      <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
        Kodu Institute is a leading training center offering Full Stack Development & AI courses to help students upskill and get job-ready.
      </p>
    </div>
    
    {/* Quick Links */}
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-yellow-400">Quick Links</h2>
      <ul className="mt-3 space-y-2 text-gray-300 text-sm sm:text-base">
        {["Courses", "Admissions", "Contact Us", "FAQs"].map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-yellow-400 transition duration-300">{link}</a>
          </li>
        ))}
      </ul>
    </div>
    
    {/* Contact Section */}
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-yellow-400">Contact Us</h2>
      <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
        📍 Sector 15A, Kamairi Road, Hisar, Haryana <br/>
        📞 +91 9876543210 <br/>
        📧 info@koduinstitute.com
      </p>
    </div>

    {/* Social Media Links */}
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-yellow-400">Follow Us</h2>
      <div className="flex space-x-4 mt-3 text-lg sm:text-xl">
        {["facebook", "instagram", "linkedin", "twitter"].map((platform, index) => (
          <a key={index} href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">
            <i className={`fab fa-${platform}`}></i>
          </a>
        ))}
      </div>
    </div>
  </div>

  <div className="text-center text-gray-400 text-sm sm:text-base mt-10 border-t border-gray-700 pt-4">
    © {new Date().getFullYear()} Kodu Institute. All Rights Reserved.
  </div>
</footer>



    </div>
  );
};

export default MainPage;
