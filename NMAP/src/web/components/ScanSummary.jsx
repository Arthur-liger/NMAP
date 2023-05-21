import Link from "@/web/components/Link.jsx"

const ScanSummary = (props) => {
  const {
    post: { _id, IP, text },
  } = props

  return (
    <article className="flex flex-col gap-2">
      <header>
        <h1 className="text-lg font-semibold">
          <Link href={`/posts/${_id}`}>{IP}</Link>
        </h1>
      </header>
      <div>{text}</div>
    </article>
  )
}

export default ScanSummary
