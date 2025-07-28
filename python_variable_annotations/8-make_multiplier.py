#!/usr/bin/env python3
"""
Task8: Complex types - functions
"""
from typing import Callable

def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Retourne une fonction qui multiplie un float donné par le multiplicateur
    """
    def multiply(value: float) -> float:
        """
        Multiplie `value` par le multiplicateur capturé et renvoie le résultat
        """
        return value * multiplier

    return multiply
