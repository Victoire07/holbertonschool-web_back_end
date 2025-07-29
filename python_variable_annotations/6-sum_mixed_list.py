#!/usr/bin/env python3
"""
Task6: Complex types - mixed list
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Retourne la somme d’une liste contenant des entiers et des flottants
    """
    return (sum(mxd_lst))
