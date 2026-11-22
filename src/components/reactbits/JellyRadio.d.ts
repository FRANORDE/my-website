import type { ReactElement, ReactNode } from 'react'

export type JellyRadioItem =
  | string
  | {
      value: string
      label: ReactNode
      icon?: ReactNode
      disabled?: boolean
    }

export type JellyRadioProps = {
  /** The chips. A string is both value and label. */
  items?: JellyRadioItem[]
  /** Controlled value. Outside changes jump. */
  value?: string
  /** Initial value when uncontrolled. Falls back to the first item. */
  defaultValue?: string
  /** Called on the commit, before the motion ends. */
  onChange?: (value: string, index: number) => void
  /** Surface of an unchosen chip. */
  chipColor?: string
  /** Surface of the chosen chip. */
  activeColor?: string
  /** Label of an unchosen chip, and the hover tone. */
  textColor?: string
  /** Label of the chosen chip. */
  activeTextColor?: string
  /** Chip height: 28, 36 or 44 pixels. */
  size?: 'sm' | 'md' | 'lg'
  /** Rest spacing between chips in pixels. */
  gap?: number
  /** Corner radius in pixels. */
  radius?: number
  /** How much the chosen chip grows. */
  swell?: number
  /** Extra pixels every neighbour is shoved beyond that room. */
  barge?: number
  /** How much every unchosen chip gives up. */
  shrink?: number
  /** The wide-before-tall split. */
  jelly?: number
  /** One minus the damping ratio. */
  bounce?: number
  /** Milliseconds per row step before a neighbour moves. */
  stagger?: number
  /** Spring stiffness of the chosen chip. */
  stiffness?: number
  /** Fades the group and ignores input. */
  disabled?: boolean
  /** Accessible name of the group. */
  ariaLabel?: string
  /** Extra classes for the group. */
  className?: string
}

export default function JellyRadio(props: JellyRadioProps): ReactElement
