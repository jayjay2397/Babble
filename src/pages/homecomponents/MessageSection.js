import React, { Fragment, useEffect, useState } from 'react'
import { gql, useLazyQuery, useMutation } from '@apollo/client'
import {Col,Form} from 'react-bootstrap'
import Message from './MessageStyle'
import { useMessageDispatch, useMessageState } from '../../context/msgcontext'


const SEND_MESSAGE = gql `
mutation sendMessage($to: String!, $content: String!){
  sendMessage(to: $to, content: $content){
    uuid from to content createdAt
  }
}

`


const GET_MESSAGES = gql`
  query getMessages($from: String!) {
    getMessages(from: $from) {
      uuid
      from
      to
      content
      createdAt
    }
  }
`

export default function MessageSection() {
    const {users} = useMessageState()
    const dispatch = useMessageDispatch()
    const [content, setContent] = useState('')

    const selectedUser = users?.find(u => u.selected === true )
    const messages = selectedUser?.messages


    const [
        getMessages,
        { loading: messagesLoading, data: messagesData },
      ] = useLazyQuery(GET_MESSAGES)


      const [sendMessage] = useMutation(SEND_MESSAGE,{
        onCompleted: data => dispatch({type: 'ADD_MESSAGE', payload:{
          username: selectedUser.username,
          message: data.sendMessage
        }}),
        onError: err => console.log(err)
      })
    
      useEffect(() => {
        if (selectedUser && !selectedUser.messages) {
          getMessages({ variables: { from: selectedUser.username } })
        }
      }, [selectedUser])

      useEffect(() => {
        if (messagesData) {
          dispatch({type: 'SET_USER_MESSAGES', 
          payload: {
              username: selectedUser.username,
              messages: messagesData.getMessages,
            },
          })
        }
      }, [messagesData])

      const submitMessage = e => {
        e.preventDefault()

        if(content === '' || !selectedUser) return

        setContent('')

        // Mutation for sending new messages
        sendMessage({variables: {to: selectedUser.username, content }})
      }
    
      // if (messagesData) console.log(messagesData.getMessages)
    

      let selectedChatMarkup
      if (!messages && !messagesLoading) {
        selectedChatMarkup = <p className="info-txt">Select a friend 💁‍ </p>
      } else if (messagesLoading) {
        selectedChatMarkup = <p className="info-txt">Loading..</p>
      } else if (messages.length > 0) {
        selectedChatMarkup = messages.map((message,index) => (
          <Fragment key={message.uuid}>
          <Message message={message} />
          {index === messages.length - 1 && (
            <div className="invisible">
              <hr className="m-0" />
            </div>
          )}
        </Fragment>
        ))
      } else if (messages.length === 0) {
        selectedChatMarkup = <p className="info-txt">You're connected! Send your first message 😎 !</p>
      }
      return (
        <Col xs={10} md={8} >
          <div className="messages-box d-flex flex-column-reverse">

          {selectedChatMarkup}

          </div>
          <div>
          <Form onSubmit = {submitMessage}>
            <Form.Group>
              <Form.Control 
              type = "text"
              className= "msg-input p-4 rounded-pill bg-secondary border-0"
              placeholder = "Message..."
              value={content}
              onChange={e => setContent(e.target.value)}/>
              <i class="fas fa-paper-plane"></i>
            </Form.Group>
          </Form>
          </div>
        </Col>
      )
    }
