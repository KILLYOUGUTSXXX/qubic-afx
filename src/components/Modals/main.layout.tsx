/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import './style.scss'
import Icons from '../Others/icon.layout'
import { Modal } from 'antd'

interface IModalView {
  open: boolean
  showFooter?: boolean
  title?: string | React.ReactNode | React.JSX.Element
  /**default true */
  hideCloseIcon?: boolean
  children: any
  /**default 300px */
  width?: string | number
  /**work, only if "hideCloseIcon" = "true" */
  onClose?: () => void
}

export default function ModalView(props: IModalView) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  const onCloseModal = () => {
    return props.onClose?.()
  }

  return (
    <Modal
      className="custom-modal"
      style={{ top: 30 }}
      footer={[]}
      open={open}
      onClose={onCloseModal}
      closable={false}
      width={props.width}
    >
      <div className="modal-container bg-white dark:bg-slate-600 py-2 px-4">
        {!props.hideCloseIcon && (
          <a
            className="modal-closeable !bg-white dark:!bg-slate-600"
            onClick={onCloseModal}
          >
            <Icons type="CloseOutlined" size={16} noDefaultColor />
          </a>
        )}
        <div className="modal-header text-dark-color dark:text-light-color">
          {props.title}
        </div>
        <div className="modal-content text-dark-color dark:text-light-color">
          {props.children}
        </div>
      </div>
    </Modal>
  )
}
