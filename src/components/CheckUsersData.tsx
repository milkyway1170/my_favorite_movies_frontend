const CheckUsersData = () => {
  if(!localStorage.getItem('usersData')){
    const usersData = { 'admin':'admin', 'vladislav.bublik@kodep.ru': 'password' };
    localStorage.setItem('usersData', JSON.stringify(usersData));
  }
};

export default CheckUsersData;