export interface ICategoryBook {
  id: string,
  title: string,
  count?: number,
  to: string,

}


export function useMakeNavigate() {

  const allBooks = {
    id: '1',
    title: 'Вcе книги',
    to: 'books/all',

  }

  const businessBooks = {
    id: '2',
    title: 'Бизнес-книги',
    count: 14,
    to: 'books/business'
  }

  const detectivesBooks = {
    id: '3',
    title: 'Детективы',
    count: 8,
    to: 'books/detective'
  }

  const childrenBooks = {
    id: '4',
    title: 'Детские книги',
    count: 14,
    to: 'books/children'
  }

  const foreignBooks = {
    id: '5',
    title: 'Зарубежная литература',
    count: 2,
    to: 'books/foreign'
  }

  const historyBooks = {
    id: '6',
    title: 'История',
    count: 5,
    to: 'books/history'
  }

  const classicBooks = {
    id: '7',
    title: 'Классическая литература',
    count: 12,
    to: 'books/classic'
  }

  const psychologyBooks = {
    id: '8',
    title: 'Книги по психологии',
    count: 11,
    to: 'books/psychology'
  }

  const computerBooks = {
    id: '9',
    title: 'Компьютерная литература',
    count: 54,
    to: 'books/computer'
  }

  const artBooks = {
    id: '10',
    title: 'Культура и искусство',
    count: 5,
    to: 'books/art'
  }

  const scienceBooks = {
    id: '11',
    title: 'Наука и образование',
    count: 2,
    to: 'books/science'
  }

  const nonfictionBooks = {
    id: '12',
    title: 'Публицистическая литература',
    count: 0,
    to: 'books/nonfiction'
  }

  const referenceBooks = {
    id: '13',
    title: 'Справочники',
    count: 10,
    to: 'books/reference'
  }

  const fantasyBooks = {
    id: '14',
    title: 'Фантастика',
    count: 12,
    to: 'books/fantasy'
  }

  const humorousBooks = {
    id: '15',
    title: 'Юмористическая литература',
    count: 8,
    to: 'books/humorous'
  }

  const categoryBooks: ICategoryBook[] = [allBooks, businessBooks, detectivesBooks, childrenBooks, foreignBooks, historyBooks, classicBooks, psychologyBooks, computerBooks, artBooks, scienceBooks, nonfictionBooks, referenceBooks, fantasyBooks, humorousBooks];

  return categoryBooks;
};
