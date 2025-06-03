import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function App(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';

  
    if (!document.head.querySelector(`link[href="${fontAwesomeLink.href}"]`)) {
      document.head.appendChild(fontAwesomeLink);
    }

    return () => {
      const existingLink = document.head.querySelector(`link[href="${fontAwesomeLink.href}"]`);
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount


  return(
    <div className="Body text-gray-950 scroll-smooth">
       <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex justify-between items-center p-4">
        <div>
          <span className="text-blue-700 text-4xl font-semibold">Job</span>
          <span className="text-blue-600 text-4xl font-bold">Palace</span>
        </div>
        <div className="Nav flex justify-between items-center gap-x-4 text-lg hidden md:flex">
          <a className="hover:text-blue-400 hover:font-bold" href="#post">About Us</a>
          <a className="hover:text-blue-400 hover:font-bold" href="#job">Jobs</a>
          <a className="hover:text-blue-400 hover:font-bold" href="#contact">Contact</a>
          <a className="hover:text-blue-400 hover:font-bold" href="#post">FAQ</a>
        </div>
        <div className="button flex justify-between">
          <div className="text-3xl mr-5 mt-1 md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </div>
          <a href="#post2"><button className="bg-blue-700 p-3 rounded-md cursor-pointer text-white hover:bg-blue-400">Post a Job</button></a>
        </div>
       </div>
       {/* Mobile Menu Overlay - conditionally rendered */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[76px] left-0 right-0 bg-white shadow-lg z-40 flex flex-col items-center py-4">
            <a className="block py-2 text-lg hover:text-blue-400 hover:font-bold" href="#post" onClick={toggleMobileMenu}>About Us</a>
            <a className="block py-2 text-lg hover:text-blue-400 hover:font-bold" href="#job" onClick={toggleMobileMenu}>Jobs</a>
            <a className="block py-2 text-lg hover:text-blue-400 hover:font-bold" href="#contact" onClick={toggleMobileMenu}>Contact</a>
            <a className="block py-2 text-lg hover:text-blue-400 hover:font-bold" href="#FAQ" onClick={toggleMobileMenu}>FAQ</a>
          </div>
        )}
       <div className="flex justify-between mt-10 md:mt-20 ml-6 flex-col md:flex-row">
        <div className="words md:pt-14 mb-5">
          <h1 className="text-4xl md:text-6xl font-semibold font-sans">Find Your Dream Job Here</h1>
          <p className="text-lg md:text-3xl font-sans mt-3">Explore top opportunities tailored for you in Kenya with Job Palace - your gateway to a fulfilling career.</p>
          <a href='#job'><button className="bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-md md:text-xl text-white mt-5 p-2 text-center">Explore Jobs Now</button></a>
        </div>
        <div className="image md:mt-2">
          <img className="rounded-md" src="public/tenweb_media_rmitpcaav.webp" alt="job pic"/>
        </div>
       </div>
       <div id="job" className="jobs m-4">
        <h1 className="text-blue-700 text-2xl font-semibold">Career Gateway</h1>
        <h1 className="text-5xl font-semibold mt-4">Find Your Next Role Today</h1>
        <p className="text-2xl text-gray-900 mt-4">Explore diverse opportunities across Kenya and discover your ideal career path with job palace's job listings.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-x-4 gap-y-4">
          <img className="rounded-md" src="public/1.jpg" alt="job 1"/>
          <img className="rounded-md" src="public/2.jpg" alt="job 2"/>
          <img className="rounded-md" src="public/3.jpg" alt="job 3"/>
          <img className="rounded-md" src="public/4.jpg" alt="job 4"/>
          <img className="rounded-md" src="public/5.jpg" alt="job 5"/>
          <img className="rounded-md" src="public/6.jpg" alt="job 6"/>
          <img className="rounded-md" src="public/7.jpg" alt="job 7"/>
          <img className="rounded-md" src="public/8.jpg" alt="job 8"/>
          <img className="rounded-md" src="public/9.jpg" alt="job 9"/>
          <img className="rounded-md" src="public/10.jpg" alt="job 10"/>
          <img className="rounded-md" src="public/11.jpg" alt="job 11"/>
          <img className="rounded-md" src="public/12.jpg" alt="job 12"/>
        </div>
        <h1 className="text-blue-700 text-5xl font-semibold mt-10">More Jobs...</h1>
        <div id="post1" className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-x-4 gap-y-4">
          <div className="bg-gray-200 p-2 rounded-md">
            <h1 className="text-2xl font-semibold">SITE  REPRESENTATIVE</h1>
            <p className="text-lg">Do you have experience in showing prospective clients around construction sites offplan arrangement/ready show houses? Possess excellent communication skills with an outgoing personality? If so, a construction and real estate agent is looking for you. Send only your Updated Curriculum Vitae to <span className="underline text-gray-700">0789903690</span>.</p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md">
            <h1 className="text-xl font-semibold">We are seeking finance interns.</h1>
            <p className="text-lg">Qualifications:</p>
            <ul className="list-disc text-lg ml-4">
              <li>Degree in Accounting /Finance (or related field)</li>
              <li>CPA certification (plus)</li>
            </ul>
            <p className="text-lg">The ideal candidate should be available to start immediately. A monthly stipend will be provided. Location: Kenya.Please send your CV and credentials to <a className="text-xl text-blue-500" href="hr@bidii.co.ke.">hr@bidii.co.ke</a></p>
          </div>
          <div className="bg-gray-200 p-2 rounded-md">
            <h1 className="font-semibold text-xl">Gahir Engineering Works Limited Hiring</h1>
            <p className="mt-2">Location : Nairobi</p>
            <p className="mt-2">Positions</p>
            <ul className="list-disc ml-4">
              <li>Plasma cutting technician</li>
              <li>Gas cutting technician</li>
              <li>MIG welding technician</li>
            </ul>
            <p className="mt-2">Deadline : 15th June, 2025</p>
            <p className="mt-2">How to Apply</p>
            <p className="mt-2">Drop your CV at Gahir Engineering Works located at Industrial Area, Pate Road, off Lunga Lunga Road</p>
          </div>
          <div id='post2' className="bg-gray-200 p-2 rounded-md">
            <p className="text-xl">Our firm is looking for an experienced litigation and conveyancing clerk preferably male. If you have anyone in mind let them send their Application and CV to</p>
            <a href="mmctworivers@mmclaw.org" className="text-blue-500 text-lg">mmctworivers@mmclaw.org</a>
          </div>
        </div>
       </div>
       <div id="post" className="mt-10">
        <h1 className="text-blue-700 text-4xl ml-4 font-semibold">How to Post a Job</h1>
        <p className="ml-4 mt-2 text-xl text-gray-900">Contact us through <span className="font-semibold">0759136851</span>,You can also reach us through Whatsapp or text message. Email us <span className="text-green-600">einstenmarto30@gmail.com</span></p>
       </div>
       <div id="About us" className="mt-10 ml-4">
        <h1 className="text-blue-700 font-semibold text-2xl">Discover Opportunities</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-x-4 gap-y-4">
           <div className="1">
            <h1 className="text-3xl font-bold text-gray-800">Wide Reach</h1>
            <p className="mt-4 text-lg">Connect with a vast Network of Job seekers across Kenya, ensuring your vacancies are seen by the right candidates.</p>
           </div>
           <div className="2">
            <h1 className="text-3xl font-bold text-gray-800">Easy Posting</h1>
            <p className="mt-4 text-lg">User friendly way to post your job vacancies quickly and efficiently,saving time and effort.</p>
           </div>
           <div className="1">
            <h1 className="text-3xl font-bold text-gray-800">Targeted Advertising</h1>
            <p className="mt-4 text-lg">Advanced targeting options help you reach specific demographics,ensuring your job posting attract the most suitable candidates.</p>
           </div>
        </div>
       </div>
       <div id="FAQ" className="mt-15 ml-4">
        <h1 className="text-blue-700 font-semibold text-4xl">Frequently Asked Questions</h1>
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mt-5">How do I contact support for Assistance?</h1>
          <p className="mt-2 text-xl">For support, contact us via email einstenmarto30@gmail.com or call our number 0759136851.</p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mt-5">Can my Job post be edited after going live?</h1>
          <p className="mt-2 text-xl">Yes you can reach us anytime to make changes on posts.</p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mt-5">Is there a fee for posting job vacancies?</h1>
          <p className="mt-2 text-xl">Yes, there are prices for posting job vacancies based on number of posts and duration for visibility</p>
        </div>
       </div>
       <div id="contact" className="mt-15 text-gray-300 text-center bg-gray-600 p-5 border-b border-gray-300">
        <h1 className="text-gray-300 text-3xl font-semibold">Contact Us Today</h1>
        <p className="mt-3 text-xl">Reach us out to Job Palace in Nairobi for inquiries or support regarding job postings.</p>
        <div className="mt-3 flex items-center justify-between ml-40 mr-45 md:ml-135 md:mr-143">
          <i class="fa-solid fa-phone"></i>
          <p>0759136851</p>
        </div>
        <div className="mt-2 flex items-center justify-between ml-40 mr-45 md:ml-135 md:mr-143 gap-x-3">
          <i class="fa-solid fa-envelope"></i>
          <p>einstenmarto30@gmail.com</p>
        </div>
        <div className="mt-2 flex items-center justify-between ml-40 mr-45 md:ml-135 md:mr-143 gap-x-3">
          <i class="fa-solid fa-location-dot"></i>
          <p>Komarock,Nairobi</p>
        </div>
       </div>
       <div className="text-gray-300 bg-gray-600 text-center text-lg p-4">
        <p>Copyright©2025 Einstein Dipondo. All rights reserved.</p>
       </div>
    </div>
  );
}