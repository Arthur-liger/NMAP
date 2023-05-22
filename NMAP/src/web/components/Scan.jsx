import Link from "@/web/components/Link.jsx"
// import { Fragment } from "react"

const Scan = (props) => {
  const {
    scan: { _id, IP, result },
  } = props

  return (
    <article className="flex flex-col gap-2">
      <header>
        <h1 className="text-lg font-semibold">
          <Link href={`/posts/${_id}`}>{IP}</Link>
        </h1>
      </header>
      <div className="flex flex-col gap-2">
        {result}
      </div>
    </article>
  )
}

export default Scan
