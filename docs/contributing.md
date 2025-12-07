# Contribution Guidelines

Thank you for your interest in contributing to the "Physical AI & Humanoid Robotics Course Documentation"! Your contributions help us build a comprehensive and high-quality resource for the community.

## 1. Adherence to Project Constitution

All contributions MUST align with the project's constitution This includes principles related to:

-   **Accuracy & Source Verification**: All claims must be factually correct and backed by reputable, traceable sources, cited using APA (7th edition) style.
-   **Clarity for Technical Readers**: Content should be clear, concise, and targeted at an intermediate-advanced technical audience.
-   **Reproducibility & Transparency**: All code examples, experiments, and setups must be reproducible and documented thoroughly.
-   **Rigor & Academic Discipline**: Preference for peer-reviewed research and high-quality primary sources.

## 2. Setting Up Your Development Environment

Please refer to the quickstart for instructions on setting up your local Docusaurus development environment.

## 3. Contribution Workflow

We follow a standard Git workflow:

1.  **Fork the Repository**: Fork the main project repository to your GitHub account.
2.  **Clone Your Fork**: Clone your forked repository to your local machine.
3.  **Create a New Branch**: For each new feature or fix, create a new branch from `master` (or the current primary branch). Name your branch descriptively (e.g., `feature/new-module-name`, `fix/typo-in-chapter`).
4.  **Make Your Changes**:
    *   **Content**: Write your documentation in Markdown (`.md` or `.mdx`) files.
    *   **Code Examples**: Place runnable code examples in the `robot_examples/` directory structure, mirroring the module organization.
    *   **Citations**: Add new citations to `references/references.bib` and cite them appropriately in your Markdown content.
5.  **Test Your Changes**:
    *   Run the Docusaurus development server (`yarn start`) to preview your changes locally.
    *   Ensure all code examples are functional and reproducible.
    *   Verify citations are correctly rendered.
6.  **Commit Your Changes**: Write clear, concise commit messages. Reference the specific task or issue you are addressing.
7.  **Push to Your Fork**: Push your branch to your forked repository on GitHub.
8.  **Create a Pull Request (PR)**:
    *   Open a PR from your branch to the `master` branch of the main repository.
    *   Provide a clear description of your changes, including screenshots or demonstrations where appropriate.
    *   Ensure your PR adheres to all guidelines in this document and the project's Constitution

## 4. Writing Guidelines

-   **Markdown**: Use standard Markdown syntax.
-   **Code Blocks**: Use fenced code blocks with language highlighting. Ensure code is correctly formatted and runnable.
-   **Images and Diagrams**: Store images in `static/img/` and link to them using relative paths.
-   **Readability**: Strive for a Flesch-Kincaid Grade Level of 10-12.
-   **APA Citations**: All factual claims MUST be supported by APA (7th edition) citations.

## 5. Code of Conduct

Please adhere to the project's Code of Conduct Be respectful and inclusive in all interactions.

---
*Note: This document is subject to change. Please refer to the latest version for up-to-date guidelines.*
