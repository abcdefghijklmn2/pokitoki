import { supabaseInstance } from '@/lib/supabase'

import { Attendance } from './type'

const readUserAttendance = async ({ userId, year, month }: Omit<Attendance, 'attendance'>) => {
  const { data, error } = await supabaseInstance
    .from('attendance')
    .select('*')
    .eq('userId', userId)
    .eq('year', year)
    .eq('month', month)
    .single()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    return { attendance: 0 }
  }
  return data
}

const upsertUserAttendance = async ({ userId, year, month, attendance }: NonNullable<Attendance>) => {
  const { data, error } = await supabaseInstance.from('attendance').upsert([{ userId, year, month, attendance }], {
    onConflict: 'userId,year,month',
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

const AttendanceRepository = { readUserAttendance, upsertUserAttendance }

export default AttendanceRepository