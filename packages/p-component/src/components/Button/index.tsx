import { FC, ReactNode } from 'react'
import { helloVite } from '@nus3/p-method'
import styles from './styles.module.css'

export type ButtonProps = {
  onClick?: () => void
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  <button type="submit" className={styles.wrap} onClick={onClick}>
    {children}
    {helloVite()}
  </button>
)
