#!/usr/bin/env python3
"""
Task9: Let's duck type an iterable object
"""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Retourne une liste de 'tuple' avec les élements et leur longueur
    """
    return [(i, len(i)) for i in lst]
