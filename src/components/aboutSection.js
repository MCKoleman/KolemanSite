export default function AboutSection() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Kristian.
            <br className="hidden lg:inline-block" />I'm a software engineer and game programmer
          </h1>
          <p className="mb-8 leading-relaxed">
            I currently work as a full-stack software engineer at <a href="https://lavavein.com/" className="text-white hover:text-green-500">
              LavaVein
            </a>, a UI/UX design and web development company.<br/>
            <br/>
            I am also the CEO and founder of <a href="https://studiokoleman.com" className="text-white hover:text-green-500">
              Studio Koleman LLC
            </a>, an indie game development company that I founded during college to turn my passion of
            making games into more than just a hobby. 
            Since forming the company in August 2022, I have managed teams of 10+ people and I have worked on every part of the game development pipeline 
            from prototyping new game ideas to designing and implementing the servers and databases our games run on.<br/>
            <br/>
            Working at Studio Koleman has given me experience in leadership, project management, software engineering, web development,
            gameplay programming, publishing, database management, creating APIs, and server programming. 
            I hope to keep using these skills and refining them more by working with senior developers who I can keep learning from.<br/>
            <br/>
            I earned my BS in <a href="https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/CPS_BSCS/" className="text-white hover:text-green-500">
              Computer Science
            </a> with minors in <a href="https://catalog.ufl.edu/UGRD/colleges-schools/UGLAS/MAT_UMN/" className="text-white hover:text-green-500">
              Math
            </a> and <a href="https://catalog.ufl.edu/UGRD/colleges-schools/UGART/DAR_UMN/" className="text-white hover:text-green-500">
              Game Development
            </a> at the <a href="https://www.ufl.edu/" className="text-white hover:text-green-500">
              University of Florida
            </a>.<br/>
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
            <a
              href="https://mckoleman.itch.io"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Play Games I've Made
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