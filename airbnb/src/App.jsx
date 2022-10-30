import Card from "./components/Card"
import Stats from "./components/Stats"
import cards from "./data/cards"
import Header from "./components/Header"
import Hero from "./components/Hero"

export default function App() {
  const cardComponents = cards.map(card =>{
    return (
      <Card key={card.id} {...card}>
        <Stats {...card.stats}/>
      </Card>
    )
  })
  return (
    <div className="grid grid-cols-main pb-10">
      <Header />
      <Hero />
      <div className="flex gap-6 py-10 overflow-auto col-start-2">
        {cardComponents}
      </div>
    </div>
  )
}
