import React from 'react'

type IText = {
  className?: string
  children: number | string | boolean | null
}

export default function Text(props: IText) {
  const className = `!text-dark-color dark:!text-light-color ${props.className || ''} `
  return <span {...props} className={className} />
}
