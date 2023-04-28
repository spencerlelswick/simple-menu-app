import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Title from './components/Title'

import Categories from './components/Categories'
import menu from './mockdata/mockdata'

function App() {
  const allCategories = [
    'all',
    ...new Set(
      menu.map((item) => {
        return item.category
      })
    ),
  ]

  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    console.log(category)
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <div>
        <Header />
      </div>
      <section className='menu'>
        <Title text='Menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
