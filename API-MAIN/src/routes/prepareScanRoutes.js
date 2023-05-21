import ScanModel from "../db/models/ScanModel.js"
import auth from "../middlewares/auth.js"
import fetchScan from "../middlewares/fetchScan.js"
import { nmap } from "../nmap.js"

const prepareScanRoutes = (app) => {
  // CREATE
  app.post("/scans", async (req, res) => {
    const { title, IP, option } = req.body
    const result = await nmap(IP, option)
    const scan = await new ScanModel({
      title,
      result,
    })

    res.send({ result: scan })
  })

  // READ collection
  app.get("/scans", async (req, res) => {
    const scans = await ScanModel.find()

    res.send({ result: scans })
  })

  // READ single
  app.get("/scans/:scanId", fetchScan, async (req, res) => {
    res.send({ result: req.ctx.post })
  })

  // UPDATE
  app.patch("/scans/:scanId", fetchScan, async (req, res) => {
    const { title, result } = req.body
    const { scan } = req.ctx

    Object.assign(scan, {
      title: title ?? scan.title,
      result: result ?? scan.result,
    })

    await scan.save()

    res.send({ result: scan })
  })

  // DELETE
  app.delete("/scans/:scanId", auth, fetchScan, async (req, res) => {
    const { scan } = req.ctx

    await ScanModel.findByIdAndDelete(scan._id)

    res.send({ result: scan })
  })
}

export default prepareScanRoutes
