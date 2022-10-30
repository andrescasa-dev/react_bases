import Card from "./components/Card"
import Stats from "./components/Stats"
import cards from "./data/cards"

export default function App() {
  const cardComponents = cards.map(card =>{
    return (
      <Card key={card.id} {...card}>
        <Stats {...card.stats}/>
      </Card>
    )
  })
  return (
    <div className="flex gap-3 m-10">
      {cardComponents}
    </div>
  )
}
