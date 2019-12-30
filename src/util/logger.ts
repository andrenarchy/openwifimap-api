import * as bunyan from 'bunyan'

export function createLogger () {
  return bunyan.createLogger({
    name: 'openwifimap-api',
    serializers: bunyan.stdSerializers
  })
}
