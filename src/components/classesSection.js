import { CheckBadgeIcon, BookOpenIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import React from "react";
import { courses } from "../data/data";

export default function ClassesSection() {
  return (
    <section id="classes">
      <ul className="container px-5 py-10 mx-auto">
        <li className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Courses
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I will be graduating with a Bachelor of Science in Computer Science and a minor in <br/>
            Digital Arts & Sciences (Game Design). Here are some courses that I have taken that <br/>
            I believe showcase some of my expertise.
          </p>
        </li>
        <li className="flex flex-wrap lg:w-4/6 sm:mx-auto sm:mb-2 -mx-2">
          {courses.map((course) => (
            <div key={course.id} className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BookOpenIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {course.id}<br/>
                  {course.title}
                </span>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </section>
  );
}