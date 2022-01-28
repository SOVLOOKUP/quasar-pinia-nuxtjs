type ModeType = 'build' | 'app'

interface ConfigStore {
  mode: ModeType
}

export { ModeType, ConfigStore }
