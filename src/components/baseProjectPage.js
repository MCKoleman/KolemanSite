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
#include "openModeler.h"

                            int main()
                            {
                                // Init window
                                GLFWwindow* window = OpenGLInitWindow(SCR_WIDTH, SCR_HEIGHT, "OpenModeler");
                                if (window == nullptr)
                                    return -1;

                                // Read Options
                                // ------------
                                Options options = ReadOptions("../config.txt");

                                // Build and compile shader program
                                // ------------------------------------
                                ProgramIDs ids = ProgramIDs();
                                ids.shaderProgram = LoadShaderProgram(options.phong == 1);

                                // Create scene
                                // ------------
                                Scene* scene = new Scene();
                                scene->SetCameraFromOptions(&options);
                                scene->SetLight(new Light(
                                    glm::vec3(5.0f, 5.0f, 5.0f),        // Light pos
                                    glm::vec3(-1.0f, -1.0f, -1.0f),     // Light dir
                                    glm::vec3(1.0f, 1.0f, 1.0f),        // Light color
                                    0.1f,                               // Ambient strength
                                    7.0f));                             // Specular strength);
                                scene->GetMats()->AddMat("default", options.defaultColor);

                                // Read mesh
                                // ---------
                                Mesh* displayMesh = scene->GetMeshes()->GetAll().begin()->second;

                                // Read mesh from file
                                ReadObjFromFile(displayMesh, scene->GetMats(), "../models/", options.objName);
                                displayMesh->Scale(glm::vec3(options.objScale, options.objScale, options.objScale));
                                displayMesh->SetPos(options.objPos);
                                displayMesh->CalcPivot();

                                // Load up model into vertice and indice structures
                                // Get vertices
                                int vertsSize = scene->GetVertCount() * 10;
                                int indicesSize = scene->GetIndexCount();
                                float* vertices = new float[vertsSize];
                                unsigned int* indices = new unsigned int[indicesSize];
                                scene->CalcRenderTris();
                                scene->GetVAO(vertices, vertsSize, indices, indicesSize);
                                scene->CalcInvMVP();

                                // Print vertices and indices
                                if (options.print == 1) {
                                    PrintArray("Printing vertices:", vertices, vertsSize, 10);
                                    PrintArray("Printing indices:", indices, indicesSize, 3);
                                }

                                // Init VAO, VBO, and EBO
                                OpenGLInitBuffers(&ids, vertsSize, vertices, indicesSize, indices);

                                // Enable wireframe if requested in options
                                OpenGLEnableWireframe(options.wireframe == 1);

                                // Init variables to track user input. Speed constants declared in order:
                                // CamMove, CamTurn, ModelMove, ModelTurn, ModelScale, MouseMove, MouseTurn
                                SpeedConsts speeds = SpeedConsts(2.0f, 1.0f, 0.3f, 30.0f, 1.0f, 0.1f, 0.1f);
                                InputLocks locks = InputLocks();
                                int prevX = -1;
                                int prevY = -1;

                                // Get selection
                                Selection sel = Selection();
                                sel.SetSelMode(SelMode::MESH);
                                sel.SetTool(Tool::SELECT);

                                // Track time
                                double lastTime = glfwGetTime();
                                double currentTime = glfwGetTime();
                                float deltaTime = 0.0f;

                                // render loop
                                // -----------
                                while (!glfwWindowShouldClose(window))
                                {
                                    // Get deltaTime
                                    lastTime = currentTime;
                                    currentTime = glfwGetTime();
                                    deltaTime = float(currentTime - lastTime);

                                    // Process input and render
                                    ProcessInput(window, scene, &sel, &locks, &options, &speeds, deltaTime, &prevX, &prevY);

                                    // Process changes in selections
                                    if (sel.newSelVerts.size() != 0 || sel.removedSelVerts.size() != 0) {
                                        //std::cout << "Selecting [" << sel.newSelVerts.size() << "] new verts, removing [" << sel.removedSelVerts.size() << "]\n";

                                        for (auto iter = sel.newSelVerts.begin(); iter != sel.newSelVerts.end(); ++iter) {
                                            vertices[*iter * VERT_SHADER_SIZE] = 1.0f;
                                        }
                                        for (auto iter = sel.removedSelVerts.begin(); iter != sel.removedSelVerts.end(); ++iter) {
                                            vertices[*iter * VERT_SHADER_SIZE] = 0.0f;
                                        }
                                        sel.newSelVerts.clear();
                                        sel.removedSelVerts.clear();
                                        sel.CalcSelPivot();

                                        glBindBuffer(GL_ARRAY_BUFFER, ids.VBO);
                                        glBufferSubData(GL_ARRAY_BUFFER, 0, vertsSize * sizeof(vertices[0]), vertices);
                                        locks.reselect = false;

                                        //PrintArray("Testing vertex data", vertices, vertsSize, 10);
                                    }

                                    // Update VAO on rerender call
                                    if (locks.rerender) {
                                        // Clear previous data
                                        delete[] vertices;
                                        delete[] indices;

                                        // Set new data
                                        vertsSize = scene->GetVertCount() * 10;
                                        indicesSize = scene->GetIndexCount();
                                        vertices = new float[vertsSize];
                                        indices = new unsigned int[indicesSize];

                                        scene->GetVAO(vertices, vertsSize, indices, indicesSize, &sel);
                                        OpenGLInitBuffers(&ids, vertsSize, vertices, indicesSize, indices);

                                        // Reset rerender
                                        locks.rerender = false;
                                    }

                                    // Render
                                    OpenGLDraw(scene, &sel, &ids, indicesSize, indices);

                                    // glfw: swap buffers and poll IO events (keys pressed/released, mouse moved etc.)
                                    // -------------------------------------------------------------------------------
                                    glfwSwapBuffers(window);
                                    glfwPollEvents();
                                }

                                // Clear up dynamic memory usage
                                // -----------------------------
                                OpenGLCleanup(&ids);
                                delete[] vertices;
                                delete[] indices;
                                delete scene;

                                // glfw: terminate, clearing all previously allocated GLFW resources.
                                // ------------------------------------------------------------------
                                glfwTerminate();
                                return 0;
                            }
*/