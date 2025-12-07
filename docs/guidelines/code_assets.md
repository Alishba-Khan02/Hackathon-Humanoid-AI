# Guidelines for Code Examples and Simulation Assets

This document provides guidelines for incorporating code examples and simulation assets into the "Physical AI & Humanoid Robotics Course Documentation." Adhering to these guidelines ensures clarity, reproducibility, and consistency across all practical elements of the course.

## 1. Code Examples

### 1.1. Location and Structure

-   All runnable code examples should be placed in the `robot_examples/` directory at the repository root.
-   Organize code examples into subdirectories mirroring the module structure (e.g., `robot_examples/navigation/simple_navigation.py`).
-   Each example should be self-contained and runnable independently where feasible.

### 1.2. Language and Style

-   **Python**:
    -   Adhere to PEP 8 style guide.
    -   Use type hints for functions and variables.
    -   Include a clear `if __name__ == '__main__':` block for entry points.
-   **C++**:
    -   Follow commonly accepted C++ coding standards (e.g., Google C++ Style Guide or ROS 2 C++ Style Guide).
    -   Ensure proper memory management.
-   **Readability**:
    -   Use meaningful variable and function names.
    -   Include comments for complex logic, but prioritize clear code over excessive comments.
    -   Break down complex examples into smaller, understandable functions or classes.

### 1.3. Reproducibility and Dependencies

-   **Virtual Environments**: For Python, always specify dependencies using `requirements.txt` or a `pyproject.toml` file within the example's directory if it has unique dependencies.
-   **ROS 2 Packages**: For ROS 2 examples, ensure `package.xml` and `CMakeLists.txt` (for C++) or `setup.py` (for Python) are correctly configured. Provide instructions on how to build and run the package.
-   **Clear Instructions**: Provide step-by-step instructions on how to set up the environment, install dependencies, build (if necessary), and run each code example within the relevant documentation module.

### 1.4. In-Documentation Snippets

-   When including code snippets directly in Markdown files, use fenced code blocks with language highlighting (e.g., ````python`).
-   Keep inline snippets concise. For longer code, link to the full file in the `robot_examples/` directory.

## 2. Simulation Assets

### 2.1. Location and Structure

-   Simulation assets (e.g., URDF/SDF files, Gazebo models, Isaac Sim assets, textures) should be organized in `simulation_assets/` at the repository root, with subdirectories reflecting their usage (e.g., `simulation_assets/humanoid_robot/model.urdf`).
-   Ensure assets are version-controlled.

### 2.2. Reproducibility

-   **Model Files**: Provide all necessary URDF/SDF files, meshes (`.stl`, `.dae`), and configuration files required to load and run the robot models in Gazebo or Isaac Sim.
-   **Environment Files**: Include world files (`.world` for Gazebo, `.usd` for Isaac Sim) for custom simulation environments.
-   **Dependencies**: Clearly list any external dependencies for simulation assets (e.g., specific Gazebo plugins, Isaac Sim extensions).
-   **Instructions**: Provide detailed instructions in the documentation modules on how to integrate and use these assets in the respective simulators.

### 2.3. Licensing

-   Ensure all third-party code examples or simulation assets adhere to compatible open-source licenses. Clearly state the license for any included third-party content.

---
*Note: The goal is to make it as easy as possible for a reader to replicate the experiments and examples described in the course.*
