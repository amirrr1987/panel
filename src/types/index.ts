export type Transition =
  | 'fade-down'
  | 'fade-slide'
  | 'fade'
  | 'fade-up'

export interface TransitionItem {
  name: Transition
  icon: string
  enterActive: string
  leaveActive: string
  enterFrom?: string
  leaveTo?: string
}
