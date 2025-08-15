#!/usr/bin/env python3
"""
Task9: Insert a document in Python
"""
def insert_school(mongo_collection, **kwargs):
    """
    Insère un nouveau document dans une collection MongoDB.

    Args:
        mongo_collection (pymongo.collection.Collection):
            La collection MongoDB dans laquelle insérer le document.
        **kwargs:
            Paires clé-valeur représentant les champs et valeurs
            du document à insérer.

    Returns:
        ObjectId: L'identifiant unique (_id) du document inséré.
    """
    return mongo_collection.insert_one(kwargs).inserted_id
