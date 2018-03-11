CREATE TYPE tasks_status AS ENUM (
  'New',
  'Started',
  'WorkingOn',
  'HelpWanted',
  'ReadyForReview',
  'Reviewing',
  'Done'
);

ALTER TABLE tasks ADD COLUMN status tasks_status NOT NULL DEFAULT 'New';
