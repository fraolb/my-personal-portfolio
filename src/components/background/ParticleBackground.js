import Particles from "react-tsparticles"
import ParticlesConfig from "./config/Particles-config"

function ParticleBackground() {
  return (
    <Particles params={ParticlesConfig}></Particles>
  )
}

export default ParticleBackground