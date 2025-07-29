#!/usr/bin/env python3
"""
Task 1: Let's execute multiple coroutines at the same time with async
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Générer wait_random n fois avec le max_delay spécifié.
    Renvoie la liste de tous les délais (valeurs flottantes)
    """
    all_tasks = [asyncio.create_task(wait_random(max_delay)) for i in range(n)]
    results = []
    for task in asyncio.as_completed(all_tasks):
        result = await task
        results.append(result)

    return results
