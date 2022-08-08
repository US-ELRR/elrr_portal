import create from 'zustand';

const loadUserDataFromStorage = () => {
  // ssr
  if (typeof window === 'undefined') {
    return null;
  }

  // csr
  // check if there is user data in local storage
  const user = localStorage.getItem('user');

  // parse the user data
  if (!user) return null;
  return JSON.parse(user);
};

const setUserDataToStorage = (user) => {
  // ssr
  if (typeof window === 'undefined') return;

  // csr
  // set the user data to local storage
  localStorage.setItem('user', JSON.stringify(user));
};

const removeUserDataFromStorage = () => {
  // ssr
  if (typeof window === 'undefined') return;

  // csr
  // remove the user data from local storage
  localStorage.removeItem('user');
};

const useStore = create((set) => ({
  // on load check if there is user data in local storage
  userData: loadUserDataFromStorage(),
  setUserData: (userData) =>
    set(() => {
      setUserDataToStorage(userData);
      return { userData };
    }),
  removeUserData: () =>
    set(() => {
      removeUserDataFromStorage();
      return { userData: null };
    }),
}));

export default useStore;
