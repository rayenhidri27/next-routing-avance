import Link from 'next/link'

const page = async ({
  params,
}: {
  params: Promise<{ subcategories: string[] }>
}
) => {
  const { subcategories } = await params
  return (
    <div>
      My SUB Categories :
      <ul>
        {subcategories.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
      <Link href="/final/dynamic/shop/home">back</Link>
    </div>
  )
}

export default page


