# Writing Style Guide and APA Citation Enforcement

This document outlines the writing style guidelines and APA (7th edition) citation enforcement policies for all documentation within the "Physical AI & Humanoid Robotics Course Documentation" project. Adhering to these guidelines ensures consistency, clarity, academic rigor, and proper attribution throughout the course materials.

## 1. General Writing Style

### 1.1. Tone and Voice

-   **Academic and Objective**: Maintain an objective, formal, and academic tone. Avoid colloquialisms, slang, or overly casual language.
-   **Direct and Concise**: Get straight to the point. Use active voice over passive voice.
-   **Clear and Unambiguous**: Avoid jargon where simpler terms suffice. If technical terms are necessary, define them clearly (or refer to the `glossary.md`).
-   **Target Audience**: Write for an intermediate-advanced computer science and software engineering audience. Assume a foundational understanding of programming and basic AI concepts.

### 1.2. Readability

-   **Flesch-Kincaid Grade Level**: Aim for a Flesch-Kincaid Grade Level of 10-12. This ensures the content is challenging but accessible to the target demographic.
-   **Sentence Structure**: Vary sentence length. Avoid overly long, complex sentences.
-   **Paragraphs**: Keep paragraphs focused on a single idea. Break up long paragraphs for better readability.

### 1.3. Terminology

-   **Consistency**: Use consistent terminology throughout the documentation. Refer to the `glossary.md` for approved terms.
-   **Acronyms**: Define acronyms on their first use (e.g., "Robot Operating System 2 (ROS 2)").

## 2. APA (7th Edition) Citation Enforcement

All factual claims, data, figures, and direct quotes MUST be properly cited using APA 7th edition style.

### 2.1. In-text Citations

-   **Author-Date System**: Use the author-date system for in-text citations (e.g., (Smith, 2020) or Smith (2020) argued...).
-   **Multiple Authors**:
    *   Two authors: (Smith & Jones, 2021)
    *   Three or more authors: (Brown et al., 2022)
-   **Direct Quotes**: Include page numbers for direct quotes (e.g., (Doe, 2019, p. 45)).

### 2.2. Reference List

-   All sources cited in the text MUST appear in a comprehensive reference list at the end of the module or in `references/references.bib`.
-   **Formatting**: The reference list must be formatted according to APA 7th edition guidelines. This includes:
    *   Alphabetical order by author's last name.
    *   Hanging indent for each entry.
    *   Proper capitalization, italics, and punctuation for titles, journal names, etc.
-   **BibTeX Integration**: Utilize `references/references.bib` for managing all BibTeX entries. Ensure that the BibTeX keys are consistent and meaningful.

### 2.3. Source Quality

-   **Peer-Reviewed**: At least 50% of all cited sources MUST be peer-reviewed (e.g., journal articles, conference papers).
-   **Recency**: Prioritize sources published within the last 10 years, especially for rapidly evolving fields like AI and robotics.
-   **Reputable**: Ensure sources are from credible academic institutions, research labs, established publishers, or recognized industry leaders.

## 3. Code Examples

-   **Consistency**: Follow PEP 8 for Python code and C++ coding standards for C++ code.
-   **Comments**: Use clear and concise comments to explain complex logic.
-   **Reproducibility**: All code examples MUST be functional and reproducible. Provide all necessary setup instructions and dependencies.

## 4. Markdown Formatting

-   **Headings**: Use Markdown headings (`#`, `##`, `###`) appropriately to structure content logically.
-   **Code Blocks**: Use fenced code blocks (```python) for all code snippets, specifying the language.
-   **Lists**: Use ordered or unordered lists for items.
-   **Internal Links**: Use relative paths for internal links within the Docusaurus site.

---
*Note: This guide is a living document and may be updated. Refer to the latest version for current guidelines.*
