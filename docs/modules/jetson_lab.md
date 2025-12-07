## 6. Acceptance Test Verification

This section outlines the steps to verify the successful deployment and basic functionality of a ROS 2 node on an NVIDIA Jetson device, as defined in User Story 4. The goal is to ensure that cross-compiled nodes can be successfully transferred, executed, and respond to basic commands on the physical hardware.

### 6.1. Verification Steps

1.  **Deployment Verification**:
    *   Confirm that the cross-compiled ROS 2 package (e.g., `your_ros2_package`) has been successfully transferred to the Jetson's ROS 2 workspace (e.g., `~/ros2_ws/install/`).
    *   Verify that the ROS 2 environment on the Jetson is correctly sourced.

2.  **Node Launch and Status Check**:
    *   Attempt to launch the deployed ROS 2 node from the Jetson's terminal (e.g., `ros2 run your_ros2_package your_node_executable`).
    *   In a separate terminal on the Jetson, check the list of active ROS 2 nodes (`ros2 node list`) to confirm your node is running.
    *   Review the node's terminal output for any errors or warnings during startup.

3.  **Basic Command Testing**:
    *   If the node subscribes to a command topic (e.g., `cmd_vel` for a navigation node), publish a simple command to it:
        ```bash
        ros2 topic pub /cmd_vel geometry_msgs/msg/Twist '{linear: {x: 0.1}, angular: {z: 0.0}}' --once
        ```
    *   If the node publishes data, echo its topic to observe the output:
        ```bash
        ros2 topic echo /your_node_output_topic
        ```
    *   Observe the physical robot's response (if connected and the node controls it) or the simulation's response if the node is communicating with a simulated robot on the Jetson.

### 6.2. Expected Outcomes

-   The deployed ROS 2 node launches successfully on the NVIDIA Jetson.
-   The node appears in the `ros2 node list`.
-   The node responds correctly to basic commands (e.g., publishes expected data, controls physical/simulated robot as intended).
-   No critical errors or crashes are observed in the node's logs.

## Final Checkpoint for User Story 4

Upon successful completion of these verification steps, User Story 4 (Deploy ROS 2 Nodes to Jetson Kits) is considered fully functional and independently testable.