import Loader from "@/web/components/Loader.jsx"
import Page from "@/web/components/Page.jsx"
import Scan from "@/web/components/Scan.jsx"
import api from "@/web/services/api.js"
import { useEffect, useState } from "react"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      scanId: params.scanId,
    },
  },
})

const ScanPage = (props) => {
  const [scan, setScan] = useState(null)
  const { scanId } = props.params

  useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await api(`/scans/${scanId}`)

      setScan(result)
    })()
  }, [scanId])

  return <Page>{scan ? <Scan post={scan} /> : <Loader />}</Page>
}

export default ScanPage
