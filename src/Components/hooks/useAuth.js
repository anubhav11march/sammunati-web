const useAuth = () => {
  const token =  JSON.parse(localStorage.getItem('accessToken'));
  const userData=JSON.parse(localStorage.getItem('token'));
  let auth = null;
  let user=null;
  if (token && userData) {
    auth=token
    user=userData
  }
  return { auth,user };
};

export default useAuth;
