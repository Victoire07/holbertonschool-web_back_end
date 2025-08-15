#!/usr/bin/env python3
"""
Task8 -> List all documents in Python
"""
def list_all(mongo_collection):
    """
    Retourne tous les documents présents dans une collection MongoDB.

    Args:
        mongo_collection (pymongo.collection.Collection):
            La collection MongoDB à interroger.

    Returns:
        list: Une liste contenant tous les documents de la collection.
              Si la collection est vide, retourne une liste vide.
    """
    return list(mongo_collection.find())
