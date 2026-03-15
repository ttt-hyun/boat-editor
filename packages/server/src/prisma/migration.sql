-- boat-editor Poll Tables Migration
-- 소비자의 마이그레이션 디렉토리에 복사하거나 직접 실행하세요.

CREATE TABLE IF NOT EXISTS "boat_polls" (
  "id" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "allowMultiple" BOOLEAN NOT NULL DEFAULT false,
  "isAnonymous" BOOLEAN NOT NULL DEFAULT false,
  "resultVisibility" TEXT NOT NULL DEFAULT 'AFTER_VOTE',
  "endDate" TIMESTAMP(3),
  "maxParticipants" INTEGER,
  "createdById" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "boat_polls_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "boat_poll_options" (
  "id" TEXT NOT NULL,
  "pollId" TEXT NOT NULL,
  "text" TEXT NOT NULL,
  "order" INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "boat_poll_options_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "boat_poll_votes" (
  "id" TEXT NOT NULL,
  "pollId" TEXT NOT NULL,
  "optionId" TEXT NOT NULL,
  "voterId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "boat_poll_votes_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "boat_poll_options"
  ADD CONSTRAINT "boat_poll_options_pollId_fkey"
  FOREIGN KEY ("pollId") REFERENCES "boat_polls"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "boat_poll_votes"
  ADD CONSTRAINT "boat_poll_votes_pollId_fkey"
  FOREIGN KEY ("pollId") REFERENCES "boat_polls"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "boat_poll_votes"
  ADD CONSTRAINT "boat_poll_votes_optionId_fkey"
  FOREIGN KEY ("optionId") REFERENCES "boat_poll_options"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

CREATE UNIQUE INDEX IF NOT EXISTS "boat_poll_votes_pollId_optionId_voterId_key"
  ON "boat_poll_votes"("pollId", "optionId", "voterId");
