import { supabaseInstance } from '@/lib/supabase'

// 사용자별 해당 튜터의 스레드(채팅방) ID를 가져옴
export const getThreadIds = async (userId: string, assistantId: string) => {
  const { data: threadIds } = await supabaseInstance
    .from('user_threads')
    .select('thread_id')
    .eq('user_id', userId)
    .eq('assistant_id', assistantId)
  return threadIds
}

// 사용자별 해당 튜터의 스레드(채팅방) ID를 저장
export const insertThread = async (userId: string, assistantId: string, threadId: string) => {
  const { error } = await supabaseInstance
    .from('user_threads')
    .insert({ user_id: userId, assistant_id: assistantId, thread_id: threadId } as never)

  return { isSuccess: !error, error }
}

// 사용자별 해당 튜터의 스레드(채팅방) ID를 제거
export const deleteThread = async (userId: string, threadId: string) => {
  const { error } = await supabaseInstance.from('user_threads').delete().eq('user_id', userId).eq('thread_id', threadId)

  return { isSuccess: !error, error }
}

export default { getThreadIds, insertThread, deleteThread }
