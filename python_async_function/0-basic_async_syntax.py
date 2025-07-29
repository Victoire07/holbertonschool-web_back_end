#!/usr/bin/env python3
"""
Task 0: The basics of async
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Fonction qui attend un délai aléatoire compris
    entre 0 et max_delay (inclus),
    puis retourne ce délai en secondes sous forme de float
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return (delay)
