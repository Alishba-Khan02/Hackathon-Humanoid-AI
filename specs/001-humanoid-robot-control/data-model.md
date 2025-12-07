# Data Model: AI/Spec-Driven Book Creation: Humanoid Robot Control

This document outlines the key conceptual entities relevant to the educational content, focusing on their definitions and relationships within the context of Physical AI and Humanoid Robotics.

## Conceptual Entities

### 1. Humanoid Robot
- **Description**: A robotic system designed to mimic human form and movement, capable of locomotion, manipulation, and interaction. Represents both simulated and physical instances.
- **Attributes**:
    - `type`: (Simulated, Physical)
    - `capabilities`: (Locomotion, Manipulation, Conversation)
    - `hardware_specs`: (e.g., actuators, sensors, compute) - *Relevant for Physical Robots*
    - `simulation_model`: (e.g., URDF, SDFormat) - *Relevant for Simulated Robots*
- **Relationships**:
    - `interacts_with`: Simulated Environment, Physical Environment
    - `controlled_by`: ROS 2 Node, Jetson Kit, LLM, VLA

### 2. Environment
- **Description**: The context in which a Humanoid Robot operates.
- **Types**:
    - **Simulated Environment**: A virtual world (e.g., Gazebo, NVIDIA Isaac Sim) where robot behaviors can be tested without physical hardware.
        - `attributes`: `physics_engine`, `rendering_engine`, `asset_library`
        - `contains`: simulated_objects
    - **Physical Environment**: The real-world setting where a Physical Robot operates.
        - `attributes`: `real_world_obstacles`, `interaction_zones`
        - `contains`: real_world_objects
- **Relationships**:
    - `hosts`: Humanoid Robot (Simulated/Physical)

### 3. ROS 2 Node
- **Description**: A processing unit in the ROS 2 graph responsible for a specific task (e.g., navigation, sensor processing, motor control, perception).
- **Attributes**:
    - `function`: (e.g., navigation, perception, control, planning, communication)
    - `language`: (Python, C++)
    - `topic_subscriptions`: (list of ROS 2 topics it subscribes to)
    - `topic_publications`: (list of ROS 2 topics it publishes to)
    - `service_clients`: (list of ROS 2 services it uses)
    - `service_servers`: (list of ROS 2 services it provides)
- **Relationships**:
    - `runs_on`: Jetson Kit, Workstation
    - `controls`: Humanoid Robot
    - `communicates_via`: ROS 2 Topics/Services

### 4. Jetson Kit
- **Description**: An NVIDIA embedded computing platform used for deploying AI models to edge devices and controlling physical robots.
- **Attributes**:
    - `model`: (e.g., Orin Nano, Xavier NX)
    - `compute_capacity`: (e.g., TOPS, GPU cores)
    - `memory_size`: (GB)
    - `software_stack`: (e.g., JetPack version, CUDA version)
- **Relationships**:
    - `hosts`: ROS 2 Node, AI Model
    - `connected_to`: Physical Robot, Sensors

### 5. Large Language Model (LLM)
- **Description**: An AI model capable of understanding and generating human-like text, used for conversational interaction and high-level reasoning.
- **Attributes**:
    - `model_name`: (e.g., Llama 2, Mixtral, GPT)
    - `hosting`: (local, cloud API)
    - `interface`: (text, speech-to-text, text-to-speech)
- **Relationships**:
    - `integrates_with`: VLA
    - `provides_input_to`: Humanoid Robot (for conversational responses)

### 6. Visual Language-Action (VLA)
- **Description**: A conceptual framework or system that connects visual perception and language understanding to generate robot actions. It bridges high-level human commands with low-level robot control.
- **Components**:
    - `Visual Perception`: Interprets camera/sensor data (e.g., object detection, scene understanding).
    - `Language Understanding`: Processes natural language commands/queries from LLM or human.
    - `Action Planning`: Translates understanding into a sequence of robot actions.
    - `Robot Control Interface`: Executes actions via ROS 2.
- **Relationships**:
    - `integrates_with`: LLM, ROS 2 Node, Humanoid Robot
    - `uses`: Simulated Environment, Physical Environment data

### 7. Educational Module
- **Description**: A structured unit of learning content within the course, covering specific topics related to Physical AI and humanoid robotics.
- **Attributes**:
    - `title`: (e.g., "ROS 2 Fundamentals", "NVIDIA Isaac AI Platform")
    - `learning_outcomes`: (list of what students should achieve)
    - `word_count`: (e.g., 3000-5000 words)
    - `lab_exercises`: (associated practical labs)
- **Relationships**:
    - `contains`: Chapters, Lab Setups
    - `references`: Citations

### 8. Lab Setup
- **Description**: The specific hardware and software configuration required for students/researchers to conduct experiments and exercises.
- **Attributes**:
    - `type`: (Workstation, Edge Kit)
    - `hardware_specs`: (CPU, GPU, RAM, sensors, actuators)
    - `software_stack`: (OS, drivers, ROS 2 distribution, simulation software)
- **Relationships**:
    - `used_in`: Educational Module
    - `hosts`: Humanoid Robot (Physical)
    - `interacts_with`: Simulated Environment (from Workstation)

### 9. Citation
- **Description**: A reference to a source of information (e.g., peer-reviewed article, book, technical report) used to support claims within the documentation.
- **Attributes**:
    - `APA_format`: (APA 7th edition formatted string)
    - `type`: (e.g., journal_article, book, conference_paper)
    - `source_url`: (if available)
- **Relationships**:
    - `supports`: Educational Module (factual claims)
    - `stored_in`: references.bib