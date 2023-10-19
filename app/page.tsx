import Image from 'next/image'

export default function Home() {
  let preçoPicanha = 10
  let quantidade = 10
  return (
    <h1>
      <p>
        preço kg picanha: {preçoPicanha}
      </p>
      <p>
        eu comprei {quantidade} kg
      </p>
      <p>
        e eu vou pagar: {quantidade*preçoPicanha}
      </p>
    </h1>
  )
}
