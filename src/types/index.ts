export type Transition =
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'fade'
  | 'fade-slide'
  | 'fade-up'
  | 'fade-down'
  | 'fade-scale'
  | 'bounce'
  | 'fade-slow'
  | 'fade-slide-slow'
  | 'fade-up-slow'
  | 'fade-down-slow'
  | 'collapse'

export interface TransitionItem {
  name: Transition
  icon: string
  enterActive: string
  leaveActive: string
  enterFrom?: string
  leaveTo?: string
}
