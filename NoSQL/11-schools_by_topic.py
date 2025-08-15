#!/usr/bin/env python3
"""
Task11: Where can I learn Python?
"""
def schools_by_topic(mongo_collection, topic):
    """
     Retourne la liste des écoles ayant un sujet spécifique dans leur champ 'topics'.

    Args:
        mongo_collection (pymongo.collection.Collection):
            La collection MongoDB à interroger.
        topic (str):
            Le sujet à rechercher dans la liste 'topics' des écoles.

    Returns:
        list: Une liste de documents (dictionnaires) correspondant
              aux écoles qui contiennent le sujet donné.
              Retourne une liste vide si aucune école ne correspond.
    """
    return list(mongo_collection.find({"topics": topic}))
