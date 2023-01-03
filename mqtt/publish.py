import paho.mqtt.client as paho
import sys

client=paho.Client("p1",clean_session=False)
if client.connect("localhost",1883,600) !=0:
    print("Could not connect")
    sys.exit(-1)

client.publish("test","Hello World",1)
print("published")
client.disconnect()