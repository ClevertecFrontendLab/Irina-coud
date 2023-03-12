import { useNavigate } from "react-router-dom";

export function useDeleteToken() {

  const navigate = useNavigate();

  async function unauthorizedUser() {
    await deleteCookie();
    navigate('/')
  }

  function deleteCookie() {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  return unauthorizedUser
}