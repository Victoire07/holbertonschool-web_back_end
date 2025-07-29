#!/usr/bin/env python3
"""
Task 2: Run time for four parallel comprehensions
"""
import time
import asyncio
async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime():
    """
    Mesure le temps total pour exécuter 4 fois async_comprehension en parallèle
    """
