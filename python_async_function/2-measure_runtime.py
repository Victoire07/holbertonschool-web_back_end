#!/usr/bin/env python3
"""
Task2: Measure the runtime
"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n

def measure_time(n: int, max_delay: int) -> float:
    """
    Mesure le temps total d’exécution de wait_n(n, max_delay)
    et retourne la durée moyenne d’attente par coroutine.
    """
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end = time.perf_counter()
    duration = end - start
    return (duration / n)
