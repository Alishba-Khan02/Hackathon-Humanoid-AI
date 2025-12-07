# Simulation Environment Setup: Gazebo and NVIDIA Isaac Sim

This document provides guidance on setting up Gazebo and NVIDIA Isaac Sim, the primary simulation environments for developing and testing humanoid robotics applications without physical hardware.

## Prerequisites

-   Workstation with a powerful CPU and a dedicated NVIDIA GPU.
-   [Workstation Environment Setup: Python 3.10 and ROS 2 Humble](workstation_env.md) completed.
-   Sufficient disk space for simulator installations and assets.

## 1. Gazebo Simulation Environment

Gazebo is an open-source 3D robotics simulator widely used with ROS 2.

### 1.1. Installation

Gazebo is typically installed alongside ROS 2. You can verify its installation by running:

```bash
gazebo --version
```

If you need to install it separately, follow the official Gazebo installation guide for your ROS 2 version (e.g., for Humble):

```bash
sudo apt install ros-humble-gazebo-ros-pkgs
```

### 1.2. Basic Usage

To launch a basic Gazebo simulation:

```bash
gazebo
```

You can then load robot models and environments.

## 2. NVIDIA Isaac Sim

NVIDIA Isaac Sim is a scalable robotics simulation application and synthetic data generation tool built on NVIDIA Omniverse. It provides high-fidelity physics and realistic rendering.

### 2.1. Installation

Isaac Sim requires an NVIDIA GPU and is installed via the NVIDIA Omniverse Launcher.

1.  **Install NVIDIA Drivers**: Ensure your NVIDIA GPU drivers are up to date.
2.  **Install NVIDIA Omniverse Launcher**:
    *   Download and install the [NVIDIA Omniverse Launcher](https://www.nvidia.com/omniverse/download/launch-app/) for your operating system (Linux/Windows).
    *   Follow the on-screen instructions to install.
3.  **Install Isaac Sim**:
    *   Open the Omniverse Launcher.
    *   Navigate to the "Exchange" tab and search for "Isaac Sim".
    *   Click "Install" and follow the prompts to install the application.

### 2.2. Basic Usage

To launch Isaac Sim:

```bash
# From the Omniverse Launcher, click "Launch" for Isaac Sim
```

You can then load sample scenes or create your own environments and import robot models.

## Next Steps

With your simulation environments set up, you are ready to begin developing and testing humanoid robot behaviors in a virtual setting. Refer to the specific module documentation for details on using these simulators for navigation, manipulation, and interaction tasks.

---
*Note: Always refer to the official Gazebo and NVIDIA Isaac Sim documentation for the most current and detailed setup instructions.*