#!/usr/bin/env python3
"""
Task9: Let's duck type an iterable object
"""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst):
    return [(i, len(i)) for i in lst]
