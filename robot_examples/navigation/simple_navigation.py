#!/usr/bin/env python3

import rclpy
from rclpy.node import Node
from geometry_msgs.msg import PoseStamped
from nav2_simple_commander.robot_navigator import BasicNavigator
import time

class SimpleNavigator(Node):
    def __init__(self):
        super().__init__('simple_navigator')
        self.navigator = BasicNavigator()

    def go_to_pose(self, x, y, yaw_deg):
        # Set our demo's initial pose
        initial_pose = PoseStamped()
        initial_pose.header.frame_id = 'map'
        initial_pose.header.stamp = self.navigator.get_clock().now().to_msg()
        initial_pose.pose.position.x = 0.0
        initial_pose.pose.position.y = 0.0
        initial_pose.pose.orientation.z = 0.0
        initial_pose.pose.orientation.w = 1.0
        self.navigator.setInitialPose(initial_pose)

        # Wait for Nav2 to activate
        self.navigator.waitUntilNav2Active()

        # Set our demo's goal pose
        goal_pose = PoseStamped()
        goal_pose.header.frame_id = 'map'
        goal_pose.header.stamp = self.navigator.get_clock().now().to_msg()
        goal_pose.pose.position.x = x
        goal_pose.pose.position.y = y
        goal_pose.pose.orientation.z = 0.0 # Placeholder for orientation
        goal_pose.pose.orientation.w = 1.0 # Placeholder for orientation
        
        # You would typically convert yaw_deg to quaternion here
        # For simplicity, using 0 orientation

        self.navigator.goToPose(goal_pose)

        i = 0
        while not self.navigator.isTaskComplete():
            i = i + 1
            feedback = self.navigator.getFeedback()
            if feedback and i % 5 == 0:
                self.get_logger().info('Distance remaining: ' + '{:.2f}'.format(feedback.distance_remaining) +
                                       ' meters.')
            
            # Add some logic to monitor for task failures, timeouts etc.
            # You can also periodically update the goal or send a new one
            # if the robot is stuck or a better path is found.
            time.sleep(1)

        result = self.navigator.getResult()
        if result == BasicNavigator.TaskResult.SUCCEEDED:
            self.get_logger().info('Goal succeeded!')
        elif result == BasicNavigator.TaskResult.CANCELED:
            self.get_logger().info('Goal was canceled!')
        elif result == BasicNavigator.TaskResult.FAILED:
            self.get_logger().info('Goal failed!')
        else:
            self.get_logger().info('Goal has an invalid return status!')

        self.navigator.lifecycleShutdown()
        
def main(args=None):
    rclpy.init(args=args)
    navigator_node = SimpleNavigator()
    # Example: Go to (5.0, 5.0) with 0 yaw
    navigator_node.go_to_pose(5.0, 5.0, 0.0)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
