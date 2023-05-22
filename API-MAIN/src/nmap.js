import { spawn } from "node:child_process"
import { onExit } from "@rauschma/stringio"

const nmap = async (IP, option) => {
  const child = await spawn("nmap", [IP, option], { cwd: "", env: process.env})
  let res = ""
  child.stdout.on("data", (data) => {
    console.log(data.toString("utf8"))
    res = data.toString("utf8")
  })

  await onExit(child)

  return res
}

export { nmap }