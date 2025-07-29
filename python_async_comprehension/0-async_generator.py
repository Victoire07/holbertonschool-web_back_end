#!/usr/bin/env python3
"""
Task 0: Async Generator
"""
import asyncio
import random


async def async_generator():
    """
    Générateur asynchrone qui boucle 10 fois
    À chaque itération, attend 1 seconde et génère un float aléatoire
    entre 0 et 10
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
