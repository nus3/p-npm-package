import { FC, ReactNode } from 'react'
// import styles from './styles.module.css'
import '../../index.css'

export type ButtonProps = {
  onClick?: () => void
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  <button
    type="submit"
    className="inline-block bg-indigo-500 text-white p-2 rounded-sm"
    onClick={onClick}
  >
    {children}
  </button>
)
