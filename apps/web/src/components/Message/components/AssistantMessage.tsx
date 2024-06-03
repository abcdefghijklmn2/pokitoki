import React from 'react'

import { Profile } from '../../Profile'
import { StyledMessage } from '../style'
import { MessageProps } from '../type'
import { SpeechBalloon } from './SpeechBalloon'

export const AssistantMessage = ({ message }: MessageProps) => {
  return (
    <>
      <div className="absolute left-0 flex flex-col items-center justify-center w-max">
        <span>pokitoki</span>
        <Profile
          src="https://qmwtuvttspuxwuwrsuci.supabase.co/storage/v1/object/public/pokitokiStorage/avat.png"
          alt="pokitoki profile"
        />
      </div>
      <div className={StyledMessage({ role: message.role })}>
        <SpeechBalloon className="absolute left-[-12px] z-[-10] top-5 rotate-90" />
        {message.content}
        <br />
      </div>
    </>
  )
}
