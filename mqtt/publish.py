import paho.mqtt.client as paho
import sys
import random
import datetime
import logging
import asyncio
import sys
from kademlia.network import Server

date=str(datetime.datetime.now().strftime("%Y%m%d%H%M%S"))
client=paho.Client("p1")
if client.connect("localhost",1883,600) !=0:
    print("Could not connect")
    sys.exit(-1)
proximity=str(random.randint(1000,2000))
topic=proximity + " "+ date
client.publish("test",topic,qos=1,retain=True)
print("published")
client.disconnect()


key= "key"
node="127.0.0.1"
port="8469"
async def run():
    server = Server()
    await server.listen(8490,interface="127.0.0.1")
    bootstrap_node = (node, int(port))
    await server.bootstrap([bootstrap_node])
    await server.set(key, topic)
    #await server.set(key, value)
    
    server.stop()

asyncio.run(run())