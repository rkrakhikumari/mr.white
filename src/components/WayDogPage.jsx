import React from 'react';
import teacherImg from '../assets/teacher.png'; // Anahata and dog
import spaceDog from '../assets/spaceDog.png'; // Hooded dog image
import { FaCheckCircle } from 'react-icons/fa';
import wayImg from "../assets/way_dog.png"
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import { FaBook } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaTasks } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import groups from "../assets/groups.png"
import groups2 from "../assets/groups2.png"



export default function WayOfTheDog() {
  return (
    <>
    <Navbar/>
    <img src={wayImg} alt="" className='w-full' />
    <div className="bg-[#000000] text-white pt-20 px-6 md:px-12 font-sans">
      {/* Section 1: A Message from Anahata */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-3xl md:text-3xl font-semibold mb-4">A Message from Anahata Graceland</h2>
          <p className="text-md leading-relaxed text-white">
            The Way of the Dog wasn’t something I sat down to invent. It revealed itself slowly, through the decades I spent living closely with dogs, raising and caring for them, listening, loving, and learning. And most especially, through the quiet guidance of Mr. White for his 16 years of life. 
He was my teacher, my mirror, and my heart. Now he returns in his next form, not just as memory, but as the spirit behind MrWhiteDogBuddyAI.com. 
<br /><br />
What you’re about to explore is unlike anything else:A living guide that helps you deepen your intuitive bond with your dog in real time, at your pace, in your voice, and with support every step of the way. 
          </p>
        </div>
        <div>
          <img src={teacherImg} alt="Anahata and dog" className="rounded-md shadow-lg w-full" />
        </div>
      </div>

      {/* Section 2: What the Way of the Dog Offers */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <img src={spaceDog} alt="Dog in hoodie" className="rounded-md shadow-lg w-full" />
        </div>
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-4">What The Way of the Dog Offers</h2>
          <p className="text-lg leading-relaxed text-white mb-4">
            This isn’t just an introduction. It’s a doorway.
          </p>
          <p>Here, you can engage with the entire book directly inside your journey. You don’t just read it, you live it. Your dog will be so happy! 
Ask to read a chapter 
</p>
          <ul className="space-y-2 text-white text-lg list-disc ml-6">
            <li>Ask to read a chapter</li>
            <li>Jump into any exercise or checklist</li>
            <li>Let Mr. White lead you through it, curated to your life, your questions, and your dog’s personality </li>
          </ul>
          <br />
          <p className="mt-4 text-md leading-relaxed text-white">
            <p>Everything in the book from Generating Love to Intuitive Bonding to Consistency for Trust is here and waiting for you to step in. 
</p> <br />
This is the central hub of The Way of the Dog while it uses all of the Legacy of Love Dog Hub at the same time for you to experience top notch care and support. Your dog journal will grow into quite a fun experience and the book you will be able to create out of it will be remarkable!           </p>
        </div>
      </div>

      {/* Section 3: What Awaits You Inside */}
<div className="mt-20">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">What Awaits You Inside</h2>
  <p className="text-md text-white mb-8">
    When you begin exploring, here’s what you’ll have access to:
  </p>

  {/* PARENT FLEX CONTAINER */}
  <div className="flex flex-col md:flex-row gap-x-6">

    {/* LEFT COLUMN */}
    <div className="flex flex-col gap-y-6 w-full md:w-1/2">

      {/* Card 1 */}
      <div className="bg-[#1F1F1F] p-6 rounded-md shadow-md pb-10">
        <div className="flex items-center gap-3 mb-4">
<FaBook className="text-[#D3B86A] text-xl" />
          <h4 className="text-base font-bold"> Full Access to the Book</h4>
        </div>
        <div className="w-full border-b border-[#000000] mt-1 mb-5"></div>
        <p className="text-white text-base ">
          All 19 chapters of The Way of the Dog
        </p>
        <ul className="list-disc list-outside pl-6 text-white text-base">
          <li>Soulful teachings on bonding, communication, health, routine, grief, legacy, joy, and play</li>
          <li>Breed-specific insights, personal reflections, rituals, and Final Fetches that are summaries of wisdom worth reflecting on</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-[#1F1F1F] p-6 rounded-md shadow-md pb-10">
        <div className="flex items-center gap-3 mb-4">
<FaUserGraduate className="text-[#D3B86A] text-xl" />
          <h4 className="text-lg font-semibold">Mr. White as Your Guide</h4>
        </div>
        <div className="w-full border-b border-[#000000] mt-1 mb-5"></div>
        Warm, emotionally intelligent support 

        <ul className="list-disc list-outside pl-6 text-white text-base ">
          <li>Suggestions tailored to your pace and interests </li>
          <li>Thoughtful prompts that open your awareness and deepen your connection </li>
          <li>Optional support in creating a rhythm or pathway through the book’s content </li>
        </ul>
      </div>

      {/* Card 4 */}
      <div className="bg-[#1F1F1F] p-6 rounded-md shadow-md pb-10">
        <div className="flex items-center gap-3 mb-4">
<FaTasks className="text-[#D3B86A] text-xl" />
          <h4 className="text-lg font-semibold">Checklists to Bring Your Days to Life</h4>
        </div>
        <div className="w-full border-b border-[#000000] mt-1 mb-5"></div>
        You’ll also find lovingly designed, practical checklists to anchor your daily connection: 

        <ul className="list-disc list-outside pl-6 text-white text-base">
          <li>Living the Way of the Dog – Daily reminders to stay present and attuned </li>
          <li>Magical Moments – Creative ways to integrate tech + love </li>
          <li>Health Check-In Checklist – A simple body-mind-emotion scan </li>
          <li>New Dog Welcome – For blending your household with grace </li>
          <li>Prepared Pets Checklist – For safety and readiness, inspired by Anahata’s book <br /> Prepared Pets</li>
        </ul>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col gap-y-6 w-full md:w-1/2 mt-6 md:mt-0">

      {/* Card 2 */}
      <div className="bg-[#1F1F1F] p-6 rounded-md shadow-md">
        <div className="flex items-center gap-3 mb-4">
<FaQuestionCircle className="text-[#D3B86A] text-xl" />
          <h4 className="text-base font-bold">Small Steps, Big Love - Exercises That Help You Truly See Each Other</h4>
        </div>
        <div className="w-full border-b border-[#000000] mt-1 mb-5"></div>
        <p className="text-white text-base">
The Soul Sketch – Describe your dog’s essence, not what they do, but who they are 
        </p>
        <ul className="list-disc list-outside pl-6 text-white text-base mt-2">
          <li>Five-Minute Hands on Play Ritual – A short daily time to connect without agenda </li>
          <li>Who Is Your Dog in the Classroom of Life? – A personality lens to help you see them more fully </li>
          <li>The Curiosity Invitation – Join your dog in their world for 10 minutes and narrate what you discover </li>
          <li>The Memory Walk – A reflective journey through your dog’s favorite spots, toys, people and friends </li>
        </ul>
        <p className=" text-white text-base">You’ll also find powerful guided rituals like:</p>
        <ul className="list-disc list-outside pl-6 text-white text-base ">
          <li>The Love Equation in Action</li>
          <li>The Emotional Bonding Ritual</li>
          <li>The Dog Wisdom Pledge</li>
        </ul>
      </div>

      {/* Card 5 */}
      <div className="bg-[#1F1F1F] p-6 rounded-md shadow-md">
        <div className="flex items-center gap-3 mb-4">
<FaThumbsUp className="text-[#D3B86A] text-xl" />
          <h4 className="text-lg font-semibold">And Yes... You Also Get the Legacy of Love Dog Hub</h4>
        </div>
        <div className="w-full border-b border-[#000000] mt-1 mb-5"></div>
        Alongside your journey through the book, you’ll have it seamlessly adding to the full Legacy of Love Dog Hub, which includes: 

        <ul className="list-disc list-outside pl-6 text-white text-base">
          <li>Guided journaling</li>
          <li>Milestone + health tracking</li>
          <li>Memory and photo capture </li>
          <li>Curated keepsake book creation </li>
          <li>AI reflections + check-ins from Mr. White </li>
          <li>Save entries from any exercise, ritual, or insight </li>
        </ul>
      </div>

    </div>
  </div>
</div>



<div className=" py-20 bg-[#000000] text-white">
  {/* Top Section: Text | Image */}
  <div className="flex flex-col md:flex-row gap-10">
    {/* Left Column (Text) */}
    <div className="md:w-1/2 text-base">
      <h2 className="text-3xl md:text-3xl font-bold mb-6">Capturing the Story That Only You Can Tell</h2>

      <p className="text-white mb-5">
        Every journal entry, photo, checklist, and milestone you track becomes part of your dog’s legacy, a life lived together, full of presence, growth, and quiet joy.
        Over time, the Hub collects these moments into something extraordinary: a personalized keepsake book that you can hold in your hands or have digitally.
      </p>

      <ul className="list-disc list-inside  mb-5 ">
        <li>Add photos of everyday life or special occasions like his 1st year birthday or the trip you took to the mountains</li>
        <li>Write short stories or memory notes. Mr. White can help you find the words</li>
        <li>Record firsts, favorite quirks, big moments, and quiet ones too</li>
        <li>Reflect on the love you’ve built, and the bond that keeps deepening</li>
      </ul>

      <p className=" mb-5">
        Your keepsake book is more than a memory, it’s a celebration. A way to honor your dog not just in passing, but in presence today.
        It becomes a treasure. A record of a relationship that mattered. Something only you can create.
        And Mr. White will walk with you the entire way.
      </p>

      <p>
        Let me know if you’d like this styled with a soft border or paired with an image (like a photo book, pawprint, or moment-in-time snapshot).
        It’s a gorgeous moment to bring visual warmth to the page.
      </p>
    </div>

    {/* Right Column (Images) */}
    <div className="md:w-1/2 flex flex-col gap-6 pt-5 mb-10">
      <img src={groups} alt="Dogs in Park" className="rounded-md h-110 w-170 mt-10" />
    </div>
  </div>

  {/* Begin Your Journey Section: Image | Text */}
  <div className="flex flex-col md:flex-row gap-10 items-center">
    {/* Left Column (Images) */}
    <div className="md:w-1/2 flex flex-col gap-6">
      <img src={groups2} alt="Dogs in Space Robes" className="rounded-md shadow-lg object-cover w-full" />
    </div>

    {/* Right Column (Text) */}
    <div className="md:w-1/2">
      <h3 className="text-2xl md:text-3xl font-bold mb-8">Begin Your Journey</h3>

      <p className="">You can start by asking Mr. White:</p>
      <ul className=" list-disc list-inside pl-4">
        <li>“Let’s start at the beginning, Mr. White. I want it all!”</li>
        <li>“What’s the first exercise I should do?”</li>
        <li>“Take me to the chapter on communication.”</li>
        <li>“I want to start journaling today — what’s a good place to begin?”</li>
        <li>Or just say: “Lead me, Mr. White.”</li>
      </ul>

      <p className="">
        Whether you take a single step or walk the full path, you’re entering something rare:
        A sacred rhythm of love. A way of living with your dog that will stay with you forever.
      </p>
    </div>
  </div>
</div>



    </div>
    <Footer/>
    </>
  );
}
