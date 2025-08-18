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

put_count = collection.count_documents({"method": "PUT"})
print(f"\tmethod PUT: {put_count}")

patch_count = collection.count_documents({"method": "PATCH"})
print(f"\tmethod PATCH: {patch_count}")

delete_count = collection.count_documents({"method": "DELETE"})
print(f"\tmethod DELETE: {delete_count}")

status_check = collection.count_documents({"method": "GET", "path": "/status"})
print(f"{status_check} status check")
