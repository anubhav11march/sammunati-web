const useAuth = () => {
  const token =  JSON.parse(localStorage.getItem('accessToken'));
  let auth = null;
  if (token) {
    auth=token
  }
  return { auth };
};

export default useAuth;
