import React from 'react'

import request from '@/api'
import { getAssistantList } from '@/app/api/chatgpt/assistant/api'
import { getConversationTopicList } from '@/app/api/protected/conversation/topic/api'
import { AssistantCard } from '@/components'
import { getI18n } from '@/lib/i18n'
import { Assistant } from '@/server/service/chatgpt/type'

const TopicOnSituationSection = async () => {
  const i18nLearn = await getI18n('LEARN')
  const i18nStat = await getI18n('STAT')

  const { topics } = await getConversationTopicList()

  return (
    <section className="flex flex-col gap-1">
      <div className="flex flex-col justify-between gap-1">
        <h2 className="body-03-m text-text-01">{i18nStat('RECOMMEND-TITLE')}</h2>
        <p className="text-text-03 body-01-r">{i18nStat('RECOMMEND-DESCRIPTION')}</p>
      </div>

      <div className="flex flex-row gap-2 px-1 py-2 overflow-x-scroll overflow-y-hidden">
        {topics.map((params) => {
          const { id, assistantId, description, title } = params

          return (
            <AssistantCard
              key={id}
              className="shrink-0"
              variant="medium"
              subTitle={description}
              mainTitle={title}
              url="https://qmwtuvttspuxwuwrsuci.supabase.co/storage/v1/object/public/pokitokiStorage/image%2034.png"
              alt=""
              assistantInfo={params}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TopicOnSituationSection
