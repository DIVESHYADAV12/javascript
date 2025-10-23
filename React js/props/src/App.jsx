import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
    <Card user='Divesh Yadav' age={20} img='https://images.unsplash.com/photo-1761165308325-e54c62985813?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=800' />
    <Card user='Ankesh Yadav' age={22} img='https://images.unsplash.com/photo-1760615302825-900295f63a2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=800' />
    <Card user='Karan Yadav' age={21} img='https://images.unsplash.com/photo-1760895986008-0a016173836c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=800' />
    </div>
  )
}

export default App
