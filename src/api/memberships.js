import * as postgrest from './postgrest';

export const postMembershipReq = membership => {
  return postgrest
    .postJSON('/memberships', membership, { Prefer: 'return=representation' })
    .then(membershipJSON => membershipJSON[0])
    .catch(err => console.log('Error posting membership:', err));
};


export const getMembershipsReq = (filterOption) => {
  const filterKey = Object.keys(filterOption)[0];
  const filterVal = Object.values(filterOption)[0];
  return postgrest
    .getJSON('/memberships')
    .then(memberships => memberships.filter((membership) => {
      return membership[filterKey] === filterVal;
    }))
    .then((memberships) => memberships.map((membership) => {
      return {
        [membership.pursuance_id] : membership
      };
    }))
    .catch(err => console.log('Error fetching memberships', err));
};

export const delMembershipReq = ({ pursuance_id, user_username}) => {
  return postgrest
    .deleteJSON(`/memberships?user_username=eq.${user_username}&pursuance_id=eq.${pursuance_id}`,
      {
        Prefer: 'return=representation'
      })
    .then(membershipJSON => membershipJSON[0])
    .catch(err => console.log('Error deleting membership:', err));
}
