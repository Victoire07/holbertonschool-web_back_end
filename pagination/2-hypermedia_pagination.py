#!/usr/bin/env python3
"""
Task2 -> Hypermedia pagination
"""
from typing import Tuple, List, Dict
import csv
import math


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
        ° AssertionError : si `page` ou `page_size` ne sont pas
        des entiers positifs.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.dataset()

        start, end = index_range(page, page_size)

        if start >= len(data):
            return []

        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """
        Docstring a faire après ave chcat
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        data = self.get_page(page, page_size)

        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        prev_page = page - 1 if page > 1 else None
        next_page = page + 1 if page < total_pages else None

        return {
        "page_size": len(data),  # taille réelle de la page renvoyée
        "page": page,
        "data": data,
        "next_page": next_page,
        "prev_page": prev_page,
        "total_pages": total_pages,
        }



