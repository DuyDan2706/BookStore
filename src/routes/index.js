const { default: BookDetail } = require('../page/BookDetail/BookDetail')
const { default: BookList } = require('../page/BookList/BookList')

const { default: NotFoundPage } = require('../page/NotFoundPage/NotFoundPage')

export const routes = [
  {
    path: '/',
    page: BookList,
    isShowHeader: true
  },
  {
    path: '/:id',
    page: BookDetail,
    isShowHeader: true
  },
  {
    path: '*',
    page: NotFoundPage
  }
]
