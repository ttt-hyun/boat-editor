export type ResultVisibility = 'AFTER_VOTE' | 'AFTER_END' | 'ALWAYS'

export interface PollOption {
  id: string
  text: string
  order: number
  voteCount?: number
}

export interface Poll {
  id: string
  title: string
  allowMultiple: boolean
  isAnonymous: boolean
  resultVisibility: ResultVisibility
  endDate?: string | null
  maxParticipants?: number | null
  options: PollOption[]
  createdById: string
  createdAt: string
}

export interface PollVote {
  pollId: string
  optionId: string
  voterId: string
}

export interface PollResults {
  pollId: string
  totalVotes: number
  options: Array<{
    id: string
    text: string
    voteCount: number
    percentage: number
  }>
  hasVoted: boolean
  userVotes?: string[]
}
