import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";
import forestBg from "../assets/forest-dog-banner.png"; 
import laptopImg from "../assets/laptop-ui.png"; 
import hotel from "../assets/Hotel.png";
import leg1 from "../assets/leg1.png";
import leg2 from "../assets/leg2.png";
import story from "../assets/story.png"
import man from "../assets/man.png"

export default function LegacyPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white bg-black">
        <img
          src={forestBg}
          alt="Forest background"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="bg-black text-white">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 items-center">
          {/* Left Text Column (50%) */}
          <div className="py-16 px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3" data-aos="fade-right">
              <span className="w-2 h-6 bg-[#D3B86A] inline-block"/>
              Welcome to Legacy of Love Dog Hub
            </h2>
            <p className="text-base leading-relaxed" data-aos="fade-right">
              Exclusively available to Elite Pack members, the Legacy of Love Living Hub is nothing like you’ve seen before!
              Imagine a dynamic, AI-powered sanctuary where every cherished memory and vital detail about your companion’s life
              is held with care, easily accessible anytime, anywhere. This isn’t just a digital journal — Mr. White is your
              personal assistant, your memory keeper, even an aid to custom publishing your dog’s life in book form and your
              partner in ensuring your dog enjoys a long, healthy, joyful life.
              <br /><br />
              With the Legacy of Love Living Hub, you’ll discover a new level of ease and confidence in managing your pup’s
              health, milestones, and adventures — all wrapped in a space designed to grow with you and your dog. Feel proud
              knowing that support and awareness are available 24/7, helping you make informed decisions and celebrate every
              step of your journey together.
            </p>
          </div>

          {/* Right Image Column (50%) */}
          <div className="flex justify-center items-center" data-aos="zoom-in-up">
            <img
              src={laptopImg}
              alt="Laptop with black UI"
              className="w-full h-full object-contain py-28 pr-6"
            />
          </div>
        </div>
      </section>

      {/* Section: What Is the Legacy of Love Dog Hub? */}
      <section className="bg-black text-white px-6 ">
        <div className="max-w-8xl px-10 pb-16">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3" data-aos="fade-down">
            <span className="w-2 h-6 bg-[#D3B86A] inline-block" />
            What Is the Legacy of Love Dog Hub?
          </h2>

          {/* 2-column layout */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="space-y-8">
              <div data-aos="fade-right"> 
                <h3 className="font-bold text-md ">A Living, Evolving Companion Care Space</h3>
                <p className="text-white text-md leading-relaxed">
                  The Legacy of Love Living Hub is much more than a simple journal or folder of documents.
                  It’s a vibrant, ever-growing space that captures the full story of your dog’s life. From
                  health records and vet visits to daily activities and special moments, everything is thoughtfully
                  organized in one place. This means you can easily track your dog’s progress, celebrate milestones,
                  and keep important information handy — all designed to support a long, healthy life for your companion.
                </p>
              </div>

              <div data-aos="fade-right">
                <h3 className="font-bold">Your Personal AI Guide</h3>
                <p className="text-white text-md leading-relaxed">
                  Mr. White isn’t just a digital assistant — he’s your knowledgeable partner in care. As you add stories,
                  records, or questions, Mr. White learns and adapts, providing helpful reminders, tailored advice, and
                  insights that make daily care simpler and more effective. Whether you’re new to AI or tech-savvy, he
                  guides you gently without overwhelming, helping you feel confident and connected to your dog’s wellbeing.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div data-aos="fade-left">
                <h3 className="font-bold ">Create Custom Keepsakes Anytime</h3>
                <p className="text-white text-md leading-relaxed">
                  One of the most special features of the Living Hub is the ability to turn your dog’s story into a
                  beautiful, personalized book. Whether you want to celebrate their first birthday, a milestone anniversary,
                  or simply preserve your favorite memories and photos, you can select any section of the Living Hub to print
                  as a keepsake. This tangible memento is perfect for sharing with family, friends, or simply treasuring for
                  years to come.
                </p>
              </div>

              <div data-aos="fade-left">
                <h3 className="font-bold ">Always Accessible, Always Yours</h3>
                <p className="text-white text-md leading-relaxed">
                  Your Legacy of Love Living Hub is accessible anytime and anywhere via your personal portal. Whether you’re
                  at home, traveling, or at the vet, you have instant access to your dog’s complete history and care details.
                  This exclusive feature is available only to Elite Pack members, offering peace of mind that your dog’s
                  story and health information are just a click away — 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <img src={hotel} alt="" className="w-full p-12" data-aos="fade-down-right" />
      </div>

      {/* Section: Key Areas Organized by Mr. White */}
      <section className="bg-black text-white px-12 pt-10 space-y-1">
        {/* First Row: Text Left, Image Right */}
        <div className="max-w-8xl grid md:grid-cols-2 gap-12 items-start">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3" data-aos="fade-down">
              <span className="w-2 h-6 bg-[#D3B86A] inline-block" />
              Key Areas Organized by Mr. White
            </h2>

            <div className="space-y-6 leading-relaxed">
              <div data-aos="fade-right">
                <h3 className="font-bold text-md">Companion Profile Hub</h3>
                <p className="text-md">
                  This is the heart of your dog’s personal information. Here, Mr. White keeps important details like your dog’s birthdate, breed, and veterinarian or groomer contacts neatly organized. Having this information easily accessible helps you stay on top of routine care and emergencies alike. Whether you need to quickly share health info with a new caretaker or schedule a grooming appointment, everything you need is right here.
                </p>
              </div>

              <div data-aos="fade-right">
                <h3 className="font-bold text-md ">Daily and Weekly Living Log Hub</h3>
                <p className="text-md">
                  Track your dog’s everyday life with ease. This hub lets you log activities, moods, behaviors, and photos to capture the full picture of their wellbeing and happiness. Whether it’s a playful afternoon, a change in appetite, or a special moment during a walk, you can record it all. Over time, these logs create valuable insights that help you understand patterns, celebrate joys, and address any concerns early.
                </p>
              </div>

              <div data-aos="fade-right">
                <h3 className="font-bold text-md">Favorites and Travel Treasures Hub</h3>
                <p className="text-md">
                  Keep a curated list of your dog’s favorite toys, friends, and travel spots. This hub helps you remember which toys spark joy, where to get them at the best rate, who their best playmates are, and the places where they feel most at home on the road. It’s perfect for planning trips, playdates, or simply ensuring your dog’s world stays full of the things and beings they love.
                </p>
              </div>

              <div data-aos="fade-right">
                <h3 className="font-bold text-md ">Medicine and Appointment Alerts Hub</h3>
                <p className="text-md">
                  Never miss an important medication dose, vet visit, or playdate again. This hub manages all reminders for medicines, treatments, vaccinations, and appointments, customized to your dog’s unique schedule. Mr. White’s timely alerts make it simple to keep care on track without stress.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-start" data-aos="fade-left">
            <img
              src={leg1}
              alt="Mr. White with dog"
              className="rounded-lg w-full pt-10 pb-5"
            />
          </div>
        </div>

        {/* Second Row: Image Left, Text Right */}
        <div className="max-w-7xl grid md:grid-cols-2">
          {/* Left Image */}
          <div className="flex" data-aos="fade-right">
            <img
              src={leg2}
              alt="Mr. White with sunglasses and dogs"
              className=""
            />
          </div>

          {/* Right Text */}
          <div className="space-y-6 pl-10 ">
            <div data-aos="fade-left">
              <h3 className="font-bold text-md">Inspirational Insights Hub</h3>
              <p className="text-md">
                Beyond practical care, this space offers thoughtful reflections, wisdom, and gentle guidance from Mr. White. Drawing on decades of experience and AI-driven understanding, it provides encouragement and ideas to deepen your bond and nurture your dog’s spirit every day.
              </p>
            </div>
            <div data-aos="fade-left">
              <h3 className="font-bold text-md">End of Life Planning Hub</h3>
              <p className="text-md">
                Planning ahead with compassion, this hub supports you in preparing for your dog’s final journey. It helps organize wishes, memorial ideas, and practical steps with care and sensitivity—offering peace of mind and honoring the love you share.
              </p>
            </div>
            <div data-aos="fade-left">
              <h3 className="font-bold text-md">Mr. White’s AI-driven organization and updates</h3>
              <p className="text-md">
                Behind the scenes, Mr. White’s intelligent system continuously organizes and updates all these hubs based on your input and ongoing data. This means your Legacy of Love Living Hub is always current, easy to navigate, and personalized—ready to support you and your dog every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="bg-black text-white px-6 md:px-12 py-16">
  <div className="flex flex-col lg:flex-row items-start gap-10">

    {/* LEFT TEXT BLOCK */}
    <div className="lg:w-2/3">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 ">
        <span className="inline-block w-2 h-5 bg-[#D3B86A] mr-3"></span>
        Your Choice in Building Your Companion’s Story
      </h2>

      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-1" data-aos="fade-right">Full Control to Customize Your Hubs</h3>
        <p className="text-white text-md leading-relaxed" data-aos="fade-right">
With the Legacy of Love Living Hub, you’re in the driver’s seat. You decide what to include, update, and highlight. Add stories that capture your dog’s personality, upload favorite photos that warm your heart, and mark important milestones—like their first steps, favorite tricks, or memorable vet visits. Every detail is yours to shape, making the hub uniquely yours and your dog’s. 
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-1" data-aos="fade-right">Mr. White Adapts and Personalizes Your Journey</h3>
        <p className="text-white text-md leading-relaxed" data-aos="fade-right">
          As you contribute, Mr. White learns from your input, tailoring the Living Hub to reflect your dog’s individuality and your relationship. He helps organize your memories and care notes into a coherent, meaningful narrative. Over time, this evolves into a unique “book” that tells the story of your companion’s life — one filled with love, growth, and shared experiences.
        </p>
      </div>

      {/* Section 3 - List */}
      <div>
        <h3 className="font-bold text-lg mb-2" data-aos="fade-right">Creative Ways to Use Your Living Hub</h3>
        <p className="text-white text-md mb-3" data-aos="fade-right">
          Your hub is a versatile space that can be as simple or as rich as you like. Here are just a few ideas to inspire you:
        </p>
        <ul className="text-white text-md list-disc list-inside space-y-2" >
          <li data-aos="fade-right"><strong>Travel Logs:</strong> Document your adventures together—parks visited, hikes taken, and dog-friendly destinations discovered. </li>
          <li data-aos="fade-right"><strong>Playdate Memories:</strong>Keep track of your dog’s friends, their favorite games, and funny moments shared. </li>
          <li data-aos="fade-right"><strong>Health & Behavior Journals:</strong> Record patterns in mood, appetite, or activity to help spot trends and discuss with your vet. </li>
          <li data-aos="fade-right"><strong>Training Progress:</strong> Celebrate milestones from puppy basics to advanced commands, including notes on what worked best.</li>
          <li data-aos="fade-right"><strong>Special Occasions:</strong> Capture birthdays, adoption anniversaries, holidays, and everyday celebrations with photos and stories. </li>
          <li data-aos="fade-right"><strong>Daily Moments:</strong> Jot down those small but precious moments—like the way they tilt their head or snuggle at your feet</li>
          <li data-aos="fade-right"><strong>Seasonal Reflections:</strong>Note how your dog changes with the seasons, their favorite weather, and seasonal care tips. </li>
          <li data-aos="fade-right"><strong>Legacy Planning:</strong> Prepare thoughtful messages, wishes, or memories to share with loved ones in the future.</li>
        </ul>
        <p className="text-white text-md mt-4" data-aos="fade-right">
Whatever you choose to record, your Legacy of Love Living Hub becomes a living tribute—one that grows richer with every entry and strengthens the bond you share.         </p>
      </div>
    </div>

    {/* RIGHT IMAGE BLOCK */}
    <div className="lg:w-1/3" data-aos="fade-left">
      <img
        src={story} 
        alt="Woman with dogs"
        className=""
      />
    </div>
  </div>
</section>
<section className="bg-black text-white px-6 md:px-12 py-16 space-y-14">

  {/* TOP: Full-width Section */}
  <div>
    <h2 className="text-2xl md:text-3xl font-semibold mb-8"  data-aos="fade-down">
      <span className="inline-block w-2 h-5 bg-[#D3B86A] mr-2"></span>
      A Day with Mr. White’s Living Dog Hub
    </h2>

    <div className="space-y-6 text-md text-white leading-relaxed">
      <div data-aos="fade-down-right">
        <p className="font-semibold text-white">Morning Reminder: Never Miss an Appointment</p>
        <p>Imagine starting your day with a quick glance at your personal Legacy of Love Living Hub. Today, you have a vet appointment scheduled for your dog, Bella. Mr. White has already reminded you this morning — ensuring you won’t miss the important checkup.</p>
      </div>

      <div data-aos="fade-down-right">
        <p className="font-semibold text-white">Updating Health Records Made Simple</p>
        <p>After the visit, you easily upload the vet’s notes and update Bella’s health records in the Companion Profile Hub. Mr. White automatically organizes the new information, flagging upcoming vaccinations and suggesting any needed follow-ups based on the vet’s advice.</p>
      </div>

      <div data-aos="fade-down-right">
        <p className="font-semibold text-white">Capturing Travel Memories</p>
        <p>Later, during a weekend getaway, you snap a photo of Bella at her favorite dog park. You upload it to the Favorites and Travel Treasures Hub, adding a note about the fun she had chasing butterflies. Mr. White gently suggests tagging the location and friends she met there, helping you build a vivid travel log filled with joyful memories.</p>
      </div>

      <div data-aos="fade-down-right">
        <p className="font-semibold text-white">Timely Medication Alerts</p>
        <p>That evening, you receive a timely medicine alert from Mr. White’s Medicine and Appointment Alerts Hub reminding you to give Bella her allergy medication. No more second-guessing or missed doses — the care stays on track effortlessly.</p>
      </div>

      <div data-aos="fade-down-right">
        <p className="font-semibold text-white">AI-Powered Insights Throughout Your Day</p>
        <p>Throughout the day, Mr. White’s AI keeps learning from your entries and habits, offering personalized insights and gentle nudges to deepen your understanding of Bella’s health and happiness. By the end of the day, your Legacy of Love Living Hub feels like a true extension of your care — a smart, caring partner working alongside you every step of the way.</p>
      </div>
    </div>
  </div>

  {/* BOTTOM: Two Column Section */}
  <div className="flex flex-col lg:flex-row gap-10 items-start pt-5">

    {/* LEFT Column: Image */}
    <div className="">
      <img
        src={man} 
        alt="Man with dog"
        className="rounded-lg shadow-lg w-xl"
        data-aos="fade-up-right"
      />
    </div>

    {/* RIGHT Column: Features */}
    <div className="lg:w-1/2 w-full">
      <h3 className="text-3xl font-semibold mb-8" data-aos="fade-up-left">
        <span className="inline-block w-2 h-5 bg-[#D3B86A] mr-2"></span>
        Additional Helpful Features
      </h3>

      <div className="space-y-5 text-md text-white ">
        <div data-aos="fade-up-left">
          <p className="font-bold text-lg text-white">Connect and Share with a Supportive Community</p>
          <p className="text-white text-md">Beyond personal care, the Legacy of Love Living Hub invites you to join a vibrant community of dog lovers. Share stories, exchange tips, organize meetups, and celebrate your companions together. This space offers connection and support, turning your journey into a shared experience filled with friendship and understanding.</p>
        </div>

        <div data-aos="fade-up-left">
          <p className="font-bold text-lg text-white">Exclusive Product Discounts and Perks</p>
          <p className="text-white text-md">As an Elite Pack member, you enjoy special discounts on trusted products carefully curated by Mr. White and Anahata Graceland. These savings help you access the best in health, nutrition, and comfort for your dog, ensuring quality care without compromise. </p>
        </div >
        <div data-aos="fade-up-left">
            <p className="font-bold text-lg text-white">Celebrate Life’s Milestones and Birthdays</p>
            <p className="text-white text-md">Plan unforgettable birthday celebrations and important milestones right from your Living Hub. Whether it’s a fun party idea, a personalized message, or a memorable photo album, Mr. White helps you make each occasion special. </p>
        </div>
        <div data-aos="fade-up-left">
            <p className="font-bold text-lg text-white">Create Virtual Montages and Keepsakes</p>
            <p className="text-white text-md">Turn your favorite photos and stories into beautiful virtual montages that capture your dog’s personality and journey. Share them with family or keep them as treasured digital memories</p>
        </div>
        <div data-aos="fade-up-left">
            <p className="font-bold text-lg text-white">Thoughtful Eulogy Drafting Assistance</p>
            <p className="text-white text-md">When the time comes, Mr. White gently supports you with tools to craft a heartfelt eulogy or memorial tribute. This feature helps honor your dog’s legacy with compassion and dignity, offering comfort during difficult moments. </p>
        </div>
        <div data-aos="fade-up-left">
            <p className="font-bold text-lg text-white">Exciting Future Features: Fetch Fridays Apparel and More</p>
            <p className="text-white text-md">Stay tuned for upcoming additions like exclusive apparel from Fetch Fridays and other community-inspired products that celebrate the special bond between you and your dog. The Living Hub continues to grow, bringing you fresh ways to cherish and express your love. </p>
        </div>
      </div>
    </div>

  </div>
</section>
<div class="bg-black text-white px-12 pb-10 max-w-8xl">
  <h2 class="text-3xl font-semibold flex items-center mb-6" data-aos="fade-down">
    <span class="w-2 h-5 bg-[#D3B86A] mr-3 inline-block"></span>
    How to Get Started
  </h2>

  <p class="text-md text-white mb-4" data-aos="fade-right">
    Ready to elevate the way you care for your companion? Unlock the full power of the  Legacy of Love Living Hub by joining the Elite Pack today.
  </p>

  <p class="text-md text-white mb-4" data-aos="fade-right">
    With your Elite Pack membership, you’ll gain 24/7 access to your personal portal, exclusive AI-powered tools, and all the features that make caring for your dog easier, richer, and more connected.
    Unlock Your Legacy Today! [Sign Up Now]
  </p>

  <p class="text-md" data-aos="fade-right">
    Not quite ready to commit? Explore a live preview or demo of the Living Hub to see how it works and how it can transform your daily care routine. <br />
    Take the first step toward a deeper, more organized, and joyful companion care experience — because every moment with your dog deserves to be cherished and supported.
  </p>
</div>

      <Footer />
    </>
  );
}
