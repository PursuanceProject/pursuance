CREATE TABLE pursuance_hierarchical_relationships (
  parent_id   integer NOT NULL REFERENCES pursuances ON DELETE CASCADE,
  child_id    integer NOT NULL REFERENCES pursuances ON DELETE CASCADE,
  PRIMARY KEY (parent_id, child_id)
);
ALTER TABLE pursuance_hierarchical_relationships OWNER TO superuser;
