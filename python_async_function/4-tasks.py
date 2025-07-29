#!/usr/bin/env python3
"""
Task 4: Tasks
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    """
    task_list = []
    for i in range(n):
        task_list.append(task_wait_random(max_delay))
    
    results = []
    for task in asyncio.as_completed(task_list):
        result = await task
        results.append(result)
    return (results)
