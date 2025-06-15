/*Online status
 
Display online status for a list of users.
 
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.*/ 


function onlineStatus(users) {
  switch (users.length) {
    case 0:
      return 'No users online';
    case 1:
      return `${users[0]} online`;
    case 2:
      return `${users[0]} and ${users[1]} online`;
    default:
      return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
  }
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
