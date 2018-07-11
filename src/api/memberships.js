import * as postgrest from './postgrest';

export const postMembershipReq = membership => {
  return postgrest
    .postJSON('/memberships', membership, { Prefer: 'return=representation' })
    .then(membershipJSON => membershipJSON[0])
    .catch(err => console.log('Error posting membership:', err));
};
