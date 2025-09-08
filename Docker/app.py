from flask import Flask
from redis import Redis
import os
import socket

app = Flask(__name__)
redis = Redis(host=os.environ.get('REDIS_HOST', '127.0.0.1'), port=6379)

@app.route('/')
def hello():
    redis.incr('hits')  # incrementa o contador
    count = redis.get('hits').decode('utf-8')  # lê o mesmo contador
    hostname = socket.gethostname()
    return f"This webpage has been viewed {count} times and hostname is {hostname}.\n"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
