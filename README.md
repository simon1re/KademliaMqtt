###Introduction
This project implements an IoT system that uses the MQTT protocol for communication and a Kademlia-based peer-to-peer network for device discovery and management. The project is written in Python and can be used as a starting point for building decentralized IoT systems.

Requirements
Python 3.x
paho-mqtt library for Python
kademlia library for Python
A broker that supports MQTT protocol(Mosquitto, HiveMQ etc)
Installation
Install Python 3.x on your system
Clone the repository
Install the required libraries using pip:
Copy code
pip install paho-mqtt kademlia
Start the broker
Run the peer.py file to start a peer on the network.
Run the publisher.py and subscriber.py files to send and receive messages respectively
Usage
The system can be used to create a decentralized IoT network where devices can discover and communicate with each other using the MQTT protocol and the Kademlia-based P2P network. The system can be easily extended to include additional functionality such as data storage, data processing, and more.

Contributing
We welcome contributions to this project. If you're interested in contributing, please fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
