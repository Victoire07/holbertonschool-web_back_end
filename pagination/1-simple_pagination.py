#!/usr/bin/env python3
"""
Task1 -> Simple pagination
"""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Returns a tuple of size two containing a start index and an end index.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Renvoie une page spécifique de l'ensemble de données.

        Arguments :
        °page (int) : numéro de la page à récupérer (indexée à partir de 1).
        °0 page_size (int) : nombre d'éléments par page.

        Retour:
        ° List[List] : une sous-liste de l'ensemble de données correspondant
        à la page demandée. Retourne une liste vide sil'index de départ est en
        dehors de la plage de l'ensemble de données.

        Lève :
        ° AssertionError : si `page` ou `page_size` ne sont pas des entiers positifs.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.dataset()

        start, end = index_range(page, page_size)

        if start >= len(data):
            return []

        return data[start:end]
