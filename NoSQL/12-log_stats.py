#!/usr/bin/env python3
"""
Task12: Log stats
"""
from pymongo import MongoClient
client = MongoClient()
db = client.logs
collection = db.nginx


collection.count_documents({})
print("x logs")

collection.count_documents({"method": "GET"})
print("GET")

collection.count_documents({"method": "POST"})
print("POST")

collection.count_documents({"method": "PUT"})
print("PUT")

collection.count_documents({"method": "DELETE"})
print("DELETE")

collection.count_documents({"method": "GET", "path": "/status"})
print("y status check")

