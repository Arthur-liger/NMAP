import Page from "@/web/components/Page.jsx"
import ScanSummary from "@/web/components/ScanSummary.jsx"
import api from "@/web/services/api.js"
import { useEffect, useState } from "react"

const IndexPage = () => {
  const [scans, setScans] = useState([])

  useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await api("/scans")

      setScans(result)
    })()
  }, [])

  return (
    <Page className="gap-8">
      {scans.map((scan) => (
        <ScanSummary key={scan._id} post={scan} />
      ))}
    </Page>
  )
}

export default IndexPage
