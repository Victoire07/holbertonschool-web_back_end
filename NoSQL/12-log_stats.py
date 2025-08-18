#!/usr/bin/env python3
"""
Task12: Log stats
"""
from pymongo import MongoClient
client = MongoClient()
db = client.logs
collection = db.nginx

total_logs = collection.count_documents({})
print(f"{total_logs} logs")

print("Methods:")

get_count = collection.count_documents({"method": "GET"})
print(f"\tmethod GET: {get_count}")

post_count = collection.count_documents({"method": "POST"})
print(f"\tmethod POST: {post_count}")











