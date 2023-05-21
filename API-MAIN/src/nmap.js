import { spawn } from "node:child_process"
import { onExit } from "@rauschma/stringio"

const nmap = async (IP, option) => {
  console.log(IP, option)
  const child = await spawn("nmap", [IP, option], { cwd: "", env: process.env})
  let res = ""
  child.stdout.on("data", (data) => {
    res = data.toString("utf8")
  })

  await onExit(child)

  return res
}

export { nmap }