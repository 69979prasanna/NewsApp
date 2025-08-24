import React, { Component } from 'react'
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container my-3" >
    <div className="accordion mx-2" id="accordionExample">
      <h1>📰 About NewsApp</h1>
       <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
   About
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
NewsApp is a modern, responsive, and user-friendly platform designed to keep you updated with the latest happenings around the globe. In today’s fast-moving world, staying informed is more important than ever, and NewsApp makes this effortless by delivering news in a clean, structured, and accessible way.

At its core, NewsApp is built using React.js and Bootstrap, ensuring both speed and simplicity. Every news story is presented in a card-based layout that highlights the headline, an engaging image, and a short description, making it easy to scan and decide what you want to read in detail. The consistent design ensures that whether you’re browsing on a large desktop screen or a small mobile device, the experience remains smooth and enjoyable.
    </div>
    </div>
    </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
     ✨ Key Features
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body ">
      Real-Time Updates: Get instant access to the latest news across various categories like technology, business, entertainment, health, sports, and more.

Responsive Design: Optimized for desktops, tablets, and smartphones, so you can read the news anytime, anywhere.

Clean User Interface: Minimal yet modern design that focuses on content, with distraction-free browsing.

Easy Navigation: Organized sections, search functionality (future scope), and pagination make it easy to explore endless news articles.

Uniform Layout: All cards are of equal size with consistent image formatting, giving the app a professional, polished look
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       🌍 Why NewsApp?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
   Unlike traditional news websites cluttered with ads and unnecessary information, NewsApp is designed with simplicity and speed in mind. It cuts through the noise and gives you what you need — the news itself. This makes it perfect for college students, professionals, and anyone who values time and clarity. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    🚀 Vision
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The vision behind NewsApp is to create a platform where information is fast, reliable, and beautifully presented. Over time, the goal is to expand the app with features such as category filters, dark mode, user personalization, and AI-driven recommendations — making it not just a news reader, but a smart news companion.
    </div>
    </div>
    </div>
    </div>
    </div>
      </div>
    )
  }
}
