#!/usr/bin/env python3
"""
Task1 : Async Comprehensions
"""
async_generator = __import__("0-async_generator").async_generator


async def async_comprehension():
    """
    Coroutine collecte 10 nombres aléatoires générés par un
    générateur asynchrone et les retourne sous forme de liste
    """
    return [val async for val in async_generator()]
