import React, { Ref, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { cx, css } from '@emotion/css'
import heading1 from '../../public/assets/imgs/toolbar/heading1.svg'
import heading2 from '../../public/assets/imgs/toolbar/heading2.svg'
import italic from '../../public/assets/imgs/toolbar/italic.svg'
import underLine from '../../public/assets/imgs/toolbar/underline.svg'
import bold from '../../public/assets/imgs/toolbar/bold.svg'
import numberList from '../../public/assets/imgs/toolbar/numberedList.svg'
import bullets from '../../public/assets/imgs/toolbar/bullets.svg'
import quote from '../../public/assets/imgs/toolbar/quote.svg'
import alignLeft from '../../public/assets/imgs/toolbar/textLeft.svg'
import alignRight from '../../public/assets/imgs/toolbar/textRight.svg'
import alignJustify from '../../public/assets/imgs/toolbar/textJustify.svg'
import alignCenter from '../../public/assets/imgs/toolbar/textCenter.svg'
import code from '../../public/assets/imgs/toolbar/code.svg'

interface BaseProps {
  className: string
  [key: string]: unknown
}
type OrNull<T> = T | null

export const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean
        reversed: boolean
      } & BaseProps
    >,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
        border: 1px solid ${active
          ? '#000'
          : 'transparent'} ;
    border-radius: 8px;
          cursor: pointer;
          color: ${reversed
            ? active
              ? 'white'
              : '#aaa'
            : active
            ? 'black'
            : '#ccc'};
        `
      )}
    />
  )
)

export const EditorValue = React.forwardRef(
  (
    {
      className,
      value,
      ...props
    }: PropsWithChildren<
      {
        value: any
      } & BaseProps
    >,
    ref: Ref<OrNull<null>>
  ) => {
    const textLines = value.document.nodes
      .map(node => node.text)
      .toArray()
      .join('\n')
    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          className,
          css`
            margin: 30px -20px 0;
          `
        )}
      >
        <div
          className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
        >
          Slate's value as text
        </div>
        <div
          className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
        >
          {textLines}
        </div>
      </div>
    )
  }
)

export const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref}
    >   
        {props.children === 'format_bold' &&  <img src={bold.src} width="28" height="28" /> } 
        {props.children === 'looks_two' &&  <img src={heading2.src} width="28" height="28" /> } 
        {props.children === 'looks_one' &&  <img src={heading1.src} width="28" height="28"/> } 
        {props.children === 'format_italic' &&  <img src={italic.src} width="28" height="28" /> } 
        {props.children === 'format_underlined' &&  <img src={underLine .src} width="28" height="28" /> } 

        {props.children === 'format_list_numbered' &&  <img src={numberList.src} width="28" height="28" /> } 
        {props.children === 'format_list_bulleted' &&  <img src={bullets.src} width="28" height="28" /> } 
        {props.children === 'format_quote' &&  <img src={quote.src} width="28" height="28" /> } 
        {props.children === 'format_align_left' &&  <img src={alignLeft.src} width="28" height="28" /> } 
        {props.children === 'format_align_right' &&  <img src={alignRight.src} width="28" height="28" /> } 
        {props.children === 'format_align_justify' &&  <img src={alignJustify.src} width="28" height="28" /> } 
        {props.children === 'format_align_center' &&  <img src={alignCenter.src} width="28" height="28" /> } 
        {props.children === 'code' &&  <img src={code.src}  width="28" height="28"/> } 


        


  
    </span>
    
  )
)

export const Instruction = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          white-space: pre-wrap;
          margin: 0 -20px 10px;
          padding: 10px 20px;
          font-size: 14px;
          background: #f8f8e8;
        `
      )}
    />
  )
)

export const Menu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 15px;
          }
        `
      )}
    />
  )
)

export const Portal = ({ children }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null
}

export const Toolbar = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLDivElement>>
  ) => (
    <Menu
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          position: relative;
          border: 1px solid #BCBEC8;
         border-top:  0;
        padding: 12px ;
        `
      )}
    />
  )
)