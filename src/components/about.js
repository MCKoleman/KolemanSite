export default function AboutPage() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Kristian.
            <br className="hidden lg:inline-block" />I'm a software engineer and game developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I am currently a student at the University of Florida, graduating in December of 2023 with a Bachelor of Science in Computer Science 
            and a minor in Digital Arts & Sciences (UF's game development minor).<br/>
            <br/>
            I am also the CEO and founder of <a href="https://studiokoleman.com" className="text-white hover:text-green-500">
              Studio Koleman LLC,
            </a> an indie game development company that I founded during college to turn my passion of
            making games into more than just a hobby. 
            Since officially transitioning from a sole propietorship into an LLC in August 2022, I have grown the company to be over 20
            contract employees working on 4 different projects that will be releasing gradually over the course of the next 1.5 years.<br/>
            <br/>
            Working at Studio Koleman has given me plenty of experience in leadership, project management, software engineering, web development,
            gameplay programming, systems programming, and procedural generation programming. 
            I hope to put these skills to use and refine them even more by working at a company with more experienced developers.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-xl"
            alt="hero"
            src="./images/ManuHeadshot.jpg"
          />
        </div>
      </div>
    </section>
  );
}