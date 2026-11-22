import type { ReactElement, ReactNode } from 'react'

export type RubberSegmentItem =
  | string
  | {
      value: string
      label: ReactNode
      icon?: ReactNode
    }

export type RubberSegmentProps = {
  /** The slots, in order. A string is both value and label. */
  items: RubberSegmentItem[]
  /** Controlled value. A change from outside jumps the thumb without animation. */
  value?: string
  /** Initial value when uncontrolled; the first item if omitted. */
  defaultValue?: string
  /** Called on a tap, on a drag release and on every arrow key. */
  onChange?: (value: string, index: number) => void
  /** The well behind the slots. */
  trackColor?: string
  /** The rubber thumb, and the focus ring. */
  thumbColor?: string
  /** Idle labels, drawn at 70%. */
  textColor?: string
  /** The label revealed inside the thumb. */
  activeTextColor?: string
  /** Track height 28, 36 or 44 pixels. */
  size?: 'sm' | 'md' | 'lg'
  /** Track corner radius in pixels. */
  radius?: number
  /** Gap between the thumb and the track edge. */
  inset?: number
  /** Every slot the same width. */
  equalSlots?: boolean
  /** How far a tap dilates the thumb across old and new slot. */
  stretch?: number
  /** Pixels the trailing edge lands past the slot edge before relaxing. */
  squash?: number
  /** Scales every phase together. */
  speed?: number
  /** How far a flick carries the thumb before it snaps. */
  glide?: number
  /** Lets the thumb be grabbed, dragged and flicked. */
  draggable?: boolean
  /** Dims the control and ignores input. */
  disabled?: boolean
  /** Extra classes for the track. */
  className?: string
  /** Accessible name of the radio group. */
  'aria-label'?: string
}

export default function RubberSegment(props: RubberSegmentProps): ReactElement
