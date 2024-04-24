/* eslint-disable jsx-a11y/label-has-associated-control */

import { LogScreen } from '@custompackages/designsystem'
import { Metadata } from 'next'
import { useRef } from 'react'

import TutorialConnector from '@/components/Tutorial/TutorialConnector'
import { getMetadata } from '@/utils'
import { MetadataParams } from '@/utils/metadata/metadata'

export async function generateMetadata({ params: { locale } }: MetadataParams): Promise<Metadata> {
  return getMetadata({
    title: 'pokitoki dashboard',
    description: 'dashboard page',
    path: `${locale}/protected/dashboard/selfstudy`,
    locale,
  })
}
const List = () => {
  const ls = [1, 2, 3, 4, 5]

  return (
    <div className="flex flex-col bg-white-white gap-[20px]">
      {ls.map((ele) => {
        return (
          <div key={ele} className={`Step${ele} justify-center align-middle flex h-[30vh]`}>
            {ele}
          </div>
        )
      })}
    </div>
  )
}

const steps = [
  {
    target: '.Step1',
    content: <h2>let begin our journey!</h2>,

    disableBeacon: true,
  },
  {
    target: '.Step2',
    content: <h2>let begin our journey!</h2>,

    disableBeacon: true,
  },
]
const Page = async () => {
  // const t = await getI18n('Index')
  // const session = await getLoginSession()

  return (
    <LogScreen>
      <List />
      <TutorialConnector steps={steps} />
    </LogScreen>
  )
}

export default Page
