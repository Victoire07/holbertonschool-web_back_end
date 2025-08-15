#!/usr/bin/env python3
"""
Task10: Change school topics
"""
def update_topics(mongo_collection, name, topics):
    """
    Met à jour le champ 'topics' pour tous les documents correspondant à un nom donné.

    Args:
        mongo_collection (pymongo.collection.Collection):
            La collection MongoDB à mettre à jour.
        name (str):
            Le nom de l'école dont les documents doivent être modifiés.
        topics (list of str):
            La nouvelle liste de sujets à associer à l'école.

    Returns:
        None: Cette fonction ne retourne rien. Elle modifie directement
              les documents dans la collection.
    """
    return mongo_collection.update_many({"name": name},
                                    {"$set":{"topics" :topics}})
