import type {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react'

export type SpecularButtonProps = {
  /** Button label or any content. */
  children?: ReactNode
  /** Padding and font size of the button. */
  size?: 'sm' | 'md' | 'lg'
  /** Corner radius in px. Values past half the height make a pill. */
  radius?: number
  /** Color of the glass body. */
  tint?: string
  /** How strongly the tint fills the body, from 0 to 1. */
  tintOpacity?: number
  /** Blur of whatever sits behind the button, in px. */
  blur?: number
  /** Color of the label. */
  textColor?: string
  /** Color of the light on the edge. */
  lineColor?: string
  /** Color of the thin edge line under the light. */
  baseColor?: string
  /** Brightness of the light on the edge. */
  intensity?: number
  /** How much light stays on when the cursor is away, from 0 to 1. */
  idleIntensity?: number
  /** How much of the edge the light covers, in degrees. */
  shineSize?: number
  /** How far the light fades out past that, in degrees. */
  shineFade?: number
  /** Width of the lit edge in px. */
  thickness?: number
  /** Soft light around the lit edge and inside the glass. */
  glow?: number
  /** Moves the light to the part of the edge nearest the cursor. */
  followMouse?: boolean
  /** Distance in px at which the light starts to follow the cursor. */
  proximity?: number
  /** Keeps the light circling the edge whenever the cursor is away. */
  autoAnimate?: boolean
  /** How fast the light circles when autoAnimate is on. */
  speed?: number
  /** Disables the button. */
  disabled?: boolean
  /** Click handler. */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /** Native button type. */
  type?: 'button' | 'submit' | 'reset'
  /** Extra class names for the button. */
  className?: string
  /** Inline styles for the button. */
  style?: CSSProperties
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | 'children'
  | 'onClick'
  | 'type'
  | 'disabled'
  | 'className'
  | 'style'
>

export default function SpecularButton(
  props: SpecularButtonProps,
): ReactElement
