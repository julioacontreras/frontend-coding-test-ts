export type EventData = {
  data: unknown
}
export type CallbackEvent = (e: EventData) => void

export function addEvent(name: string, callback: CallbackEvent) {
  window.addEventListener(name, (event: Event) => {
    const eventData = event as unknown as EventData
    callback(eventData)
  })
}

export function execEvent(name: string, data: unknown) {
  const event = new Event(name)
  // eslint-disable-next-line no-param-reassign
  ;(event as unknown as EventData).data = data
  window.dispatchEvent(event)
}
