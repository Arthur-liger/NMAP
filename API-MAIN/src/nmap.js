import { spawn } from "node:child_process"

const nmap = async (IP, option) => {
  console.log(IP, option)
  const child = await spawn("nmap", [IP, option], {cwd: "", env: process.env})
  let result = ""
  child.stdout.on("data", async (data) => { result = data.toString("utf8") })
  child.stderr.on("data", (data) => { result = data.toString("utf8") })
  child.on("error", (error) => { result = error.toString("utf8") })

  return result
}

export { nmap }