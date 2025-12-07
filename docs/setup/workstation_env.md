# Workstation Environment Setup: Python 3.10 and ROS 2 Humble

This document outlines the steps to set up a development workstation with Python 3.10 and ROS 2 Humble, which are essential for developing and simulating humanoid robotics applications.

## Prerequisites

-   Operating System: Ubuntu 22.04 LTS (Jammy Jellyfish) is recommended for full compatibility with ROS 2 Humble.
-   Administrative privileges on your workstation.

## 1. Install Python 3.10

Ubuntu 22.04 typically comes with Python 3.10 installed. You can verify this by running:

```bash
python3.10 --version
```

If it's not installed or you need to manage multiple Python versions, consider using `pyenv` or `conda`.

## 2. Install ROS 2 Humble Hawksbill

Follow the official ROS 2 Humble installation guide for Ubuntu (Debian packages):

### 2.1. Set Locale

Ensure you have a `UTF-8` locale.

```bash
locale  # check for UTF-8

sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

locale  # verify settings
```

### 2.2. Add ROS 2 Repository

```bash
sudo apt install software-properties-common
sudo add-apt-repository universe

sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

### 2.3. Install ROS 2 Packages

```bash
sudo apt update
sudo apt upgrade

# Desktop Install (Recommended)
sudo apt install ros-humble-desktop

# Development Tools
sudo apt install ros-dev-tools
```

### 2.4. Source ROS 2 Setup

```bash
source /opt/ros/humble/setup.bash
```

It's recommended to add this to your `~/.bashrc` or `~/.zshrc` for persistent sourcing.

## 3. Python Package Management

Use `pip` to install Python dependencies for your ROS 2 projects.

```bash
python3 -m pip install -U pip
python3 -m pip install -U setuptools rosdep
```

## Next Steps

After setting up your workstation, you can proceed to set up your [Simulation Environment](simulation_env.md) and begin developing ROS 2 applications.

---
*Note: This is a basic outline. Refer to the official ROS 2 documentation for the most up-to-date and detailed installation instructions.*
