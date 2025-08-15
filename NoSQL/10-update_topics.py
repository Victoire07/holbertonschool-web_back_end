#!/usr/bin/env python3
"""
Task10: Change school topics
"""
def update_topics(mongo_collection, name, topics):
    """
    """
    return mongo_collection.update(name).update(topics)
