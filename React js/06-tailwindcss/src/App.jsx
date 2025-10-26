import React from 'react'
import Page1 from './components/page1/page1'
import Page2 from './components/page2/Page2'
import Page3 from './components/page3/Page3'
import Page4 from './components/page4/Page4'

const App = () => {
  const Coffee = [
    {
      img:"https://i.pinimg.com/736x/4d/1f/cd/4d1fcd6ef27507e9ed7e3041cffac8ba.jpg",
      type:'Espresso',
      about:'Concentrated, bold, strong flavor'
    },
    {
      img:"https://i.pinimg.com/736x/4d/1f/cd/4d1fcd6ef27507e9ed7e3041cffac8ba.jpg",
      type:'Latte',
      about:'Creamy, steamed milk, light foam'
    },
    {
      img:"https://i.pinimg.com/736x/4d/1f/cd/4d1fcd6ef27507e9ed7e3041cffac8ba.jpg",
      type:'Cold Brew',
      about:'Steeped cold, smooth, low acidity'
    },
    {
      img:"https://i.pinimg.com/736x/4d/1f/cd/4d1fcd6ef27507e9ed7e3041cffac8ba.jpg",
      type:'Cappuccino',
      about:'Rich espresso, steamed milk foam'
    },
    {
      img:"https://i.pinimg.com/736x/4d/1f/cd/4d1fcd6ef27507e9ed7e3041cffac8ba.jpg",
      type:'Americano',
      about:'Espresso shots diluted with hot water'
    },
    {
      img:"https://i.pinimg.com/736x/4d/1f/cd/4d1fcd6ef27507e9ed7e3041cffac8ba.jpg",
      type:'Macchiato',
      about:"Espresso 'stained' with milk foam"
    },
    {
      img:"https://i.pinimg.com/736x/4d/1f/cd/4d1fcd6ef27507e9ed7e3041cffac8ba.jpg",
      type:'Mocha',
      about:'Rich espresso, chocolate, and milk'
    },
    {
      img:"https://i.pinimg.com/736x/4d/1f/cd/4d1fcd6ef27507e9ed7e3041cffac8ba.jpg",
      type:'Affogato',
      about:'Espresso poured over ice cream'
    }
  ]
  const CoffeeData = [
    {
      img: "https://i.pinimg.com/736x/4c/28/e2/4c28e2420bf38c50120dba0cbaf42e8d.jpg",
      name: 'Espresso',
    },
    {
      img: "https://i.pinimg.com/736x/32/58/39/32583955510da20a6abdb21eb9aa7e7d.jpg",
      name: 'Latte',
    },
    {
      img: "https://i.pinimg.com/736x/7a/44/cf/7a44cf273b0843e98127ca86f826ea77.jpg",
      name: 'Cappuccino',
    },
    {
      img: "https://dolo.com.au/cdn/shop/articles/522979505-shutterstock_1973536478.jpg?v=1690528484",
      name: 'Americano',
    },
    {
      img: "https://i.pinimg.com/736x/d7/23/3a/d7233a04fd31b7c6e93a2f62fd454c78.jpg",
      name: 'Mocha',
    },
    {
      img: "https://i.pinimg.com/736x/42/5c/aa/425caa66ba0674128dc5806dbd612b02.jpg",
      name: 'Macchiato',
    },
    {
      img: "https://i.pinimg.com/1200x/0a/31/6b/0a316bec14a788b256d455e937beb236.jpg",
      name: 'Flat White',
    },
    {
      img: "https://i.pinimg.com/736x/95/aa/51/95aa513f1849fbe15beb565aada052cb.jpg",
      name: 'Cold Brew',
    }
  ];
  
  return (
    <div>
      <Page1 />
      <Page2 Coffee={Coffee}/>
      <Page3 />
      <Page4 CoffeeData={CoffeeData}/>
    </div>
  )
}

export default App
