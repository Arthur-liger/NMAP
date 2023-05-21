import { model } from "mongoose"
import ScanShema from "../schemas/ScanShema.js"

const ScanModel = model("Scan", ScanShema)

export default ScanModel