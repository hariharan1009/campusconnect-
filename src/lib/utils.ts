// Simple utility for conditional class names
type ClassValue = string | boolean | null | undefined

export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(' ')
}