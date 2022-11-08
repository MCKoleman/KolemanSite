import { BookOpenIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
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
            Here are some courses that I have taken that I believe have helped form some of my expertise.
          </p>
        </li>
        <li className="flex flex-wrap w-full lg:mx-auto sm:mb-2">
          {courses.map((course) => (
            <div key={course.id} className="min-h-max p-2 xl:w-1/3 lg:w-1/2 md:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BookOpenIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  <p className="text-md text-green-600">{course.id} - {course.title}</p>
                  <p className="mt-2 text-sm">{course.description}</p>
                  <p className="mt-1 text-sm">{course.learned}</p>
                </span>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </section>
  );
}