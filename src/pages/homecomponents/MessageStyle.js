import React , { useState } from 'react'
import classNames from 'classnames'

import { useAuthState } from '../../context/auth'
import { OverlayTrigger, Tooltip, Button, Popover } from 'react-bootstrap'
import moment from 'moment'

const reactions = ['❤️', '😆', '😯', '😢', '😡', '👍', '👎']

export default function MessageStyle({message}) {
    const { user } = useAuthState()
    const sent = message.from === user.username
    const received = !sent
    const [showEmoji, setEmoji] = useState(false)

    const react = (reaction) => {
      console.log(`Reacting ${reaction} to message: ${message.uuid} `)
    }

    const reactButton = 
    <OverlayTrigger 
      trigger="click"
      placement="top"
      show={showEmoji}
      onToggle={setEmoji}
      transition={false}
      overlay ={
      <Popover
        className = "rounded-pill">
          <Popover.Content>
          {reactions.map(reaction => (
            <Button 
            variant="link" 
            className="reacticonBtn"
            key={reaction} 
            onClick={() => react(reaction)}
            >
              {reaction}
            </Button>
          ))}
          </Popover.Content>
        </Popover>
      }
      >
    <Button variant = "link" className="px-2" >
      <i class="far fa-smile-wink"></i> 
    </Button>
    </OverlayTrigger>

    return ( 
      <div
      className={classNames('d-flex my-3', {
        'ml-auto': sent,
        'mr-auto': received,
      })}
    >
      {sent && reactButton}
        <OverlayTrigger
        placement={sent ? 'right' : 'left'}
        overlay={
          <Tooltip>
            {moment(message.createdAt).format('MMMM DD, YYYY @ h:mm a')}
          </Tooltip>
        }
        transition={false}
      >
          <div
            className={classNames('py-2 px-3 rounded-pill', {
              'bg-primary': sent,
              'bg-secondary': received,
            })}
          >
            <p className={classNames({ 'text-white': sent })} key={message.uuid}>
              {message.content}
            </p>
          </div>
        
      </OverlayTrigger>
      {received && reactButton}
      </div>
    )
  }