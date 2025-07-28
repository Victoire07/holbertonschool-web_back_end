#!/usr/bin/env python3
"""
Task7: Complex types - string and int/float to tuple
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Retourne un tuple contenant une chaîne et le carré d’un nombre,
    sous forme de float
    """
    return (k, float(v * v))
