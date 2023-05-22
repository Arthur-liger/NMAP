import Link from "@/web/components/Link.jsx"

const ScanSummary = (props) => {
  const {
    post: { _id, title, result },
  } = props

  return (
    <article className="flex flex-col gap-2">
      <header> 
        <h1 className="text-lg font-semibold">
          <Link href={`/posts/${_id}`}>{title}</Link>
        </h1>
      </header>
      <div>{result}</div>
    </article>
  )
}

export default ScanSummary
