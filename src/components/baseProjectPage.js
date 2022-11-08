import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { GetPrevIndex, GetNextIndex, GetCurIndex } from "../utils/maps";
import { games, projects } from "../data/data";

export default function BaseProjectPage(props) {
    let curList = props.list;
    let otherList = (props.list === games) ? projects : games;

    let curIndex = GetCurIndex(curList, props.project.id);
    let prevIndex = GetPrevIndex(curList, props.project.id);
    let nextIndex = GetNextIndex(curList, props.project.id);
    let prev = null;
    let next = null;

    // Allow projects and games to cycle through each other
    if(curIndex < prevIndex) {
        prev = otherList.at(projects.length-1);
        next = curList.at(nextIndex);
    }
    else if(curIndex > nextIndex) {
        prev = curList.at(prevIndex);
        next = otherList.at(0);
    }
    else {
        prev = curList.at(prevIndex);
        next = curList.at(nextIndex);
    }

    return (
        <div className="container mx-auto flex min-h-screen py-20 mb-20 flex-col items-center">
            <div className="d-block w-full text-white">
                <div className="flow-root">
                    <div className="absolute inline-flex w-full h-fit">
                        <div className="d-block w-full">
                            <h1 className="d-flex text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                {props.project.title}
                            </h1>
                            <h3 className="d-flex text-center title-font sm:text-2xl text-1xl font-medium text-white">
                                {props.project.subtitle}
                            </h3>
                        </div>
                    </div>
                    <a href={"/projects/" + prev.id}
                        className="float-left inline-flex items-center bg-gray-900 border-0 ml-10 px-2 py-2 focus:outline-none hover:bg-cyan-800 rounded-xl text-base">
                        <div className="d-block">
                            <div className="flex justify-start">
                                <div className="inline-flex items-center">
                                    <ArrowLeftIcon className="w-4 h-4 mr-1"/>
                                    {prev.title}
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <img alt="previousPage"
                                    className="relative inset-0 w-36 hover:w-40 object-center rounded-xl"
                                    src={prev.image}
                                />
                            </div>
                        </div>
                    </a>
                    <a href={"/projects/" + next.id}
                        className="float-right inline-flex items-center bg-gray-900 border-0 mr-10 px-2 py-2 focus:outline-none hover:bg-cyan-800 rounded-xl text-base">
                        <div className="d-block">
                            <div className="flex justify-end">
                                <div className="inline-flex items-center">
                                    {next.title}
                                    <ArrowRightIcon className="w-4 h-4 ml-1"/>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <img alt="nextPage"
                                    className="relative inset-0 w-36 hover:w-40 object-center rounded-xl"
                                    src={next.image}
                                />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex justify-center align-center">
                    <a href={props.project.link}
                        className="relative w-1/2 h-full object-cover object-center hover:shadow-2xl">
                        <img alt="projectGif"
                            className="w-full rounded-xl"
                            src={props.project.gif}
                        />
                    </a>
                </div>
                <div className="flex justify-center align-center mb-10">
                    <p className="d-flex text-center w-1/2">
                        {props.project.description}
                    </p>
                </div>
                <div className="flex justify-center align-center mb-10">
                    <a href={props.project.link}
                        className="bg-gray-900 border-0 py-4 px-7 bg-cyan-900 focus:outline-none hover:bg-cyan-700 rounded text-base hover:text-xl mt-4 md:mt-0">
                        Link to project
                    </a>
                </div>
                <div className="flex justify-center align-centr mb-10">
                    <pre>
                        <code>
                            
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

/*
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { GetPrevIndex, GetNextIndex, GetCurIndex } from "../utils/maps";
import { games, projects } from "../data/data";
import { Component } from "react";
import ReactMarkdown from "react-markdown";
import modeler from "../projects/openModeler.md";

export default class BaseProjectPage extends Component {
    constructor(props) {
        super(props);

        let curList = props.list;
        let otherList = (props.list === games) ? projects : games;
    
        let curIndex = GetCurIndex(curList, props.project.id);
        let prevIndex = GetPrevIndex(curList, props.project.id);
        let nextIndex = GetNextIndex(curList, props.project.id);
        let prev = null;
        let next = null;
    
        // Allow projects and games to cycle through each other
        if(curIndex < prevIndex) {
            prev = otherList.at(projects.length-1);
            next = curList.at(nextIndex);
        }
        else if(curIndex > nextIndex) {
            prev = curList.at(prevIndex);
            next = otherList.at(0);
        }
        else {
            prev = curList.at(prevIndex);
            next = curList.at(nextIndex);
        }
    
        this.state = {
            terms: null,
            project: props.project,
            list: props.list,
            prev: prev,
            next: next
        }
    }
    
    componentWillMount() {
        fetch(modeler)
        .then((response) => response.text())
        .then((text) => {this.setState({ terms: text })})
    }

    render() {
        return (
            <div className="container mx-auto flex min-h-screen py-20 mb-20 flex-col items-center">
                <div className="d-block w-full text-white">
                    <div className="flow-root">
                        <div className="absolute inline-flex w-full h-fit">
                            <div className="d-block w-full">
                                <h1 className="d-flex text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                    {this.state.project.title}
                                </h1>
                                <h3 className="d-flex text-center title-font sm:text-2xl text-1xl font-medium text-white">
                                    {this.state.project.subtitle}
                                </h3>
                            </div>
                        </div>
                        <a href={"/projects/" + this.state.prev.id}
                            className="float-left inline-flex items-center bg-gray-900 border-0 ml-10 px-2 py-2 focus:outline-none hover:bg-cyan-800 rounded-xl text-base">
                            <div className="d-block">
                                <div className="flex justify-start">
                                    <div className="inline-flex items-center">
                                        <ArrowLeftIcon className="w-4 h-4 mr-1"/>
                                        {this.state.prev.title}
                                    </div>
                                </div>
                                <div className="flex justify-start">
                                    <img alt="previousPage"
                                        className="relative inset-0 w-36 hover:w-40 object-center rounded-xl"
                                        src={this.state.prev.image}
                                    />
                                </div>
                            </div>
                        </a>
                        <a href={"/projects/" + this.state.next.id}
                            className="float-right inline-flex items-center bg-gray-900 border-0 mr-10 px-2 py-2 focus:outline-none hover:bg-cyan-800 rounded-xl text-base">
                            <div className="d-block">
                                <div className="flex justify-end">
                                    <div className="inline-flex items-center">
                                        {this.state.next.title}
                                        <ArrowRightIcon className="w-4 h-4 ml-1"/>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <img alt="nextPage"
                                        className="relative inset-0 w-36 hover:w-40 object-center rounded-xl"
                                        src={this.state.next.image}
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center align-center">
                        <a href={this.state.project.link}
                            className="relative w-1/2 h-full object-cover object-center hover:shadow-2xl">
                            <img alt="projectGif"
                                className="w-full rounded-xl"
                                src={this.state.project.gif}
                            />
                        </a>
                    </div>
                    <div className="flex justify-center align-center mb-10">
                        <p className="d-flex text-center w-1/2">
                            {this.state.project.description}
                        </p>
                    </div>
                    <div className="flex justify-center align-center mb-10">
                        <a href={this.state.project.link}
                            className="bg-gray-900 border-0 py-4 px-7 bg-cyan-900 focus:outline-none hover:bg-cyan-700 rounded text-base hover:text-xl mt-4 md:mt-0">
                            Link to project
                        </a>
                    </div>
                    <div className="flex justify-center align-centr mb-10">
                        <pre>
                            <code>
                                <ReactMarkdown source={this.state.terms}/>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}

*/