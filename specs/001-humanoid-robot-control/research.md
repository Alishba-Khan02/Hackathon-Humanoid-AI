# Research Findings for AI/Spec-Driven Book Creation: Humanoid Robot Control

## Phase 0: Technical Clarifications

### 1. Optimal Python and ROS 2 Versions

- **Decision**: Python 3.10 and ROS 2 Humble.
- **Rationale**: Python 3.10 is widely supported and offers good performance. ROS 2 Humble is a long-term support (LTS) release, ensuring stability and long-term compatibility, and is well-integrated with current robotics tools and platforms.
- **Alternatives Considered**: Python 3.8 (older, less features), Python 3.11 (newer, but might have less ROS 2 package support), ROS 2 Iron (newer, but not LTS and potentially less stable).

### 2. Suitable VLA (Visual Language-Action) Framework/Library

- **Decision**: Adopt a modular approach, leveraging existing open-source components for VLA. Specifically, for visual perception, use libraries like OpenCV and potentially pre-trained vision transformers. For language understanding, integrate with open-source LLMs like Llama 2 or Mixtral through their APIs, and for action generation, use ROS 2 action servers with behavior trees.
- **Rationale**: This approach offers flexibility and avoids reliance on a single proprietary or unproven VLA framework. It allows leveraging robust, well-maintained components for each part of the VLA pipeline.
- **Alternatives Considered**: Developing a custom VLA framework from scratch (high effort, high risk), using a nascent all-in-one VLA framework (potential for instability, limited community support).

### 3. Storage for Citations and References

- **Decision**: Store all citations and references in a BibTeX file (`references.bib`) within the `references/` directory. Docusaurus can be configured with plugins to render these citations in APA 7th edition style within the generated book.
- **Rationale**: BibTeX is a standard format for bibliographies, making it easy to manage, export, and integrate with academic tools. Docusaurus plugins provide seamless rendering. This avoids the need for a separate database, simplifying the stack.
- **Alternatives Considered**: Embedding citations directly in Markdown (hard to manage, difficult to reformat), using a lightweight database (unnecessary complexity for just citations).

### 4. Specific NVIDIA Jetson Kits for Deployment

- **Decision**: NVIDIA Jetson Orin Nano (developer kit).
- **Rationale**: The Jetson Orin Nano offers excellent AI performance at the edge, is cost-effective for educational/lab settings, and is well-supported by NVIDIA's software stack (JetPack, ROS 2 integration). It provides a good balance of capability and accessibility for students.
- **Alternatives Considered**: Jetson Xavier NX (older generation, less powerful), Jetson AGX Orin (more powerful but significantly higher cost, potentially overkill for initial course modules).
