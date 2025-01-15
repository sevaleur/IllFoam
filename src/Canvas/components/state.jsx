import { proxy } from "valtio"

const state = proxy({
  current: null,
  colorway: { laces: "#cfd7d6", mesh: "#15252d", caps: "#cfd7d6", inner: "#cfd7d6", sole: "#cfd7d6", stripes: "#FC5200", band: "#cfd7d6", patch: "#FC5200" }
})

export default state 