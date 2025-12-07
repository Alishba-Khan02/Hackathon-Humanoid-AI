# NVIDIA Jetson Orin Nano Setup and JetPack Installation

This document provides instructions for setting up your NVIDIA Jetson Orin Nano Developer Kit and installing the JetPack SDK, which is crucial for deploying and running ROS 2 applications on the edge.

## Prerequisites

-   NVIDIA Jetson Orin Nano Developer Kit
-   High-speed microSD card (64GB or larger, A1 or U3 rated)
-   Power supply for Jetson Orin Nano
-   Display, keyboard, and mouse
-   Workstation with internet access for flashing the microSD card

## 1. Prepare the microSD Card

You need to flash the JetPack SDK onto your microSD card. NVIDIA provides a tool called `SDK Manager` or you can use `Etcher` with the JetPack OS image.

### Option 1: Using NVIDIA SDK Manager (Recommended for first-time setup)

1.  **Download NVIDIA SDK Manager**: Go to the [NVIDIA Developer website](https://developer.nvidia.com/embedded/jetpack) and download the SDK Manager for your host operating system (typically Ubuntu Linux).
2.  **Install SDK Manager**: Follow the installation instructions provided by NVIDIA.
3.  **Launch SDK Manager**:
    ```bash
    sdkmanager
    ```
4.  **Log In**: Log in with your NVIDIA Developer account.
5.  **Select Hardware**: Select "Jetson Orin Nano Developer Kit" as your target hardware.
6.  **Select JetPack Version**: Choose the latest stable JetPack version (e.g., JetPack 5.1.2 or newer).
7.  **Flash OS**: Follow the on-screen instructions to download the JetPack components and flash the OS onto your microSD card. This process typically involves:
    *   Connecting your Jetson Orin Nano to the host PC in recovery mode.
    *   Selecting "Full" installation (OS and SDK components).
    *   Providing your host PC's sudo password for installation.

### Option 2: Manual Flashing with Etcher

1.  **Download JetPack OS Image**: From the [NVIDIA Developer website](https://developer.nvidia.com/embedded/jetpack), download the appropriate JetPack OS image for the Jetson Orin Nano.
2.  **Download Etcher**: Get [Balena Etcher](https://www.balena.io/etcher/) for your operating system.
3.  **Flash Image**:
    *   Insert your microSD card into your workstation.
    *   Open Etcher and select the downloaded JetPack OS image.
    *   Select your microSD card as the target device.
    *   Click "Flash!" and wait for the process to complete.

## 2. Boot Your Jetson Orin Nano

1.  Insert the flashed microSD card into your Jetson Orin Nano.
2.  Connect a display, keyboard, and mouse.
3.  Connect the power supply.
4.  The Jetson will boot up, and you will be guided through the initial Ubuntu setup (create user, set timezone, etc.).

## 3. Verify JetPack Installation

After booting, you can verify the JetPack installation:

```bash
sudo apt-cache show nvidia-jetpack
```
This command should show information about the installed JetPack version and its components.

## Next Steps

With JetPack installed, your Jetson Orin Nano is ready for ROS 2 deployment. Refer to the documentation on [Deploying ROS 2 Nodes to Jetson Kits](../modules/jetson_deployment.md) for further instructions.

---
*Note: Always refer to the official NVIDIA documentation for the most current and detailed setup instructions.*
